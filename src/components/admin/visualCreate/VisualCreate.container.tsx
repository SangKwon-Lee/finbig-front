import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import {
  Mutation,
  MutationCreateVisualDatumArgs,
  MutationUpdateVisualDatumArgs,
  Query,
  QueryVisualDatumArgs,
} from "../../../commons/types/generated/types";
import { S3 } from "../../common/conf/aws";
import VisualCreatePresenter from "./VisualCreate.presenter";
import {
  CREATE_VISUAL_DATUM,
  FETCH_VISUAL_DATUM,
  UPDATE_VISUAL_DATUM,
} from "./VisualCreate.query";

interface VisualCreateContainerProps {
  path: string;
}

const VisualCreateContainer: React.FC<VisualCreateContainerProps> = ({
  path,
}) => {
  const navigate = useNavigate();
  const { visualId } = useParams();

  //* 기존 데이터 불러오기
  const { data } = useQuery<Query, QueryVisualDatumArgs>(FETCH_VISUAL_DATUM, {
    variables: {
      id: String(visualId),
    },
  });

  //* 게시글 등록 및 수정 뮤테이션
  const [createVisual] = useMutation<Mutation, MutationCreateVisualDatumArgs>(
    CREATE_VISUAL_DATUM
  );
  const [updateVisual] = useMutation<Mutation, MutationUpdateVisualDatumArgs>(
    UPDATE_VISUAL_DATUM
  );

  //* 게시글 등록 Input
  const [input, setInput] = useState({
    category: "리츠",
    title: "",
    contents: "",
    thumbnail: "",
    description: "",
    thumbnailName: "",
  });

  useEffect(() => {
    setInput({
      ...input,
      category: data?.visualDatum?.category || "",
      title: data?.visualDatum?.title || "",
      contents: data?.visualDatum?.contents || "",
      description: data?.visualDatum?.description || "",
      thumbnail: data?.visualDatum?.thumbnail || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //*웹 에디터
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };

  //* 인풋 관리
  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //* 이미지 등록
  const registerImage = async (e: any) => {
    try {
      const timestamp = +new Date();
      await S3.putObject({
        Bucket: "hiddenbox-photo",
        Key: timestamp + e.target.files[0].name,
        ACL: "public-read",
        // ACL을 지우면 전체공개가 되지 않습니다.
        Body: e.target.files[0],
      }).promise();
      setInput({
        ...input,
        thumbnail: `https://${"hiddenbox-photo"}.s3.ap-northeast-2.amazonaws.com/${timestamp}${
          e.target.files[0].name
        }`,
        thumbnailName: e.target.files[0].name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //* 데이터 시각화 등록
  const handleCreateVisual = async () => {
    try {
      const { category, description, thumbnail, title } = input;
      const contents = log();
      await createVisual({
        variables: {
          input: {
            data: {
              category,
              description,
              thumbnail,
              title,
              viewCount: 0,
              contents,
            },
          },
        },
      });
      alert("게시글이 등록 됐습니다.");
      navigate("/admin/visuals");
    } catch (e) {
      console.log(e);
    }
  };

  //*데이터 시각화 수정

  const handleEditVisual = async () => {
    try {
      const { category, description, thumbnail, title } = input;
      const contents = log();
      await updateVisual({
        variables: {
          input: {
            data: {
              category,
              description,
              thumbnail,
              title,
              contents,
            },
            where: {
              id: String(visualId),
            },
          },
        },
      });
      console.log(input);
      alert("게시글이 수정 됐습니다.");
      navigate("/admin/visuals");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <VisualCreatePresenter
      input={input}
      editorRef={editorRef}
      handleInput={handleInput}
      registerImage={registerImage}
      handleCreateVisual={handleCreateVisual}
      data={data?.visualDatum}
      path={path}
      handleEditVisual={handleEditVisual}
    />
  );
};

export default VisualCreateContainer;

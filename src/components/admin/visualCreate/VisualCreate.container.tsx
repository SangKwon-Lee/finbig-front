import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import WithAdminAuth from "../../common/hocs/withAdminAuth";
import {
  Mutation,
  MutationCreateVisualDatumArgs,
  MutationUpdateVisualDatumArgs,
  Query,
  QueryFinbigsArgs,
  QueryVisualDatumArgs,
} from "../../../commons/types/generated/types";
import { S3 } from "../../common/conf/aws";
import VisualCreatePresenter from "./VisualCreate.presenter";
import {
  CREATE_VISUAL_DATUM,
  FETCH_FINBIGS,
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
  const { data, refetch } = useQuery<Query, QueryVisualDatumArgs>(
    FETCH_VISUAL_DATUM,
    {
      variables: {
        id: String(visualId),
      },
    }
  );

  //* 적용 데이터 불러오기

  const { data: finbigsData } = useQuery<Query, QueryFinbigsArgs>(
    FETCH_FINBIGS,
    {
      fetchPolicy: "no-cache",
    }
  );

  //* 게시글 등록 및 수정 뮤테이션
  const [createVisual] = useMutation<Mutation, MutationCreateVisualDatumArgs>(
    CREATE_VISUAL_DATUM
  );
  const [updateVisual] = useMutation<Mutation, MutationUpdateVisualDatumArgs>(
    UPDATE_VISUAL_DATUM
  );

  //* 게시글 등록 Input
  const [input, setInput] = useState<any>({
    category: "리츠",
    title: "",
    contents: "",
    thumbnail: "",
    description: "",
    thumbnailName: "",
    finbigs: [],
  });

  //* 적용데이터 모달
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setInput({
      ...input,
      category: data?.visualDatum?.category || "리츠",
      title: data?.visualDatum?.title || "",
      contents: data?.visualDatum?.contents || "",
      description: data?.visualDatum?.description || "",
      thumbnail: data?.visualDatum?.thumbnail || "",
      finbigs: data?.visualDatum?.finbigs?.map((data) => data?.id) || [],
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
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  //* 데이터 시각화 등록
  const handleCreateVisual = async () => {
    try {
      const { category, description, thumbnail, title, finbigs } = input;
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
              finbigs,
            },
          },
        },
      });
      refetch();
      alert("게시글이 등록 됐습니다.");
      navigate("/admin/visuals");
    } catch (e) {
      console.log(e);
    }
  };

  //*데이터 시각화 수정
  const handleEditVisual = async () => {
    try {
      const { category, description, thumbnail, title, finbigs } = input;
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
              finbigs,
            },
            where: {
              id: String(visualId),
            },
          },
        },
      });
      refetch();
      alert("게시글이 수정 됐습니다.");
      navigate("/admin/visuals");
    } catch (e) {
      console.log(e);
    }
  };

  //* 적용데이터 Input
  const handleRelationInput = (e: any) => {
    let newInput = [...input.finbigs];
    if (newInput.includes(e.target.id)) {
      newInput = newInput.filter((data) => data !== e.target.id);
    } else if (newInput.length > 3) {
      alert("적용 데이터는 4개까지 등록이 가능합니다.");
      return;
    } else {
      newInput.push(e.target.id);
    }
    setInput({
      ...input,
      finbigs: newInput,
    });
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
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      finbigsData={finbigsData?.finbigs}
      handleRelationInput={handleRelationInput}
    />
  );
};

export default WithAdminAuth(VisualCreateContainer);

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import WithAdminAuth from "../../common/hocs/withAdminAuth";
import { S3 } from "../../common/conf/aws";
import VisualCreatePresenter from "./VisualCreate.presenter";
import {
  useCreateVisualDatumMutation,
  useFinbigsQuery,
  useUpdateVisualDatumMutation,
  useVisualDatumQuery,
} from "../../../commons/graphql/generated";

interface VisualCreateContainerProps {
  path: string;
}

const VisualCreateContainer: React.FC<VisualCreateContainerProps> = ({
  path,
}) => {
  const navigate = useNavigate();
  const { visualId } = useParams();

  //* 기존 데이터 불러오기
  const { data: visualData, refetch } = useVisualDatumQuery({
    variables: {
      id: String(visualId),
    },
  });

  //* 적용 데이터 불러오기
  const { data: finbigsData, loading: finbigsLoading } = useFinbigsQuery({
    fetchPolicy: "no-cache",
  });

  //* 게시글 등록 및 수정 뮤테이션
  const [createVisual] = useCreateVisualDatumMutation();
  const [updateVisual] = useUpdateVisualDatumMutation();

  //* 게시글 등록 Input
  const [input, setInput] = useState<any>({
    category: "시각화",
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
      category: visualData?.visualDatum?.category || "시각화",
      title: visualData?.visualDatum?.title || "",
      contents: visualData?.visualDatum?.contents || "",
      description: visualData?.visualDatum?.description || "",
      thumbnail: visualData?.visualDatum?.thumbnail || "",
      finbigs:
        visualData?.visualDatum?.finbigs?.map((visualData) => visualData?.id) ||
        [],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visualData]);

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
      alert("오류가 발생했습니다.");
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
      alert("오류가 발생했습니다.");
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
      alert("오류가 발생했습니다.");
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
      open={open}
      path={path}
      visualData={visualData}
      finbigsData={finbigsData}
      finbigsLoading={finbigsLoading}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleInput={handleInput}
      registerImage={registerImage}
      handleCreateVisual={handleCreateVisual}
      handleEditVisual={handleEditVisual}
      handleRelationInput={handleRelationInput}
    />
  );
};

export default WithAdminAuth(VisualCreateContainer);

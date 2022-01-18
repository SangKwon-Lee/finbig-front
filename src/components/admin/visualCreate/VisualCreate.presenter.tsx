import AdminLayoutContainer from "../../common/layout/admin/AdminLayout.container";
import WebEditor from "../../common/webEditor/WebEditor";
import {
  VisualCreateBody,
  VisualCreateBtn,
  VisualCreateBtnWrapper,
  VisualCreateCancleBtn,
  VisualCreateDescriptionText,
  VisualCreateDescriptionWrapper,
  VisualCreateInputBody,
  VisualCreateInputContents,
  VisualCreateInputDescription,
  VisualCreateInputLabel,
  VisualCreateInputThumbnail,
  VisualCreateInputThumbnailLabel,
  VisualCreateInputTitle,
  VisualCreateInputWrapper,
  VisualCreateSelect,
  VisualCreateStar,
  VisualCreateThumbnailImg,
  VisualCreateThumbnailText,
  VisualCreateThumbnailTitle,
  VisualCreateThumbnailWrapper,
  VisualCreateTitle,
  VisualCreateWrapper,
} from "./VisualCreate.style";
import BlankImg from "../../../assets/images/blankImg.png";
import { useNavigate } from "react-router";
import { Maybe, VisualData } from "../../../commons/types/generated/types";

interface VisualCreateProps {
  input: {
    category: string;
    title: string;
    contents: string;
    thumbnail: string;
    description: string;
    thumbnailName: string;
  };
  editorRef: React.MutableRefObject<any>;
  handleInput: (e: any) => void;
  registerImage: (file: any) => Promise<void>;
  handleCreateVisual: () => Promise<void>;
  data: Maybe<VisualData> | undefined;
  path: string;
  handleEditVisual: () => Promise<void>;
}

const VisualCreatePresenter: React.FC<VisualCreateProps> = ({
  input,
  editorRef,
  handleInput,
  registerImage,
  handleCreateVisual,
  data,
  path,
  handleEditVisual,
}) => {
  const navigate = useNavigate();
  return (
    <VisualCreateWrapper>
      <AdminLayoutContainer menu="게시물"></AdminLayoutContainer>
      <VisualCreateBody>
        <VisualCreateTitle>게시물 등록</VisualCreateTitle>
        <VisualCreateInputBody>
          <VisualCreateInputWrapper>
            <VisualCreateInputLabel style={{ height: "81px" }}>
              카테고리
              <VisualCreateStar>&nbsp; *</VisualCreateStar>
            </VisualCreateInputLabel>
            <VisualCreateInputContents>
              <VisualCreateSelect
                onChange={handleInput}
                name="category"
                defaultValue={data?.category || "리츠"}
              >
                <option value="리츠">리츠</option>
              </VisualCreateSelect>
            </VisualCreateInputContents>
          </VisualCreateInputWrapper>
          <VisualCreateInputWrapper>
            <VisualCreateInputLabel style={{ height: "81px" }}>
              제목
              <VisualCreateStar>&nbsp; *</VisualCreateStar>
            </VisualCreateInputLabel>
            <VisualCreateInputContents>
              <VisualCreateInputTitle
                onChange={handleInput}
                name="title"
                defaultValue={data?.title || ""}
              />
            </VisualCreateInputContents>
          </VisualCreateInputWrapper>
          <VisualCreateInputWrapper>
            <VisualCreateInputLabel style={{ height: "203px" }}>
              대표이미지
              <VisualCreateStar>&nbsp; *</VisualCreateStar>
            </VisualCreateInputLabel>
            <VisualCreateInputContents>
              <VisualCreateThumbnailImg
                src={input.thumbnail ? input.thumbnail : BlankImg}
              />
              <VisualCreateThumbnailWrapper>
                <VisualCreateThumbnailTitle>
                  {input.thumbnailName ? input.thumbnailName : ""}
                </VisualCreateThumbnailTitle>
                <VisualCreateInputThumbnailLabel htmlFor="thumbnail">
                  찾아보기
                </VisualCreateInputThumbnailLabel>
                <VisualCreateInputThumbnail
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  onChange={registerImage}
                />
                <VisualCreateThumbnailText>
                  이미지 사이즈 : 300*290 (pixel)
                </VisualCreateThumbnailText>
              </VisualCreateThumbnailWrapper>
            </VisualCreateInputContents>
          </VisualCreateInputWrapper>
          <VisualCreateInputWrapper>
            <VisualCreateInputLabel style={{ height: "110px" }}>
              개시물 간단설명
              <VisualCreateStar>&nbsp; *</VisualCreateStar>
            </VisualCreateInputLabel>
            <VisualCreateInputContents>
              <VisualCreateDescriptionWrapper>
                <VisualCreateInputDescription
                  onChange={handleInput}
                  name="description"
                  defaultValue={data?.description || ""}
                />
                <VisualCreateDescriptionText>
                  200자 이내로 작성해주세요
                </VisualCreateDescriptionText>
              </VisualCreateDescriptionWrapper>
            </VisualCreateInputContents>
          </VisualCreateInputWrapper>
          <VisualCreateInputWrapper>
            <VisualCreateInputLabel style={{ height: "310px" }}>
              데이터 설명
            </VisualCreateInputLabel>
            <VisualCreateInputContents>
              <WebEditor
                bucket_name={"hiddenbox-photo"}
                contents={input.contents}
                editorRef={editorRef}
              />
            </VisualCreateInputContents>
          </VisualCreateInputWrapper>
        </VisualCreateInputBody>
        <VisualCreateBtnWrapper>
          <VisualCreateCancleBtn
            onClick={() => {
              navigate("/admin/visuals");
            }}
          >
            취소
          </VisualCreateCancleBtn>
          {path === "edit" ? (
            <VisualCreateBtn onClick={handleEditVisual}>
              데이터 수정
            </VisualCreateBtn>
          ) : (
            <VisualCreateBtn onClick={handleCreateVisual}>
              데이터 등록
            </VisualCreateBtn>
          )}
        </VisualCreateBtnWrapper>
      </VisualCreateBody>
    </VisualCreateWrapper>
  );
};

export default VisualCreatePresenter;

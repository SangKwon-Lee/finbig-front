import AdminLayoutContainer from "../../common/layout/admin/AdminLayout.container";
import WebEditor from "../../common/webEditor/WebEditor";
import {
  ModalCancel,
  ModalTableBtn,
  ModalTableContents,
  ModalTableContentsWrapper,
  ModalTableHeader,
  ModalTableHeaderWrapper,
  ModalTitle,
  ModalTitleWrapper,
  RelationBtn,
  RelationTableContents,
  RelationTableContentsBtn,
  RelationTableContentsWrapper,
  RelationTableHeader,
  RelationTableHeaderWrapper,
  RelationTitle,
  RelationTitleWrapper,
  RelationWrapper,
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
import { Box, Modal } from "@mui/material";
import XWhite from "../../../assets/images/XWhite.svg";
import dayjs from "dayjs";
import {
  FinbigsQuery,
  VisualDatumQuery,
} from "../../../commons/graphql/generated";

interface VisualCreateProps {
  input: {
    category: string;
    title: string;
    contents: string;
    thumbnail: string;
    description: string;
    thumbnailName: string;
    finbigs: any[];
  };
  open: boolean;
  path: string;
  editorRef: React.MutableRefObject<any>;
  visualData: VisualDatumQuery | undefined;
  finbigsData: FinbigsQuery | undefined;
  finbigsLoading: boolean;
  handleInput: (e: any) => void;
  handleOpen: () => void;
  handleClose: () => void;
  registerImage: (file: any) => Promise<void>;
  handleCreateVisual: () => Promise<void>;
  handleEditVisual: () => Promise<void>;
  handleRelationInput: (e: any) => void;
}

const VisualCreatePresenter: React.FC<VisualCreateProps> = ({
  input,
  editorRef,
  handleInput,
  registerImage,
  handleCreateVisual,
  visualData,
  path,
  handleEditVisual,
  handleClose,
  handleOpen,
  open,
  finbigsData,
  handleRelationInput,
  finbigsLoading,
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
                defaultValue={
                  visualData?.visualDatum?.category || "투자기초 데이터"
                }
              >
                <option value="투자기초 데이터">투자기초 데이터</option>
                <option value="알고리즘 데이터">알고리즘 데이터</option>
                <option value="콜라보">콜라보</option>
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
                defaultValue={visualData?.visualDatum?.title || ""}
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
                  defaultValue={visualData?.visualDatum?.description || ""}
                />
                <VisualCreateDescriptionText>
                  200자 이내로 작성해주세요
                </VisualCreateDescriptionText>
              </VisualCreateDescriptionWrapper>
            </VisualCreateInputContents>
          </VisualCreateInputWrapper>
          <VisualCreateInputWrapper>
            <VisualCreateInputLabel>데이터 설명</VisualCreateInputLabel>
            <VisualCreateInputContents>
              <WebEditor
                bucket_name={"hiddenbox-photo"}
                contents={input.contents}
                editorRef={editorRef}
              />
            </VisualCreateInputContents>
          </VisualCreateInputWrapper>
        </VisualCreateInputBody>
        <RelationWrapper>
          <RelationTitleWrapper>
            <RelationTitle>적용 데이터</RelationTitle>
            <RelationBtn onClick={handleOpen}>적용 데이터 등록</RelationBtn>
          </RelationTitleWrapper>
          <RelationTableHeaderWrapper>
            <RelationTableHeader>순서</RelationTableHeader>
            <RelationTableHeader style={{ flex: 2.5 }}>
              데이터 상품 명
            </RelationTableHeader>
            <RelationTableHeader>등록일 / 수정일</RelationTableHeader>
            <RelationTableHeader>노출여부</RelationTableHeader>
            <RelationTableHeader style={{ borderRight: "none" }}>
              삭제
            </RelationTableHeader>
          </RelationTableHeaderWrapper>
          {!finbigsLoading &&
            finbigsData!
              .finbigs!?.filter((data) => input.finbigs.includes(data?.id))
              ?.map((data) => (
                <RelationTableContentsWrapper key={data?.id}>
                  <RelationTableContents>{data?.id}</RelationTableContents>
                  <RelationTableContents style={{ flex: 2.5 }}>
                    {data?.title}
                  </RelationTableContents>
                  <RelationTableContents>
                    {dayjs(data?.created_at).format("YYYY.MM.DD")}
                    <br />
                    {dayjs(data?.updated_at).format("YYYY.MM.DD")}
                  </RelationTableContents>
                  <RelationTableContents>
                    {data?.isShow ? "노출" : "미노출"}
                  </RelationTableContents>
                  <RelationTableContents>
                    <RelationTableContentsBtn
                      id={data?.id}
                      onClick={handleRelationInput}
                    >
                      삭제
                    </RelationTableContentsBtn>
                  </RelationTableContents>
                </RelationTableContentsWrapper>
              ))}
        </RelationWrapper>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 953,
            bgcolor: "background.paper",
            boxShadow: 24,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            paddingBottom: 3,
            height: "80%",
            overflow: "scroll",
          }}
        >
          <ModalTitleWrapper>
            <ModalTitle>적용 데이터 선택</ModalTitle>
            <ModalCancel onClick={handleClose} src={XWhite} />
          </ModalTitleWrapper>
          <ModalTableHeaderWrapper>
            <ModalTableHeader style={{ flex: 0.7 }}>순번</ModalTableHeader>
            <ModalTableHeader style={{ flex: 5 }}>
              데이터 상품 명
            </ModalTableHeader>
            <ModalTableHeader>카테고리</ModalTableHeader>
            <ModalTableHeader style={{ borderRight: "none" }}>
              선택
            </ModalTableHeader>
          </ModalTableHeaderWrapper>
          {!finbigsLoading &&
            finbigsData!.finbigs!.map((data) => (
              <ModalTableContentsWrapper key={data?.id}>
                <ModalTableContents style={{ flex: 0.7 }}>
                  {data?.id}
                </ModalTableContents>
                <ModalTableContents style={{ flex: 5 }}>
                  {data?.title}
                </ModalTableContents>
                <ModalTableContents>{data?.category}</ModalTableContents>
                <ModalTableContents style={{ borderRight: "none" }}>
                  {input.finbigs.includes(data?.id) ? (
                    <ModalTableBtn id={data?.id} onClick={handleRelationInput}>
                      해제
                    </ModalTableBtn>
                  ) : (
                    <ModalTableBtn id={data?.id} onClick={handleRelationInput}>
                      선택
                    </ModalTableBtn>
                  )}
                </ModalTableContents>
              </ModalTableContentsWrapper>
            ))}
        </Box>
      </Modal>
    </VisualCreateWrapper>
  );
};

export default VisualCreatePresenter;

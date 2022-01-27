import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { Maybe, VisualData } from "../../../commons/types/generated/types";
import AdminLayoutContainer from "../../common/layout/admin/AdminLayout.container";
import {
  AdminVisualListWrapper,
  AdminVisualListBody,
  AdminVisualListTitle,
  AdminVisualListTableWrapper,
  AdminVisualListTableHeaderWrapper,
  AdminVisualListTableHeaderTitle,
  AdminVisualListPreview,
  AdminVisualCheckBox,
  AdminVisualBtnWrapper,
  AdminVisualDeleteBtn,
  AdminVisualCreateBtn,
  AdminVisualSearchWrapper,
  AdminVisualInputSearch,
  AdminVisaulSearchIcon,
  AdminVisualPaginationWrapper,
  AdminVisualModalBtn,
} from "./VisualList.style";
import SearchIcon from "../../../assets/images/search.svg";
import PaginationContainer from "../../common/pagination/Pagination.container";
import { Box, Modal } from "@mui/material";

interface VisualListProps {
  visualList: Maybe<Maybe<VisualData>[]> | undefined;
  listInput: {
    start: number;
    limit: number;
  };
  setListInput: React.Dispatch<
    React.SetStateAction<{
      start: number;
      limit: number;
    }>
  >;
  listLength: any;
  handleSearch: (e: any) => void;
  handelCheck: (e: any) => void;
  handleDeleteVisual: () => Promise<void>;
  open: boolean;
  handleOpen: (e: any) => void;
  handleClose: () => void;
  handleChangeShow: (e: any) => Promise<void>;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "space-between",
};

const VisualListPresenter: React.FC<VisualListProps> = ({
  visualList,
  listInput,
  setListInput,
  listLength,
  handleSearch,
  handelCheck,
  handleDeleteVisual,
  handleClose,
  handleOpen,
  open,
  handleChangeShow,
}) => {
  const navigate = useNavigate();
  return (
    <AdminVisualListWrapper>
      <AdminLayoutContainer menu="게시물"></AdminLayoutContainer>
      <AdminVisualListBody>
        <AdminVisualListTitle>게시물 관리</AdminVisualListTitle>
        <AdminVisualListTableWrapper>
          <AdminVisualListTableHeaderWrapper>
            <AdminVisualListTableHeaderTitle>
              선택
            </AdminVisualListTableHeaderTitle>
            <AdminVisualListTableHeaderTitle>
              순번
            </AdminVisualListTableHeaderTitle>
            <AdminVisualListTableHeaderTitle style={{ flex: 5 }}>
              제목
            </AdminVisualListTableHeaderTitle>
            <AdminVisualListTableHeaderTitle style={{ flex: 1 }}>
              카테고리
            </AdminVisualListTableHeaderTitle>
            <AdminVisualListTableHeaderTitle style={{ flex: 1 }}>
              조회수
            </AdminVisualListTableHeaderTitle>
            <AdminVisualListTableHeaderTitle style={{ flex: 1.2 }}>
              등록일
            </AdminVisualListTableHeaderTitle>
            <AdminVisualListTableHeaderTitle style={{ flex: 1 }}>
              노출여부
            </AdminVisualListTableHeaderTitle>
          </AdminVisualListTableHeaderWrapper>
          {visualList?.map((data) => (
            <AdminVisualListTableHeaderWrapper
              style={{ backgroundColor: "white" }}
              key={data?.id}
            >
              <AdminVisualListTableHeaderTitle>
                <AdminVisualCheckBox
                  value={data?.id}
                  type="checkbox"
                  onChange={handelCheck}
                />
              </AdminVisualListTableHeaderTitle>
              <AdminVisualListTableHeaderTitle>
                {data?.id}
              </AdminVisualListTableHeaderTitle>
              <AdminVisualListTableHeaderTitle
                style={{
                  flex: 5,
                }}
                onClick={() => {
                  navigate(`/admin/visual/${data?.id}/edit`);
                }}
              >
                {data?.title}
              </AdminVisualListTableHeaderTitle>
              <AdminVisualListTableHeaderTitle style={{ flex: 1 }}>
                {data?.category}
              </AdminVisualListTableHeaderTitle>
              <AdminVisualListTableHeaderTitle style={{ flex: 1 }}>
                {data?.viewCount}
              </AdminVisualListTableHeaderTitle>
              <AdminVisualListTableHeaderTitle style={{ flex: 1.2 }}>
                {dayjs(data?.created_at).format("YYYY.MM.DD")}
              </AdminVisualListTableHeaderTitle>
              <AdminVisualListTableHeaderTitle
                style={{
                  flex: 1,
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                id={data?.id}
                onClick={handleOpen}
              >
                {data?.isShow ? "노출" : "미노출"}
                <AdminVisualListPreview
                  onClick={() => {
                    navigate(`/admin/visual/${data?.id}`);
                  }}
                >
                  [미리보기]
                </AdminVisualListPreview>
              </AdminVisualListTableHeaderTitle>
            </AdminVisualListTableHeaderWrapper>
          ))}
        </AdminVisualListTableWrapper>
        <AdminVisualPaginationWrapper>
          <PaginationContainer
            listLength={listLength}
            listInput={listInput}
            setListInput={setListInput}
          />
        </AdminVisualPaginationWrapper>
        <AdminVisualSearchWrapper>
          <AdminVisualInputSearch onChange={handleSearch} />
          <AdminVisaulSearchIcon src={SearchIcon} />
        </AdminVisualSearchWrapper>
        <AdminVisualBtnWrapper>
          <AdminVisualDeleteBtn onClick={handleDeleteVisual}>
            삭제
          </AdminVisualDeleteBtn>
          <AdminVisualCreateBtn
            onClick={() => {
              navigate("/admin/visual/create");
            }}
          >
            게시글 등록
          </AdminVisualCreateBtn>
        </AdminVisualBtnWrapper>
      </AdminVisualListBody>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AdminVisualDeleteBtn value="false" onClick={handleChangeShow}>
            미노출
          </AdminVisualDeleteBtn>
          <AdminVisualModalBtn value="true" onClick={handleChangeShow}>
            노출
          </AdminVisualModalBtn>
        </Box>
      </Modal>
    </AdminVisualListWrapper>
  );
};

export default VisualListPresenter;

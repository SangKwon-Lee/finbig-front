import {
  DataBestBtn,
  DataBtnWrapper,
  DataContents,
  DataImg,
  DataListBody,
  DataListCategoryTitle,
  DataListCategoryWrapper,
  DataListImgBlank,
  DataListNoDataText,
  DataListResult,
  DataListResultNum,
  DataListSelectBox,
  DataListSelectWrapper,
  DataListTitle,
  DataListWrapper,
  DataTitle,
  DataUpdateBtn,
  DataWrapper,
} from "./DataList.style";
import { useNavigate, useParams } from "react-router";
import PaginationContainer from "../common/pagination/Pagination.container";
import { VisualListPaginationWrapper } from "../visualList/VisualList.style";
import { FinbigsQuery } from "../../commons/graphql/generated";

interface DataListProps {
  finbigs: FinbigsQuery | undefined;
  loading: boolean;
  blackLength: number;
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
  handleSort: (e: any) => void;
  handleViewCount: (dataId: string, viewCount: number) => Promise<void>;
  handleRecentData: (dataId: any) => Promise<void>;
}

const DataListPresenter: React.FC<DataListProps> = ({
  loading,
  finbigs,
  listInput,
  blackLength,
  setListInput,
  handleSort,
  handleRecentData,
  handleViewCount,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const { search } = useParams() || "";
  return (
    <DataListWrapper>
      <DataListTitle>{search ? "검색 결과" : "데이터 상품"}</DataListTitle>
      <DataListCategoryWrapper>
        <DataListCategoryTitle>
          {!loading &&
            `전체 (${
              finbigs?.finbigs?.filter((data) =>
                data?.title?.includes(search || "")
              ).length
            })`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>
          {!loading &&
            `투자기초 데이터 (${
              finbigs?.finbigs
                ?.filter((data) => data?.title?.includes(search || ""))
                .filter((data) => data?.category === "투자기초 데이터").length
            })`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>
          {!loading &&
            `알고리즘 데이터 (${
              finbigs?.finbigs
                ?.filter((data) => data?.title?.includes(search || ""))
                .filter((data) => data?.category === "알고리즘 데이터").length
            })`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>
          {!loading &&
            `콜라보 (${
              finbigs?.finbigs
                ?.filter((data) => data?.title?.includes(search || ""))
                .filter((data) => data?.category === "콜라보").length
            })`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>
          {!loading &&
            `금융투자 기초데이터 (${
              finbigs?.finbigs
                ?.filter((data) => data?.title?.includes(search || ""))
                .filter((data) => data?.category === "금융투자 기초데이터")
                .length
            })`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>
          {!loading &&
            `리츠 (${
              finbigs?.finbigs
                ?.filter((data) => data?.title?.includes(search || ""))
                .filter((data) => data?.category === "리츠 데이터").length
            })`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>
          {!loading &&
            `시세 데이터 (${
              finbigs?.finbigs
                ?.filter((data) => data?.title?.includes(search || ""))
                .filter(
                  (data) =>
                    data?.category === "연간 시세 데이터" ||
                    data?.category === "월간 시세 데이터" ||
                    data?.category === "일간 시세 데이터"
                ).length
            })`}
        </DataListCategoryTitle>
      </DataListCategoryWrapper>
      <DataListSelectWrapper>
        <DataListResult>
          상품이 모두
          <DataListResultNum>
            {!loading &&
              finbigs?.finbigs?.filter((data) =>
                data?.title?.includes(search || "")
              ).length}
            개
          </DataListResultNum>
          &nbsp;있습니다
        </DataListResult>
        <DataListSelectBox defaultValue="id:asc" onChange={handleSort}>
          <option value="id:asc">최신순</option>
          <option value="order:desc">인기순</option>
          <option value="viewCount:desc">조회순</option>
        </DataListSelectBox>
      </DataListSelectWrapper>
      <DataListBody>
        {!loading &&
        finbigs?.finbigs?.filter((data: any) =>
          data?.title?.includes(search || "")
        ).length !== 0 ? (
          finbigs?.finbigs
            ?.filter((data: any) => data?.title?.includes(search || ""))
            .splice(listInput.start, listInput.limit)
            ?.map((data) => (
              <DataWrapper key={data?.id}>
                <DataImg
                  src={String(data?.thumbnail)}
                  onClick={() => {
                    handleViewCount(String(data?.id), data?.viewCount);
                    handleRecentData(String(data?.id));
                    navigate(`/data/${data?.id}`);
                  }}
                />
                <DataTitle
                  onClick={() => {
                    handleViewCount(String(data?.id), data?.viewCount);
                    handleRecentData(String(data?.id));
                    navigate(`/data/${data?.id}`);
                  }}
                >
                  {data?.title}
                </DataTitle>
                <DataContents
                  onClick={() => {
                    handleViewCount(String(data?.id), data?.viewCount);
                    handleRecentData(String(data?.id));
                    navigate(`/data/${data?.id}`);
                  }}
                >
                  {data?.description}
                </DataContents>
                <DataBtnWrapper>
                  {data?.isBest && <DataBestBtn>Best</DataBestBtn>}
                  <DataUpdateBtn>Update</DataUpdateBtn>
                </DataBtnWrapper>
              </DataWrapper>
            ))
        ) : (
          <DataListNoDataText>해당하는 상품이 없습니다</DataListNoDataText>
        )}
        {new Array(3 - blackLength).fill(1).map((__, index) => (
          <DataListImgBlank
            key={index}
            style={{ border: "none" }}
          ></DataListImgBlank>
        ))}
      </DataListBody>
      <VisualListPaginationWrapper>
        <PaginationContainer
          listLength={
            finbigs?.finbigs?.filter((data: any) =>
              data?.title?.includes(search || "")
            ).length
          }
          listInput={listInput}
          setListInput={setListInput}
          search={search || ""}
        />
      </VisualListPaginationWrapper>
    </DataListWrapper>
  );
};

export default DataListPresenter;

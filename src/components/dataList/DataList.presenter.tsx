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
      <DataListTitle>{"데이터 상품"}</DataListTitle>
      <DataListCategoryWrapper>
        <DataListCategoryTitle
          onClick={() => navigate(`/dataList`)}
          style={{
            fontWeight: !search ? 700 : 400,
            color: !search ? "#111111" : "#999999",
          }}
        >
          {!loading && `전체 (${finbigs?.finbigs?.length}종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "경제" ? 700 : 400,
            color: search === "경제" ? "#111111" : "#999999",
          }}
          onClick={() => navigate(`/dataList/경제`)}
        >
          {!loading &&
            `경제 (${
              finbigs?.finbigs?.filter(
                (data) => data?.category === "경제 데이터"
              ).length
            }종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "재무 밸류" ? 700 : 400,
            color: search === "재무 밸류" ? "#111111" : "#999999",
          }}
          onClick={() => navigate(`/dataList/재무 밸류`)}
        >
          {!loading &&
            `재무 밸류 배당 차트 (${
              finbigs?.finbigs?.filter(
                (data) => data?.category === "재무 밸류 배당 차트 데이터"
              ).length
            }종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "공매도 분석" ? 700 : 400,
            color: search === "공매도 분석" ? "#111111" : "#999999",
          }}
          onClick={() => navigate(`/dataList/공매도 분석`)}
        >
          {!loading &&
            `공매도 분석 (${
              finbigs?.finbigs?.filter(
                (data) => data?.category === "공매도 분석 데이터"
              ).length
            }종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "공시 뉴스" ? 700 : 400,
            color: search === "공시 뉴스" ? "#111111" : "#999999",
          }}
          onClick={() => navigate(`/dataList/공시 뉴스`)}
        >
          {!loading &&
            `공시 뉴스 분석 (${
              finbigs?.finbigs?.filter(
                (data) => data?.category === "공시 뉴스 분석 데이터"
              ).length
            }종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "주식 스코어 데이터" ? 700 : 400,
            color: search === "주식 스코어 데이터" ? "#111111" : "#999999",
          }}
          onClick={() => navigate(`/dataList/주식 스코어 데이터`)}
        >
          {!loading &&
            `주식 스코어 (${
              finbigs?.finbigs?.filter(
                (data) => data?.category === "주식 스코어 데이터"
              ).length
            }종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "포트폴리오" ? 700 : 400,
            color: search === "포트폴리오" ? "#111111" : "#999999",
          }}
          onClick={() => navigate(`/dataList/포트폴리오`)}
        >
          {!loading &&
            `주식 포트폴리오 (${
              finbigs?.finbigs?.filter(
                (data) =>
                  data?.category === "주식 포트폴리오 데이터" ||
                  data?.category === "주식 포트폴리오 데이터" ||
                  data?.category === "주식 포트폴리오 데이터"
              ).length
            }종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "리츠" ? 700 : 400,
            color: search === "리츠" ? "#111111" : "#999999",
          }}
          onClick={() => navigate(`/dataList/리츠`)}
        >
          {!loading &&
            `리츠 (${
              finbigs?.finbigs?.filter(
                (data) => data?.category === "리츠 데이터"
              ).length
            }종)`}
        </DataListCategoryTitle>
      </DataListCategoryWrapper>
      <DataListSelectWrapper>
        <DataListResult>
          상품이 모두 &nbsp;
          <DataListResultNum>
            {!loading &&
              finbigs?.finbigs?.filter(
                (data) =>
                  data?.title?.includes(search || "") ||
                  data?.category?.includes(search || "")
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
        finbigs?.finbigs?.filter(
          (data: any) =>
            data?.title?.includes(search || "") ||
            data?.category?.includes(search || "")
        ).length !== 0 ? (
          finbigs?.finbigs
            ?.filter(
              (data: any) =>
                data?.title?.includes(search || "") ||
                data?.category?.includes(search || "")
            )
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
                  {data?.isUpdate && <DataUpdateBtn>New</DataUpdateBtn>}
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
            finbigs?.finbigs?.filter(
              (data: any) =>
                data?.title?.includes(search || "") ||
                data?.category?.includes(search || "")
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

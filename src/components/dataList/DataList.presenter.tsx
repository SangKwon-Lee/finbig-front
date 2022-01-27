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
import { Finbig, Maybe } from "../../commons/types/generated/types";
import { VisualListPaginationWrapper } from "../visualList/VisualList.style";

interface DataListProps {
  finbigs?: Maybe<Maybe<Finbig>[]> | undefined;
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
  handleViewCount: (dataId: string, viewCount: number) => Promise<void>;
  handleRecentData: (dataId: any) => Promise<void>;
}

const DataListPresenter: React.FC<DataListProps> = ({
  finbigs,
  blackLength,
  listInput,
  setListInput,
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
        <DataListCategoryTitle>전체 (8)</DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>리츠 (1)</DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>주식 투자 (2)</DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>알고리즘 (2)</DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle>펀드 (3)</DataListCategoryTitle>
      </DataListCategoryWrapper>
      <DataListSelectWrapper>
        <DataListResult>
          상품이 모두
          <DataListResultNum>
            {
              finbigs?.filter((data) => data?.title?.includes(search || ""))
                .length
            }
            개
          </DataListResultNum>
          &nbsp;있습니다
        </DataListResult>
        <DataListSelectBox defaultValue="상품정렬">
          <option disabled value="상품정렬">
            상품 정렬
          </option>
          <option>상품 뭐지</option>
          <option>상품 리얼</option>
        </DataListSelectBox>
      </DataListSelectWrapper>
      <DataListBody>
        {finbigs?.filter((data: any) => data?.title?.includes(search || ""))
          .length !== 0 ? (
          finbigs
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
            finbigs?.filter((data: any) => data?.title?.includes(search || ""))
              .length
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

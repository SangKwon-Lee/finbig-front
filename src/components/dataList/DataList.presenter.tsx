import {
  DataBestBtn,
  DataBtnWrapper,
  DataContents,
  DataImg,
  DataListBody,
  DataListCategoryTitle,
  DataListCategoryWrapper,
  DataListImgBlank,
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
  dataCount: any;
  dataTotalCount: any;
  handleViewCount: (dataId: string, viewCount: number) => Promise<void>;
}

const DataListPresenter: React.FC<DataListProps> = ({
  finbigs,
  blackLength,
  listInput,
  setListInput,
  dataCount,
  dataTotalCount,
  handleViewCount,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const { search } = useParams();
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
          상품이 모두<DataListResultNum> {dataTotalCount}개</DataListResultNum>
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
        {finbigs?.map((data) => (
          <DataWrapper key={data?.id}>
            <DataImg
              src={String(data?.thumbnail)}
              onClick={() => {
                handleViewCount(String(data?.id), data?.viewCount);
                navigate(`/data/${data?.id}`);
              }}
            />
            <DataTitle
              onClick={() => {
                handleViewCount(String(data?.id), data?.viewCount);
                navigate(`/data/${data?.id}`);
              }}
            >
              {data?.title}
            </DataTitle>
            <DataContents
              onClick={() => {
                handleViewCount(String(data?.id), data?.viewCount);
                navigate(`/data/${data?.id}`);
              }}
            >
              {data?.description}
            </DataContents>
            <DataBtnWrapper>
              <DataBestBtn>Best</DataBestBtn>
              <DataUpdateBtn>Update</DataUpdateBtn>
            </DataBtnWrapper>
          </DataWrapper>
        ))}
        {new Array(6 - blackLength).fill(1).map((__, index) => (
          <DataListImgBlank
            key={index}
            style={{ border: "none" }}
          ></DataListImgBlank>
        ))}
      </DataListBody>
      <VisualListPaginationWrapper>
        <PaginationContainer
          listLength={dataCount}
          listInput={listInput}
          setListInput={setListInput}
        />
      </VisualListPaginationWrapper>
    </DataListWrapper>
  );
};

export default DataListPresenter;

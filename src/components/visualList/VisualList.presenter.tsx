import {
  VisualListBody,
  VisualListContentsWrapper,
  VisualListCreateAt,
  VisualListImg,
  VisualListImgBlank,
  VisualListMainTitle,
  VisualListPaginationWrapper,
  VisualListTitle,
  VisualListType,
  VisualListWrapper,
} from "./VisualList.style";
import dayjs from "dayjs";
import PaginationContainer from "../common/pagination/Pagination.container";
import BlankImg from "../../assets/images/blankImg.png";
import { useNavigate } from "react-router";
import { VisualDataQuery } from "../../commons/graphql/generated";
import {
  DataListCategoryWrapper,
  DataListCategoryTitle,
} from "../dataList/DataList.style";
interface VisualListProps {
  listLength: any;
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
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  blackLength: number;
  visualList: VisualDataQuery | undefined;
  visualListLoading: boolean;
  handleUpdateVisual: (dataId: string, viewCount: number) => Promise<void>;
}

const VisualListPresenter: React.FC<VisualListProps> = ({
  search,
  setSearch,
  listInput,
  visualList,
  listLength,
  blackLength,
  setListInput,
  visualListLoading,
  handleUpdateVisual,
}) => {
  const navigate = useNavigate();
  return (
    <VisualListWrapper>
      <VisualListMainTitle>데이터 시각화 / 활용</VisualListMainTitle>
      <DataListCategoryWrapper>
        <DataListCategoryTitle
          style={{ color: "##999999" }}
          onClick={() => {
            setSearch("");
            navigate(`/visualList`);
          }}
        >
          {!visualListLoading && `전체 (${listLength}종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "활용 사례" ? 700 : 400,
            color: search === "활용 사례" ? "#111111" : "#999999",
          }}
          onClick={() => setSearch("활용 사례")}
        >
          {!visualListLoading &&
            `활용 사례 (${
              visualList?.visualData?.filter(
                (data) => data?.category === "활용 사례"
              ).length
            }종)`}
        </DataListCategoryTitle>
        <DataListCategoryTitle>/</DataListCategoryTitle>
        <DataListCategoryTitle
          style={{
            fontWeight: search === "시각화" ? 700 : 400,
            color: search === "시각화" ? "#111111" : "#999999",
          }}
          onClick={() => setSearch("시각화")}
        >
          {!visualListLoading &&
            `시각화 (${
              visualList?.visualData?.filter(
                (data) => data?.category === "시각화"
              ).length
            }종)`}
        </DataListCategoryTitle>
      </DataListCategoryWrapper>
      <VisualListBody>
        {!visualListLoading &&
          Number(visualList?.visualData?.length) !== 0 &&
          visualList?.visualData
            ?.filter((data: any) => data?.category?.includes(search || ""))
            ?.filter((data) => data?.isShow === true)
            .splice(listInput.start, listInput.limit)
            .map((data) => (
              <VisualListContentsWrapper key={data?.id}>
                <VisualListImg
                  src={data?.thumbnail ? data.thumbnail : BlankImg}
                  onClick={() => {
                    handleUpdateVisual(String(data?.id), data?.viewCount);
                    navigate(`/visual/${data?.id}`);
                  }}
                />
                <VisualListType>[{data?.category}]</VisualListType>
                <VisualListTitle
                  onClick={() => {
                    handleUpdateVisual(String(data?.id), data?.viewCount);
                    navigate(`/visual/${data?.id}`);
                  }}
                >
                  {data?.title}
                </VisualListTitle>
                <VisualListCreateAt>
                  {dayjs(data?.created_at).format("YYYY-MM-DD")}
                </VisualListCreateAt>
              </VisualListContentsWrapper>
            ))}
        {new Array(3 - blackLength).fill(1).map((__, index) => (
          <VisualListImgBlank
            key={index}
            style={{ border: "none" }}
          ></VisualListImgBlank>
        ))}
      </VisualListBody>
      <VisualListPaginationWrapper>
        <PaginationContainer
          listLength={listLength}
          listInput={listInput}
          setListInput={setListInput}
        />
      </VisualListPaginationWrapper>
    </VisualListWrapper>
  );
};

export default VisualListPresenter;

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
  visualList: VisualDataQuery | undefined;
  visualListLoading: boolean;
  handleUpdateVisual: (dataId: string, viewCount: number) => Promise<void>;
}

const VisualListPresenter: React.FC<VisualListProps> = ({
  listInput,
  setListInput,
  visualList,
  listLength,
  visualListLoading,
  handleUpdateVisual,
}) => {
  let length = 0;
  if (!visualListLoading) {
    if (
      visualList?.visualData?.length === 3 ||
      visualList?.visualData?.length === 6
    ) {
      length = 6;
    } else if (Number(visualList?.visualData?.length) < 3) {
      length = Number(visualList?.visualData?.length) + 3;
    } else {
      length = Number(visualList?.visualData?.length);
    }
  }

  const navigate = useNavigate();
  return (
    <VisualListWrapper>
      <VisualListMainTitle>데이터 시각화 / 활용</VisualListMainTitle>
      <VisualListBody>
        {!visualListLoading &&
          visualList?.visualData
            ?.filter((data) => data?.isShow === true)
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
        {new Array(6 - length).fill(1).map((__, index) => (
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

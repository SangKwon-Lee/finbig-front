import {
  VisualListBody,
  VisualListContentsWrapper,
  VisualListCreateAt,
  VisualListImg,
  VisualListMainTitle,
  VisualListTitle,
  VisualListType,
  VisualListWrapper,
} from "./VisualList.style";
import { VisualList } from "../common/dummy";
import PaginationContainer from "../common/pagination/Pagination.container";

const VisualListPresenter = () => {
  return (
    <VisualListWrapper>
      <VisualListMainTitle>데이터 시각화 / 활용</VisualListMainTitle>
      <VisualListBody>
        {VisualList.map((data) => (
          <VisualListContentsWrapper>
            <VisualListImg />
            <VisualListType>[{data.type}]</VisualListType>
            <VisualListTitle>{data.title}</VisualListTitle>
            <VisualListCreateAt>{data.createAt}</VisualListCreateAt>
          </VisualListContentsWrapper>
        ))}
      </VisualListBody>
      <PaginationContainer />
    </VisualListWrapper>
  );
};

export default VisualListPresenter;

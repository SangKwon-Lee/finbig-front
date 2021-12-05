import { DummyDataList } from "../common/dummy";
import {
  DataBestBtn,
  DataBtnWrapper,
  DataContents,
  DataImg,
  DataListArrowLeft,
  DataListArrowRight,
  DataListBody,
  DataListCategoryTitle,
  DataListCategoryWrapper,
  DataListPage,
  DataListPageWrapper,
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
import ArrowSVG from "../../assets/images/arrowDown.svg";

const DataListPresenter = () => {
  return (
    <DataListWrapper>
      <DataListTitle>데이터 상품</DataListTitle>
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
          상품이 모두<DataListResultNum> 8개</DataListResultNum> 있습니다
        </DataListResult>
        <DataListSelectBox>
          <option selected disabled>
            상품 정렬
          </option>
          <option>상품 뭐지</option>
          <option>상품 리얼</option>
        </DataListSelectBox>
      </DataListSelectWrapper>
      <DataListBody>
        {DummyDataList.map((data) => (
          <DataWrapper>
            <DataImg />
            <DataTitle>{data.title}</DataTitle>
            <DataContents>{data.description}</DataContents>
            <DataBtnWrapper>
              <DataBestBtn>Best</DataBestBtn>
              <DataUpdateBtn>Update</DataUpdateBtn>
            </DataBtnWrapper>
          </DataWrapper>
        ))}
      </DataListBody>
      <DataListPageWrapper>
        <DataListPage>
          <DataListArrowLeft src={ArrowSVG} style={{ marginRight: "-8px" }} />
          <DataListArrowLeft src={ArrowSVG} />
        </DataListPage>
        <DataListPage>
          <DataListArrowLeft src={ArrowSVG} />
        </DataListPage>
        <DataListPage>1</DataListPage>
        <DataListPage>2</DataListPage>
        <DataListPage>
          <DataListArrowRight src={ArrowSVG} />
          <DataListArrowRight src={ArrowSVG} style={{ marginLeft: "-8px" }} />
        </DataListPage>
        <DataListPage>
          <DataListArrowRight src={ArrowSVG} />
        </DataListPage>
      </DataListPageWrapper>
    </DataListWrapper>
  );
};

export default DataListPresenter;

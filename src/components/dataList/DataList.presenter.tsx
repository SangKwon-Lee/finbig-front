import { DummyDataList } from "../common/dummy";
import {
  DataBestBtn,
  DataBtnWrapper,
  DataContents,
  DataImg,
  DataListBody,
  DataListCategoryTitle,
  DataListCategoryWrapper,
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
    </DataListWrapper>
  );
};

export default DataListPresenter;

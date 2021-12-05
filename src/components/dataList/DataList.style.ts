import styled from "@emotion/styled";

export const DataListWrapper = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 110px;
`;

export const DataListTitle = styled.div`
  font-size: 20px;
`;

export const DataListCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 465px;
  margin-top: 27px;
  margin-bottom: 78px;
`;

export const DataListCategoryTitle = styled.div`
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;

export const DataListSelectWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 44px;
`;

export const DataListResult = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const DataListResultNum = styled.span`
  font-size: 12px;
  font-family: SpoqaHanSansNeo-Bold;
`;

export const DataListSelectBox = styled.select`
  color: #999999;
  width: 103px;
  height: 34px;
  border: 1px solid #cccccc;
  padding-left: 8px;
  outline: none;
`;

export const DataListBody = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DataWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;
  cursor: pointer;
`;

export const DataImg = styled.img`
  width: 300px;
  height: 290px;
`;

export const DataTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const DataContents = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const DataBtnWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;
export const DataBestBtn = styled.button`
  width: 42px;
  height: 25px;
  border: 1px solid #999999;
  outline: none;
  font-size: 10px;
  margin-right: 4px;
  background-color: white;
`;

export const DataUpdateBtn = styled.button`
  outline: none;
  border: none;
  background-color: #4033a2;
  color: white;
  font-size: 10px;
  width: 58px;
  height: 25px;
`;

export const DataListPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const DataListPage = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SpoqaHanSansNeo-Medium;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
  outline: none;
  background-color: white;
  margin: 0px 4px 0px 4px;
`;

export const DataListArrowLeft = styled.img`
  transform: rotate(90deg);
  width: 14px;
  height: 14px;
`;

export const DataListArrowRight = styled.img`
  transform: rotate(-90deg);
  width: 14px;
  height: 14px;
`;

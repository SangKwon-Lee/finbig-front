import styled from "@emotion/styled";

export const MypageRecentWrapper = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  padding-top: 58px;
  display: flex;
  justify-content: center;
  padding-bottom: 110px;
`;

export const MypageBody = styled.div`
  display: flex;
  width: 1100px;
`;

export const MypageBodyColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 53px;
`;

export const MypageRecentListText = styled.div`
  font-size: 12px;
  color: #999999;
  margin-bottom: 12px;
`;

export const MypageRecentListNumber = styled.span`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 12px;
`;

export const MypageDataListWrapper = styled.div`
  width: 824px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MypageDataWrapper = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;
  cursor: pointer;
`;

export const MypageDataThumbnail = styled.img`
  width: 240px;
  height: 232px;
`;

export const MypageDataTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const MypageDataDescription = styled.div`
  font-size: 12px;
  color: #999999;
  text-align: start;
`;

export const MypageDataBtnWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const MypageDataBestBtn = styled.button`
  width: 42px;
  height: 25px;
  border: 1px solid #999999;
  outline: none;
  font-size: 10px;
  margin-right: 4px;
  background-color: white;
`;

export const MypageDataUpdateBtn = styled.button`
  outline: none;
  border: none;
  background-color: #4033a2;
  color: white;
  font-size: 10px;
  width: 58px;
  height: 25px;
`;

export const DataListImgBlank = styled.div`
  width: 240px;
  height: 232px;
  border: none;
  outline: none;
`;

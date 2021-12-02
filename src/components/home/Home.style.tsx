import styled from "@emotion/styled";

export const Banner = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  height: 340px;
  background-color: black;
`;
export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  flex-direction: column;
`;

export const CenterWrapper = styled.div`
  width: 1100px;
  margin-top: 92px;
  display: flex;
  justify-content: space-between;
`;

export const CenterLeft = styled.div`
  width: 542px;
  height: 362px;
  border: 1px solid black;
  padding-top: 55px;
  padding-left: 77px;
  background-color: whitesmoke;
`;

export const CenterLeftTitle = styled.div`
  font-family: GmarketSansMedium;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const CenterTitleBold = styled.span`
  font-family: GmarketSansBold;
  font-size: 20px;
`;

export const CenterLeftSubTitle = styled.div`
  font-family: GmarketSansLight;
  font-size: 14px;
  margin-bottom: 29px;
`;

export const CenterButton = styled.button`
  width: 109px;
  height: 37px;
  outline: none;
  cursor: pointer;
  background-color: white;
  border: none;
`;

export const CenterButtonTilte = styled.div`
  font-family: GmarketSansMedium;
  font-size: 12px;
`;

export const CenterMiddle = styled.div`
  width: 263px;
  height: 362px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55px;
`;

export const CenterMiddleTitle = styled.div`
  font-family: GmarketSansMedium;
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

export const CenterMiddleSubTitle = styled.div`
  font-family: GmarketSansLight;
  font-size: 14px;
  margin-bottom: 29px;
  text-align: center;
`;

export const CenterRight = styled.div`
  width: 263px;
  height: 362px;
  border: 1px solid black;
`;

export const UpdateTitle = styled.h1`
  margin-top: 106px;
  margin-bottom: 27px;
`;

export const UpdateWrapper = styled.div``;

export const PopularWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  height: 500px;
  background-color: #eee;
  padding-top: 75px;
  padding-bottom: 48px;
`;

export const PopularTitle = styled.h1`
  padding-bottom: 72px;
`;

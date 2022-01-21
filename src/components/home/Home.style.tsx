import styled from "@emotion/styled";

interface HomeStypeProps {
  isActive?: boolean;
  isCategory?: boolean;
}

export const Banner = styled.div`
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  height: 340px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BannerContentsWrapper = styled.div`
  position: absolute;
  width: 1100px;
  height: 340px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BannerTitle = styled.div`
  color: white;
  font-family: GmarketSansMedium;
  font-size: 28px;
`;

export const BannerBold = styled.span`
  color: white;
  font-family: GmarketSansBold;
  font-size: 28px;
`;

export const BannerLine = styled.div`
  border-top: 1px solid white;
  width: 180px;
  margin: 27px 0px;
`;

export const BannerContents = styled.div`
  color: white;
  font-family: GmarketSansLight;
  font-size: 14px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1920px;
  min-width: 1100px;
  width: 100%;
  flex-direction: column;
  /* justify-content: center; */
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
  display: flex;
`;

export const CenterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CenterLeftContentsWrapper = styled.div`
  position: absolute;
  padding-top: 55px;
  padding-left: 77px;
`;

export const CenterLeftTitle = styled.div`
  font-family: GmarketSansMedium;
  font-size: 20px;
  margin-bottom: 16px;
  color: white;
`;

export const CenterTitleBold = styled.span`
  font-family: GmarketSansBold;
  font-size: 20px;
  color: white;
`;

export const CenterLeftSubTitle = styled.div`
  font-family: GmarketSansLight;
  font-size: 14px;
  margin-bottom: 29px;
  color: white;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const CenterMiddleContentsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-top: 55px;
  align-items: center;
`;

export const CenterMiddleTitle = styled.div`
  font-family: GmarketSansMedium;
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
  color: white;
`;

export const CenterMiddleSubTitle = styled.div`
  font-family: GmarketSansLight;
  font-size: 14px;
  margin-bottom: 29px;
  text-align: center;
  color: white;
`;

export const CenterRight = styled.div`
  width: 263px;
  height: 362px;
  border: 1px solid black;
`;

export const CenterRightTitleWrapper = styled.div`
  background-color: #f6ecfa;
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 16px;
`;

export const CenterRightTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 14px;
  width: 64px;
  height: 26px;
  background-color: ${(props: HomeStypeProps) =>
    props.isCategory ? "#b000f9" : "transparent"};
  border-radius: 14px;
  color: ${(props: HomeStypeProps) => (props.isCategory ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CenterRightName = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 14px;
`;

export const CenterRightStockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 73px;
  padding: 0px 18px;
  border-top: 1px solid #cccccc;
`;

export const CenterRightStockTitleWrapper = styled.div`
  display: flex;
  padding-bottom: 4px;
  align-items: center;
`;
export const CenterRightStockTitle = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 12px;
`;
export const CenterRightStockDate = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const CenterRightStockNumWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CenterRightStockNumAndImg = styled.div`
  display: flex;
  align-items: center;
`;
export const CenterRightStockNum = styled.div`
  font-family: SpoqaHanSansNeo-Bold;
  font-size: 12px;
  color: ${(props: HomeStypeProps) => (props.isActive ? "#ff0000" : "#1c17ff")};
  width: 50px;
`;
export const CenterRightStockImg = styled.img`
  padding-right: 4px;
`;

export const UpdateTitle = styled.h1`
  margin-top: 106px;
  margin-bottom: 27px;
`;

export const UpdateWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PopularWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  width: 100%;
  /* height: 1000px; */
  max-width: 1920px;
  min-width: 1100px;
  padding-top: 75px;
  padding-bottom: 48px;
`;

export const PopularTitle = styled.h1`
  padding-bottom: 72px;
  align-self: center;
`;

export const BestDataImg = styled.img`
  width: 263px;
  height: 263px;
  margin: auto;
  cursor: pointer;
`;

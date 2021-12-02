import {
  Banner,
  ContainerWrapper,
  CenterLeft,
  CenterMiddle,
  CenterRight,
  CenterWrapper,
  CenterLeftTitle,
  CenterTitleBold,
  CenterLeftSubTitle,
  CenterButtonTilte,
  CenterButton,
  CenterMiddleTitle,
  CenterMiddleSubTitle,
  UpdateTitle,
  UpdateWrapper,
  PopularWrapper,
  PopularTitle,
} from "./Home.style";

const HomePresenter = () => {
  return (
    <>
      <ContainerWrapper>
        <Banner></Banner>
        <CenterWrapper>
          <CenterLeft>
            <CenterLeftTitle>
              합리적인 금액으로
              <br />
              <CenterTitleBold>최고의 데이터</CenterTitleBold>를 제공합니다
            </CenterLeftTitle>
            <CenterLeftSubTitle>
              이노핀은 흩어져 있는 금융 데이터를 AI와 빅데이터 기술로
              <br />
              수집, 정제, 처리 하는 핀테크 기업입니다.
            </CenterLeftSubTitle>
            <CenterButton>
              <CenterButtonTilte>View More</CenterButtonTilte>
            </CenterButton>
          </CenterLeft>
          <CenterMiddle>
            <CenterMiddleTitle>
              빅데이터 <br /> 시각화/활용 사례
            </CenterMiddleTitle>
            <CenterMiddleSubTitle>
              자본시장 금융 빅데이터를 활용한
              <br />
              시각화 및 활용 사례입니다.
            </CenterMiddleSubTitle>
            <CenterButton>
              <CenterButtonTilte>View More</CenterButtonTilte>
            </CenterButton>
          </CenterMiddle>
          <CenterRight></CenterRight>
        </CenterWrapper>
        <UpdateTitle>신규 업데이트된 데이터</UpdateTitle>
        <UpdateWrapper></UpdateWrapper>
        <PopularWrapper>
          <PopularTitle>인기 데이터</PopularTitle>
        </PopularWrapper>
      </ContainerWrapper>
    </>
  );
};

export default HomePresenter;

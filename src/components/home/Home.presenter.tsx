import {
  Banner,
  ContainerWrapper,
  CenterLeft,
  CenterMiddle,
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
  BannerImg,
  BannerContentsWrapper,
  BannerTitle,
  BannerBold,
  BannerLine,
  BannerContents,
  CenterImg,
  CenterLeftContentsWrapper,
  CenterMiddleContentsWrapper,
  BestDataImg,
} from "./Home.style";
import mainBg from "../../assets/images/mainBg.png";
import mapBg from "../../assets/images/mapBg.png";
import dataBg from "../../assets/images/dataBg.png";
import ReportStockItem from "./ReportStockItem";
import { Finbig, Maybe } from "../../commons/types/generated/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import {
  DataBestBtn,
  DataBtnWrapper,
  DataContents,
  DataImg,
  DataTitle,
  DataUpdateBtn,
  DataWrapper,
} from "../dataList/DataList.style";

interface HomeProps {
  bestData?: Maybe<Maybe<Finbig>[]> | undefined;
  updateData?: Maybe<Maybe<Finbig>[]> | undefined;
}

function SampleNextArrow(props: any) {
  return <div style={{ display: "none" }} />;
}

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    overflow: hidden;
  }
  .slick-arrow {
    display: none;
  }
`;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 5,
  speed: 500,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
};

const HomePresenter: React.FC<HomeProps> = ({ bestData, updateData }) => {
  const navigate = useNavigate();
  return (
    <>
      <ContainerWrapper>
        <Banner>
          <BannerImg src={mainBg} />
          <BannerContentsWrapper>
            <BannerTitle>
              합리적인 금액으로 <br /> <BannerBold>최고의 데이터</BannerBold>를
              제공합니다
            </BannerTitle>
            <BannerLine />
            <BannerContents>
              이노핀은 흩어져 있는 금융 데이터를 AI와 빅데이터 기술로
              <br /> 수집, 정제, 처리 하는 핀테크 기업입니다.
            </BannerContents>
          </BannerContentsWrapper>
        </Banner>
        <CenterWrapper>
          <CenterLeft>
            <CenterImg src={mapBg} />
            <CenterLeftContentsWrapper>
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
            </CenterLeftContentsWrapper>
          </CenterLeft>
          <CenterMiddle>
            <CenterImg src={dataBg} />
            <CenterMiddleContentsWrapper>
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
            </CenterMiddleContentsWrapper>
          </CenterMiddle>
          <ReportStockItem />
        </CenterWrapper>
        <UpdateTitle>신규 업데이트된 데이터</UpdateTitle>
        <UpdateWrapper>
          {updateData?.map((data) => (
            <DataWrapper key={data?.id}>
              <DataImg
                src={String(data?.thumbnail)}
                onClick={() => {
                  navigate(`/data/${data?.id}`);
                }}
              />
              <DataTitle
                onClick={() => {
                  navigate(`/data/${data?.id}`);
                }}
              >
                {data?.title}
              </DataTitle>
              <DataContents
                onClick={() => {
                  navigate(`/data/${data?.id}`);
                }}
              >
                {data?.description}
              </DataContents>
              <DataBtnWrapper>
                {data?.isBest && <DataBestBtn>Best</DataBestBtn>}
                <DataUpdateBtn>Update</DataUpdateBtn>
              </DataBtnWrapper>
            </DataWrapper>
          ))}
        </UpdateWrapper>
        <PopularWrapper>
          <PopularTitle>인기 데이터</PopularTitle>
          <>
            <StyledSlider {...settings}>
              {bestData?.map((data) => (
                <div key={data?.id}>
                  <BestDataImg
                    src={String(data?.thumbnail)}
                    onClick={() => {
                      navigate(`/data/${data?.id}`);
                    }}
                  />
                </div>
              ))}
            </StyledSlider>
          </>
        </PopularWrapper>
      </ContainerWrapper>
    </>
  );
};

export default HomePresenter;

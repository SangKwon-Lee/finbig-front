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
  BannerContentsBold,
} from "./Home.style";
import mainBg from "../../assets/images/mainBg.png";
import mapBg from "../../assets/images/mapBg.png";
import dataBg from "../../assets/images/dataBg.png";
import ReportStockItem from "./ReportStockItem";
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
import { FinbigsQuery } from "../../commons/graphql/generated";
import HomeBestContainer from "./HomeBest.container";
import { useState, useCallback } from "react";

interface HomeProps {
  isHover: boolean;
  bestLoading: boolean;
  updateLoading: boolean;
  bestData: FinbigsQuery | undefined;
  updateData: FinbigsQuery | undefined;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
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

const HomePresenter: React.FC<HomeProps> = ({
  isHover,
  bestData,
  updateData,
  setIsHover,
  bestLoading,
  updateLoading,
}) => {
  const navigate = useNavigate();

  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const onClickCard = (e: React.SyntheticEvent) => {
    if (dragging) {
      return;
    } else {
      navigate(`/data/${e}`);
    }
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  return (
    <>
      <ContainerWrapper>
        <Banner>
          <BannerImg src={mainBg} />
          <BannerContentsWrapper>
            <BannerTitle>
              이노핀은 금융투자 콘텐츠 개발에 최적인 <br />{" "}
              <BannerBold>검증된 자본시장 빅데이터</BannerBold>를 제공합니다
            </BannerTitle>
            <BannerLine />
            <BannerContents>
              D2C(Direct to Customer)기술 사업으로 3S(simple, smart, speed)한
              <br /> '투자의달인' 앱 서비스를 운영하며{" "}
              <BannerContentsBold>
                최고의 기술로 풍요로운 세상
              </BannerContentsBold>
              을 추구합니다.
            </BannerContents>
          </BannerContentsWrapper>
        </Banner>
        <CenterWrapper>
          <CenterLeft>
            <CenterImg src={mapBg} />
            <CenterLeftContentsWrapper>
              <CenterLeftTitle>
                <CenterTitleBold>데이터 상품</CenterTitleBold>
              </CenterLeftTitle>
              <CenterLeftSubTitle>
                이노핀의 자본시장 빅데이터 플랫폼은
                <br /> 데이터분석과 인공지능 기술에 기반한 금융투자 기초데이터,
                <br />
                AI 등 알고리즘 데이터, 대안투자 데이터 등을 서비스합니다.
              </CenterLeftSubTitle>
              <CenterButton>
                <CenterButtonTilte
                  onClick={() => {
                    navigate(`/dataList`);
                  }}
                >
                  View More
                </CenterButtonTilte>
              </CenterButton>
            </CenterLeftContentsWrapper>
          </CenterLeft>
          <CenterMiddle>
            <CenterImg src={dataBg} />
            <CenterMiddleContentsWrapper>
              <CenterMiddleTitle>데이터 시각화/활용 사례</CenterMiddleTitle>
              <CenterMiddleSubTitle>
                자본시장 금융 빅데이터를 활용한
                <br />
                시각화 및 활용 사례입니다.
              </CenterMiddleSubTitle>
              <CenterButton>
                <CenterButtonTilte
                  onClick={() => {
                    navigate(`/visualList`);
                  }}
                >
                  View More
                </CenterButtonTilte>
              </CenterButton>
            </CenterMiddleContentsWrapper>
          </CenterMiddle>
          <ReportStockItem />
        </CenterWrapper>
        <UpdateTitle>신규 업데이트된 데이터</UpdateTitle>
        <UpdateWrapper>
          {!updateLoading &&
            updateData?.finbigs?.map((data) => (
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
                  {data?.isUpdate && <DataUpdateBtn>New</DataUpdateBtn>}
                </DataBtnWrapper>
              </DataWrapper>
            ))}
          {!updateLoading && Number(updateData?.finbigs?.length) === 0 && (
            <PopularTitle
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              업데이트된 데이터가 없습니다.
            </PopularTitle>
          )}
        </UpdateWrapper>
        <PopularWrapper>
          <PopularTitle>인기 데이터</PopularTitle>
          <>
            <StyledSlider {...settings}>
              {!bestLoading &&
                bestData?.finbigs?.map((data) => (
                  <HomeBestContainer
                    key={data?.id}
                    isHover={isHover}
                    setIsHover={setIsHover}
                    onClickCard={onClickCard}
                    data={data}
                  />
                ))}
            </StyledSlider>
          </>
        </PopularWrapper>
      </ContainerWrapper>
    </>
  );
};

export default HomePresenter;

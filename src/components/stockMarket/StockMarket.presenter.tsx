import {
  StockMarketBody,
  StockMarketLine,
  StockMarketMap,
  StockMarketMapSmallBox,
  StockMarketMapSmallBoxWrapper,
  StockMarketSubTitle,
  StockMarketTitle,
  StockMarketTitleWrapper,
  StockMarketWrapper,
  backgroundColor,
  StockMarketTodayWrapper,
  StockMarketTodayBody,
  StockMarketTodayTitleWrapper,
  StockMarketTodayImg,
  StockMarketTodayTitle,
  StockMarketTodayBold,
  StockMarketTodayStockWrapper,
  StockMarketTodayStockTitle,
  StockMarketTodayStocHotkNum,
  StockMarketTodayStockSnowNum,
  StockMarketExplanation,
  StockMarketArrow,
} from "./StockMarket.style";
import SunImg from "../../assets/images/sun.svg";
import SnowImg from "../../assets/images/snow.svg";
import DownArrowImg from "../../assets/images/downArrow.svg";
import UpArrowImg from "../../assets/images/upArrow.svg";
const MarketSmallBox = ["+3%", "+2%", "+1%", "0%", "-1%", "-2%", "-3%"];
const StockMarketPresenter = () => {
  return (
    <StockMarketWrapper>
      <StockMarketBody>
        <StockMarketTitleWrapper>
          <StockMarketTitle>오늘의 시장을 한눈에 확인하세요</StockMarketTitle>
          <StockMarketSubTitle>
            ETF 시세 데이터를 분석하여 오늘의 전체적인 시장흐름을 보여줍니다
          </StockMarketSubTitle>
        </StockMarketTitleWrapper>
        <StockMarketLine />
        <StockMarketMap></StockMarketMap>
        <StockMarketMapSmallBoxWrapper>
          {MarketSmallBox.map((persent, index) => (
            <StockMarketMapSmallBox style={backgroundColor[index]}>
              {persent}
            </StockMarketMapSmallBox>
          ))}
        </StockMarketMapSmallBoxWrapper>
        <StockMarketTodayWrapper>
          <StockMarketTodayBody>
            <StockMarketTodayTitleWrapper>
              <StockMarketTodayImg src={SunImg} />
              <StockMarketTodayBold>뜨겁게 </StockMarketTodayBold>
              <StockMarketTodayTitle>
                &nbsp;달구는 오늘의 업종
              </StockMarketTodayTitle>
            </StockMarketTodayTitleWrapper>
            <StockMarketTodayStockWrapper>
              <StockMarketTodayStockTitle>
                1. &nbsp;스마트카
              </StockMarketTodayStockTitle>
              <StockMarketTodayStocHotkNum>
                <StockMarketArrow src={UpArrowImg} />
                5.68%
              </StockMarketTodayStocHotkNum>
            </StockMarketTodayStockWrapper>
            <StockMarketTodayStockWrapper>
              <StockMarketTodayStockTitle>
                2. &nbsp;필수소비재
              </StockMarketTodayStockTitle>
              <StockMarketTodayStocHotkNum>
                <StockMarketArrow src={UpArrowImg} />
                5%
              </StockMarketTodayStocHotkNum>
            </StockMarketTodayStockWrapper>
            <StockMarketTodayStockWrapper>
              <StockMarketTodayStockTitle>
                3. &nbsp;커뮤니케이션
              </StockMarketTodayStockTitle>
              <StockMarketTodayStocHotkNum>
                <StockMarketArrow src={UpArrowImg} />
                5%
              </StockMarketTodayStocHotkNum>
            </StockMarketTodayStockWrapper>
          </StockMarketTodayBody>
          <StockMarketTodayBody>
            <StockMarketTodayTitleWrapper
              style={{ backgroundColor: "#eae9ff" }}
            >
              <StockMarketTodayImg src={SnowImg} />
              <StockMarketTodayBold style={{ color: "#413df7" }}>
                차갑게
              </StockMarketTodayBold>
              <StockMarketTodayTitle>
                &nbsp;식어가는 오늘의 업종
              </StockMarketTodayTitle>
            </StockMarketTodayTitleWrapper>
            <StockMarketTodayStockWrapper>
              <StockMarketTodayStockTitle>
                1. &nbsp;스마트카
              </StockMarketTodayStockTitle>

              <StockMarketTodayStockSnowNum>
                <StockMarketArrow src={DownArrowImg} />
                5.68%
              </StockMarketTodayStockSnowNum>
            </StockMarketTodayStockWrapper>
            <StockMarketTodayStockWrapper>
              <StockMarketTodayStockTitle>
                2. &nbsp;필수소비재
              </StockMarketTodayStockTitle>
              <StockMarketTodayStockSnowNum>
                <StockMarketArrow src={DownArrowImg} />
                5%
              </StockMarketTodayStockSnowNum>
            </StockMarketTodayStockWrapper>
            <StockMarketTodayStockWrapper>
              <StockMarketTodayStockTitle>
                3. &nbsp;커뮤니케이션
              </StockMarketTodayStockTitle>
              <StockMarketTodayStockSnowNum>
                <StockMarketArrow src={DownArrowImg} />
                5%
              </StockMarketTodayStockSnowNum>
            </StockMarketTodayStockWrapper>
          </StockMarketTodayBody>
        </StockMarketTodayWrapper>
        <StockMarketExplanation>
          ※ 업종 등락률은 업종에 포함된 ETF종목의 단순 평균값 입니다
        </StockMarketExplanation>
      </StockMarketBody>
    </StockMarketWrapper>
  );
};

export default StockMarketPresenter;

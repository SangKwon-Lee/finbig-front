import {
  StockMarketBody,
  StockMarketLine,
  // StockMarketMap,
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
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import TreeMap from "fusioncharts/fusioncharts.treemap";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

//@ts-ignore
FusionCharts.options["license"]({
  key: "cgB1kvdF5H2E4F1C5B1A3A1A1D4G4I3xkcA3D5trxfsA2B2jE-11oE1G4E1A2B6C4A3F4B2C1C3H2C1C8B7B5E-11acE3E3G2sA4B2C2feI-8D1H4B3zD-13mD1D3G4nvrB9D2C6E2C4B1I4F1A9C11A5uD-11C-9A2I3NC5qD-17jD2FH3H1F-7B-22tC8B2E6D2E2F2J2C10A2B3D6C1D1D3r==",
  creditLabel: false,
});

ReactFC.fcRoot(FusionCharts, TreeMap, FusionTheme);

const MarketSmallBox = ["+3%", "+2%", "+1%", "0%", "-1%", "-2%", "-3%"];
const StockMarketPresenter = () => {
  const dataSource = {
    data: [
      {
        data: [
          {
            data: [
              {
                label: "스마트카",
                value: "519",
                svalue: "10",
              },
              {
                label: "전기기차",
                value: "448",
                svalue: "2.5",
              },
              {
                label: "반도체",
                value: "416",
                svalue: "1.1",
              },
              {
                label: "금융",
                value: "304",
                svalue: "0",
              },
              {
                label: "원자재",
                value: "159",
                svalue: "-1",
              },
              {
                label: "그린",
                value: "191",
                svalue: "-2",
              },
              {
                label: "스타일",
                value: "180",
                svalue: "-3",
              },
              {
                label: "부동산",
                value: "180",
                svalue: "3",
              },
              {
                label: "건강관리",
                value: "180",
                svalue: "2",
              },
              {
                label: "중공업",
                value: "180",
                svalue: "1",
              },
              {
                label: "필수소비재",
                value: "180",
                svalue: "-1",
              },
              {
                label: "커뮤니케이션",
                value: "180",
                svalue: "-2",
              },
              {
                label: "운송",
                value: "180",
                svalue: "-3",
              },
            ],
          },
        ],
      },
    ],
    colorrange: {
      mapbypercent: "0",
      // gradient: "1",
      // minvalue: "0",
      code: "#b1b1b1",
      // startlabel: "Ideal",
      // endlabel: "Threshold",
      color: [
        {
          code: "#ff2616",
          maxvalue: "10",
        },
        {
          code: "#ff928a",
          maxvalue: "2",
        },
        {
          code: "#ffd3d0",
          maxvalue: "1",
        },
        {
          code: "#b1b1b1",
          maxvalue: "0",
        },
        {
          code: "#a6cef6",
          maxvalue: "-1",
        },
        {
          code: "#518bf5",
          maxvalue: "-2",
        },
        {
          code: "#0076ec",
          maxvalue: "-10",
        },
      ],
    },
    chart: {
      hideTitle: "1",
      caption: "Today Keyword",
      algorithm: "squarified",
      plottooltext: "<b>$label(+$svalue)</b>",
      theme: "fusion",
      showPrintMenuItem: 0,
      showChildLabels: 1,
      chartTopMargin: -30,
      plotborderthickness: ".5",
      plotbordercolor: "ffffff",
      horizontalPadding: 0,
      verticalPadding: 0,
      // showHoverEffect: 0,
      // showTooltip: 0,
      showParent: 0,
      labelFontBold: 1,
      labelFontColor: "ffffff",
      labelGlow: 0,
      labelFontSize: 16,
      creditLabel: false,
    },
  };

  return (
    <>
      <StockMarketWrapper>
        <StockMarketBody>
          <StockMarketTitleWrapper>
            <StockMarketTitle>오늘의 시장을 한눈에 확인하세요</StockMarketTitle>
            <StockMarketSubTitle>
              ETF 시세 데이터를 분석하여 오늘의 전체적인 시장흐름을 보여줍니다
            </StockMarketSubTitle>
          </StockMarketTitleWrapper>
          <StockMarketLine />

          <ReactFC
            type={"treemap"}
            width={1100}
            height={500}
            dataFormat={"json"}
            dataSource={dataSource}
          />
          <StockMarketMapSmallBoxWrapper>
            {MarketSmallBox.map((persent, index) => (
              <StockMarketMapSmallBox
                style={backgroundColor[index]}
                key={index}
              >
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
    </>
  );
};

export default StockMarketPresenter;

import {
  StockMarketBody,
  StockMarketLine,
  StockMarketSubTitle,
  StockMarketTitle,
  StockMarketTitleWrapper,
  StockMarketWrapper,
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
  StockMarketDayWrapper,
  StockMarketDayBtn,
} from "./StockMarket.style";
import SunImg from "../../assets/images/sun.svg";
import SnowImg from "../../assets/images/snow.svg";
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

const StockMarketPresenter: React.FC<any> = ({
  day,
  loading,
  etfUpData,
  handleDay,
  etfDownData,
}) => {
  const dataSource = {
    data: [
      {
        data: [
          {
            data: etfUpData,
          },
        ],
      },
    ],
    colorrange: {
      mapbypercent: "0",
      // gradient: "1",
      // minvalue: "0",
      code: "#dedede",
      // startlabel: "Ideal",
      // endlabel: "Threshold",
      color: [
        {
          code: "#ff2616",
          maxvalue: etfUpData[0]?.value + 0.01,
        },
        {
          code: "#ff928a",
          maxvalue: etfUpData[5]?.value,
        },
        {
          code: "#ffc6c2",
          maxvalue: etfUpData[9]?.value - 0.01,
        },
      ],
    },
    chart: {
      hideTitle: "1",
      caption: "Today Keyword",
      algorithm: "squarified",
      plottooltext: "<b>$label($svalue%)</b>",
      theme: "fusion",
      canvasLeftMargin: -100,
      // showPrintMenuItem: 0,
      showChildLabels: 1,
      chartTopMargin: -30,
      plotborderthickness: ".5",
      plotbordercolor: "ffffff",
      horizontalPadding: 0,
      verticalPadding: 0,
      chartRightMargin: 10,
      chartLeftMargin: 0,
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
  const dataSource2 = {
    data: [
      {
        data: [
          {
            data: etfDownData,
          },
        ],
      },
    ],
    colorrange: {
      mapbypercent: "0",
      // gradient: "1",
      // minvalue: "0",
      // code: "#b1b1b1",
      // startlabel: "Ideal",
      // endlabel: "Threshold",
      color: [
        {
          code: "#a6cef6",
          maxvalue: etfDownData[0]?.svalue,
        },
        {
          code: "#518bf5",
          maxvalue: etfDownData[5]?.svalue,
        },
        {
          code: "#0076ec",
          maxvalue: etfDownData[9]?.svalue + 0.01,
        },
      ],
    },
    chart: {
      hideTitle: "1",
      caption: "Today Keyword",
      algorithm: "squarified",
      plottooltext: "<b>$label($svalue%)</b>",
      theme: "fusion",
      // showPrintMenuItem: 0,
      showChildLabels: 1,
      chartTopMargin: -30,
      plotborderthickness: ".5",
      plotbordercolor: "ffffff",
      horizontalPadding: 0,
      verticalPadding: 0,
      // showHoverEffect: 0,
      // showTooltip: 0,
      chartRightMargin: 0,
      chartLeftMargin: 5,
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
            <StockMarketTitle>빅데이터로 본 글로벌 자본시장</StockMarketTitle>
            <StockMarketSubTitle>
              ETF 시세, 키워드 등에 따른 자본시장의 기간별 추세를 확인하세요
            </StockMarketSubTitle>
          </StockMarketTitleWrapper>
          <StockMarketLine />

          <div style={{ display: "flex" }}>
            {etfUpData.length > 1 && !loading ? (
              <ReactFC
                type={"treemap"}
                width={550}
                height={500}
                dataFormat={"json"}
                dataSource={dataSource}
              />
            ) : (
              <div style={{ height: "500px" }}>Loading...</div>
            )}
            {etfDownData.length > 1 && !loading && (
              <ReactFC
                type={"treemap"}
                width={550}
                height={500}
                dataFormat={"json"}
                dataSource={dataSource2}
              />
            )}
          </div>

          <StockMarketDayWrapper>
            <StockMarketDayBtn value="" onClick={handleDay} isDay={day === ""}>
              실시간
            </StockMarketDayBtn>
            <StockMarketDayBtn
              value="5D"
              onClick={handleDay}
              isDay={day === "5D"}
            >
              5 거래일 대비 변동률
            </StockMarketDayBtn>
            <StockMarketDayBtn
              value="60D"
              onClick={handleDay}
              isDay={day === "60D"}
            >
              60 거래일 대비 변동률
            </StockMarketDayBtn>
            <StockMarketDayBtn
              value="1Y"
              onClick={handleDay}
              isDay={day === "1Y"}
            >
              전년 말 종가 대비 변동률
            </StockMarketDayBtn>
          </StockMarketDayWrapper>
          <StockMarketTodayWrapper>
            <StockMarketTodayBody>
              <StockMarketTodayTitleWrapper>
                <StockMarketTodayImg src={SunImg} />
                <StockMarketTodayBold>뜨겁게 </StockMarketTodayBold>
                <StockMarketTodayTitle>&nbsp;달군 업종</StockMarketTodayTitle>
              </StockMarketTodayTitleWrapper>
              {etfUpData.slice(0, 5).map((data: any, index: any) => (
                <StockMarketTodayStockWrapper key={index}>
                  <StockMarketTodayStockTitle>
                    {index + 1}. {data.label}
                  </StockMarketTodayStockTitle>
                  <StockMarketTodayStocHotkNum>
                    {data.svalue + "%"}
                  </StockMarketTodayStocHotkNum>
                </StockMarketTodayStockWrapper>
              ))}
            </StockMarketTodayBody>
            <StockMarketTodayBody>
              <StockMarketTodayTitleWrapper
                style={{ backgroundColor: "#eae9ff" }}
              >
                <StockMarketTodayImg src={SnowImg} />
                <StockMarketTodayBold style={{ color: "#413df7" }}>
                  차갑게
                </StockMarketTodayBold>
                <StockMarketTodayTitle>&nbsp;식은 업종</StockMarketTodayTitle>
              </StockMarketTodayTitleWrapper>
              {etfDownData
                .slice(etfDownData.length - 5, etfDownData.length)
                .reverse()
                .map((data: any, index: any) => (
                  <StockMarketTodayStockWrapper key={index}>
                    <StockMarketTodayStockTitle>
                      {index + 1}. {data.label}
                    </StockMarketTodayStockTitle>
                    <StockMarketTodayStockSnowNum>
                      {data.svalue + "%"}
                    </StockMarketTodayStockSnowNum>
                  </StockMarketTodayStockWrapper>
                ))}
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

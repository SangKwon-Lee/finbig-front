import styled from "@emotion/styled";

interface StockMarkeyStyle {
  isDay: boolean;
}
export const backgroundColor = [
  { backgroundColor: "#ff2616" },
  { backgroundColor: "rgba(255, 38, 22, 0.5)" },
  { backgroundColor: "rgba(255, 38, 22, 0.2)" },
  { backgroundColor: "#b1b1b1" },
  { backgroundColor: "rgba(0, 118, 236, 0.2)" },
  { backgroundColor: "rgba(0, 118, 236, 0.5)" },
  { backgroundColor: "#0076ec" },
];

export const StockMarketWrapper = styled.div`
  min-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 116px;
`;

export const StockMarketBody = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StockMarketTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StockMarketTitle = styled.div`
  font-size: 32px;
  font-family: SpoqaHanSansNeo-Bold;
  padding-bottom: 8px;
`;

export const StockMarketSubTitle = styled.div`
  font-family: SpoqaHanSansNeo-Medium;
  font-size: 14px;
  color: #cccccc;
`;

export const StockMarketLine = styled.div`
  width: 100px;
  border-top: 1px solid #cccccc;
  margin-top: 27px;
  margin-bottom: 45px;
`;

export const StockMarketMap = styled.div`
  width: 1100px;
  height: 355px;
  border: 1px solid black;
`;

export const StockMarketMapSmallBoxWrapper = styled.div`
  width: 388px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: 20px;
  margin-bottom: 41px;
`;

export const StockMarketMapSmallBox = styled.div`
  width: 52px;
  height: 23px;
  font-size: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StockMarketTodayWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

export const StockMarketTodayBody = styled.div`
  width: 542px;
  height: 281px;
  border: 1px solid #cccccc;
`;

export const StockMarketTodayTitleWrapper = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  background-color: #fff5ee;
  padding-left: 24px;
`;

export const StockMarketTodayImg = styled.img``;

export const StockMarketTodayBold = styled.span`
  font-family: GmarketSansBold;
  font-size: 16px;
  color: #ff1a1a;
  padding-left: 18px;
`;

export const StockMarketTodayTitle = styled.div`
  font-family: GmarketSansMedium;
  font-size: 16px;
`;

export const StockMarketTodayStockWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 40px;
  height: 74px;
  align-items: center;
  border-top: 1px solid #cccccc;
`;

export const StockMarketTodayStockTitle = styled.div`
  font-family: GmarketSansBold;
  font-size: 16px;
`;

export const StockMarketTodayStocHotkNum = styled.div`
  font-family: GmarketSansBold;
  color: #ff1a1a;
  display: flex;
  align-self: center;
`;
export const StockMarketTodayStockSnowNum = styled.div`
  font-family: GmarketSansBold;
  color: #1c17ff;
  display: flex;
  align-self: center;
`;

export const StockMarketExplanation = styled.div`
  font-size: 12px;
  align-self: flex-start;
  padding-top: 16px;
  color: #999999;
`;

export const StockMarketArrow = styled.img`
  margin-right: 5px;
  padding-bottom: 4px;
`;

export const StockMarketDayWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const StockMarketDayBtn = styled.button`
  margin-left: 10px;
  outline: none;
  font-size: 12px;
  padding: 5px;
  border: 1px solid #4033a2;
  background-color: ${(props: StockMarkeyStyle) =>
    props.isDay ? "#4033a2" : "white"};
  cursor: pointer;
  color: ${(props: StockMarkeyStyle) => (props.isDay ? "white" : "black")};
`;

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import StockMarketPresenter from "./StockMarket.presenter";

interface EtfKeyword {
  avgRatio: number;
  cnt: number;
  marketCapTotal: number;
  stockCodes: string;
  stockInfo: any;
  stockNames: string;
  tagName: string;
}

interface KeywordMap {
  label: string;
  value: string;
  svalue: string;
}

const StockMarketContainer = () => {
  const [loading, setLoading] = useState(false);

  const [etfUpData, setEtfUpData] = useState<KeywordMap[]>([
    {
      label: "",
      value: "",
      svalue: "",
    },
  ]);
  const [etfDownData, setEtfDownData] = useState<KeywordMap[]>([
    {
      label: "",
      value: "",
      svalue: "",
    },
  ]);

  const [day, setDay] = useState("");

  const getETFKeywordData = useCallback(async () => {
    setLoading(true);
    try {
      let { data } = await axios.get(
        `https://api.tudal.co.kr/api/bigData/etfKeywordMapInfo?period=${day}
        `
      );
      if (day === "") {
        let top = data.slice(0, 10);
        let bottom = data.slice(data.length - 10, data.length);
        // let result = top.concat(bottom);
        // let marketTotal = result
        //   .map((data: EtfKeyword) => data.marketCapTotal)
        //   .reduce((acc: any, cur: any) => Number(acc) + Number(cur));
        // * svalue = 색 / value = 박스 크기
        top = top.map((data: EtfKeyword) => {
          let mapData = { label: "", value: "", svalue: "" };
          mapData["label"] = data.tagName;
          mapData["value"] =
            data.avgRatio > 0.001
              ? Math.abs(data.avgRatio + 0.09).toFixed(2)
              : "0.05";
          mapData["svalue"] = data.avgRatio.toFixed(2);
          // Number(((data.marketCapTotal / marketTotal) * 100).toFixed(2)) < 1
          //   ? "1"
          //   : String(((data.marketCapTotal / marketTotal) * 100).toFixed(2));
          return mapData;
        });
        bottom = bottom.map((data: EtfKeyword) => {
          let mapData = { label: "", value: 0, svalue: "" };
          mapData["label"] = data.tagName;
          mapData["value"] = Math.abs(data.avgRatio);
          mapData["svalue"] = String(data.avgRatio.toFixed(2));
          // Number(((data.marketCapTotal / marketTotal) * 100).toFixed(2)) < 1
          //   ? "1"
          //   : String(((data.marketCapTotal / marketTotal) * 100).toFixed(2));
          return mapData;
        });
        setEtfUpData(top);
        setEtfDownData(bottom);
        setLoading(false);
      } else {
        let ratioPeriodAgoArr = [];

        ratioPeriodAgoArr = data.map((data: any) => {
          let mapData = { label: "", value: "", svalue: "" };
          let acc = 0;
          for (let i = 0; i < data.stockInfo.length; i++) {
            if (!data.stockInfo[i].ratioPeriodAgo) {
              data.stockInfo[i].ratioPeriodAgo = data.stockInfo[i].ratio;
            }
            acc = data.stockInfo[i].ratioPeriodAgo + acc;
          }
          mapData["label"] = data.tagName;
          mapData["value"] = String(Math.abs(acc / data.cnt).toFixed(2));
          mapData["svalue"] = String((acc / data.cnt).toFixed(2));
          return mapData;
        });
        ratioPeriodAgoArr = ratioPeriodAgoArr.sort(
          (a: any, b: any) => Number(b.svalue) - Number(a.svalue)
        );
        const top = ratioPeriodAgoArr.slice(0, 10);
        const bottom = ratioPeriodAgoArr.slice(data.length - 10, data.length);
        // let result = top.concat(bottom);
        // let marketTotal = result
        //   .map((data: any) => data.value)
        //   .reduce((acc: any, cur: any) => Number(acc) + Number(cur));
        // for (let i = 0; i < result.length; i++) {
        //   result[i].value =
        //     Number(((result[i].value / marketTotal) * 100).toFixed(2)) < 1
        //       ? "1"
        //       : String(((result[i].value / marketTotal) * 100).toFixed(2));
        // }
        setEtfUpData(top);
        setEtfDownData(bottom);
        setLoading(false);
      }
    } catch (e) {}
  }, [day]);

  useEffect(() => {
    getETFKeywordData();
  }, [day, getETFKeywordData]);

  const handleDay = (e: any) => {
    setDay(e.target.value);
  };

  return (
    <>
      <StockMarketPresenter
        day={day}
        loading={loading}
        handleDay={handleDay}
        etfUpData={etfUpData}
        etfDownData={etfDownData}
      />
    </>
  );
};

export default StockMarketContainer;

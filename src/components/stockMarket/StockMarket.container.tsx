import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import StockMarketPresenter from "./StockMarket.presenter";

interface EtfKeyword {
  avgRatio: number;
  cnt: number;
  marketCapTotal: number;
  stockCodes: string;
  stockInfo: {
    comment: string;
    jnilclose: number;
    marketcap: string;
    name: string;
    price: number;
    ratio: number;
    ratioPeriodAgo: number;
    stockCode: string;
    stockNames: string;
    tagName: string;
  };
  stockNames: string;
  tagName: string;
}

interface KeywordMap {
  label: string;
  value: string;
  svalue: string;
}

const StockMarketContainer = () => {
  const [etfData, setEtfData] = useState<KeywordMap[]>([
    {
      label: "",
      value: "",
      svalue: "",
    },
  ]);

  const [day, setDay] = useState("");

  const getETFKeywordData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://api.tudal.co.kr/api/bigData/etfKeywordMapInfo?period=${day}
        `
      );
      const top = data.slice(0, 5);
      const bottom = data.slice(data.length - 5, data.length);
      let result = top.concat(bottom);
      let marketTotal = result
        .map((data: EtfKeyword) => data.marketCapTotal)
        .reduce((acc: any, cur: any) => Number(acc) + Number(cur));
      result = result.map((data: EtfKeyword) => {
        let mapData = { label: "", value: "", svalue: "" };
        mapData["label"] = data.tagName;
        mapData["svalue"] = String(data.avgRatio.toFixed(2));
        mapData["value"] =
          Number(((data.marketCapTotal / marketTotal) * 100).toFixed(2)) < 1
            ? "1"
            : String(((data.marketCapTotal / marketTotal) * 100).toFixed(2));

        return mapData;
      });
      setEtfData(result);
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
      <StockMarketPresenter etfData={etfData} handleDay={handleDay} day={day} />
    </>
  );
};

export default StockMarketContainer;

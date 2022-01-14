import { useState, useEffect, useContext } from "react";
import moment from "moment";
import { SocketContext } from "../contexts/SocketContext";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { priceFormat, ratioFormat } from "../../utils/finance";
import {
  CenterRight,
  CenterRightName,
  CenterRightStockDate,
  CenterRightStockImg,
  CenterRightStockNum,
  CenterRightStockNumAndImg,
  CenterRightStockNumWrapper,
  CenterRightStockTitleWrapper,
  CenterRightStockWrapper,
  CenterRightTitle,
  CenterRightTitleWrapper,
} from "./Home.style";
import dayjs from "dayjs";
import upArrow from "../../assets/images/upArrow.svg";
import downArrow from "../../assets/images/downArrow.svg";
import axios from "axios";
import * as dotenv from "dotenv";
import { priceToString } from "../../utils/priceToString";
dotenv.config();

const domesticIndices = [
  {
    symbol: "kospi",
    code: "001",
    name: "코스피",
  },
  {
    symbol: "kosdaq",
    code: "301",
    name: "코스닥",
  },
  {
    symbol: "kospi200",
    code: "101",
    name: "코스피200",
  },
  {
    symbol: "kosdaq150",
    code: "401",
    name: "코스닥150",
  },
];
const { REACT_APP_CMS_URL, REACT_APP_CMS_TOKEN } = process.env;

const ReportStockItem = () => {
  const [priceData, setPriceData] = useState<any>([]);
  const [overseasData, setOverseasData] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<any>();
  const [category, setCategory] = useState("국내");
  const { queryManager, connected, reconnect } = useContext(SocketContext);
  useEffect(() => {
    if (connected) {
      fetchStockPrice();
      fetchPrice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected, category]);

  const fetchStockPrice = async () => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_CMS_URL}/indices?country_ne=한국&token=${REACT_APP_CMS_TOKEN}`
      );
      console.log(data);
      const newData = data.filter(
        (data: any) =>
          data.name === "다우 산업" ||
          data.name === "나스닥 종합" ||
          data.name === "S&P 500" ||
          data.name === "나스닥 100"
      );
      console.log(newData);
      setOverseasData(newData);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPrice = () => {
    //@ts-ignore
    if (!queryManager || !queryManager.current) {
      //@ts-ignore
      if (reconnect) reconnect();
      return;
    }
    //@ts-ignore
    queryManager.current.sendProcessByName(
      "i0006",
      function (queryData: any) {
        if (!queryData) {
          setLoading(false);
          return;
        }

        var block = queryData.getBlockData("InBlock1")[0];
        block["upcode_cnt"] = "4";
        var block2 = queryData.getBlockData("InBlock2");
        // eslint-disable-next-line array-callback-return
        domesticIndices.map((item) => {
          block2.push({
            upcode: item.code,
          });
        });
      },
      function (queryData: any) {
        if (!queryData) {
          setLoading(false);
          return;
        }
        let results = queryData.getBlockData("OutBlock2");
        // console.log("[TabIndex] Domestic Result", results);
        const newData: any = [];
        // eslint-disable-next-line array-callback-return
        domesticIndices.map((item, i) => {
          const price = results[i];
          const before_price =
            price.pricejisu +
            (price.sign >= "4" ? price.change : -price.change);
          const diff = price.sign >= "4" ? -price.change : price.change;

          newData.push({
            type: "domestic",
            symbol: item.symbol,
            name: item.name,
            value: price.pricejisu,
            diff: diff,
            before_price: before_price,
            ratio: (diff / before_price) * 100,
            datetime: moment(),
          });
          setLoading(false);
        });
        setPriceData(newData);
      }
    );
  };

  return (
    <>
      <CenterRight>
        <CenterRightTitleWrapper>
          <CenterRightTitle
            isCategory={category === "국내"}
            onClick={() => {
              setCategory("국내");
            }}
          >
            국내
          </CenterRightTitle>
          <CenterRightTitle
            isCategory={category === "해외"}
            onClick={() => {
              setCategory("해외");
            }}
          >
            해외
          </CenterRightTitle>
          <CenterRightTitle
            isCategory={category === "주요"}
            onClick={() => {
              setCategory("주요");
            }}
          >
            주요지표
          </CenterRightTitle>
        </CenterRightTitleWrapper>
        {priceData.length > 0 &&
          category === "국내" &&
          priceData.map((data: any, index: any) => (
            <CenterRightStockWrapper key={index}>
              <CenterRightStockTitleWrapper>
                <CenterRightName>{data.name} &nbsp;</CenterRightName>
                <CenterRightStockDate>
                  {dayjs(data.datetime).format("YYYY.MM.DD hh:mm")}
                </CenterRightStockDate>
              </CenterRightStockTitleWrapper>
              <CenterRightStockNumWrapper>
                <CenterRightStockNum
                  style={{ width: "60px" }}
                  isActive={data.ratio > 0 ? true : false}
                >
                  {priceToString(data.value)}
                </CenterRightStockNum>
                <CenterRightStockNumAndImg>
                  <CenterRightStockImg
                    src={data.ratio > 0 ? upArrow : downArrow}
                  />
                  <CenterRightStockNum isActive={data.ratio > 0 ? true : false}>
                    {data.diff}
                  </CenterRightStockNum>
                </CenterRightStockNumAndImg>
                <CenterRightStockNumAndImg>
                  <CenterRightStockImg
                    src={data.ratio > 0 ? upArrow : downArrow}
                  />
                  <CenterRightStockNum isActive={data.ratio > 0 ? true : false}>
                    {ratioFormat(data.ratio)}
                  </CenterRightStockNum>
                </CenterRightStockNumAndImg>
              </CenterRightStockNumWrapper>
            </CenterRightStockWrapper>
          ))}
        {overseasData.length > 0 &&
          category === "해외" &&
          overseasData.map((data: any, index: any) => (
            <CenterRightStockWrapper key={index}>
              <CenterRightStockTitleWrapper>
                <CenterRightName>{data.name} &nbsp;</CenterRightName>
                <CenterRightStockDate>
                  {dayjs(data.datetime).format("YYYY.MM.DD hh:mm")}
                </CenterRightStockDate>
              </CenterRightStockTitleWrapper>
              <CenterRightStockNumWrapper>
                <CenterRightStockNum
                  style={{ width: "70px" }}
                  isActive={data.ratio > 0 ? true : false}
                >
                  {priceToString(String(data.price))}
                </CenterRightStockNum>
                <CenterRightStockNumAndImg>
                  <CenterRightStockImg
                    src={data.ratio > 0 ? upArrow : downArrow}
                  />
                  <CenterRightStockNum isActive={data.ratio > 0 ? true : false}>
                    {data.diff}
                  </CenterRightStockNum>
                </CenterRightStockNumAndImg>
                <CenterRightStockNumAndImg>
                  <CenterRightStockImg
                    src={data.ratio > 0 ? upArrow : downArrow}
                  />
                  <CenterRightStockNum isActive={data.ratio > 0 ? true : false}>
                    {ratioFormat(data.ratio)}
                  </CenterRightStockNum>
                </CenterRightStockNumAndImg>
              </CenterRightStockNumWrapper>
            </CenterRightStockWrapper>
          ))}
      </CenterRight>
    </>
  );
};

export default ReportStockItem;

//*
// useEffect(() => {
//   fetchPrice();
//   fetchInfo();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
// const fetchInfo = async () => {
//   try {
//     const response = await apiServer.get(`/stocks/${stock.code}/info`);
//     if (response.status === 200) {
//       setInfo(response.data);
//     }
//   } catch (error) {}
// };

import { PageWrapper, Page, ArrowLeft, ArrowRight } from "./Pagination.style";
import ArrowSVG from "../../../assets/images/arrowDown.svg";
import { useState } from "react";
import { useEffect } from "react";
interface PaginationProps {
  listLength: number | undefined;
  listInput: {
    start: number;
    limit: number;
  };
  setListInput: React.Dispatch<
    React.SetStateAction<{
      start: number;
      limit: number;
    }>
  >;
  search?: string;
}

const PaginationContainer: React.FC<PaginationProps> = ({
  listLength,
  listInput,
  setListInput,
  search,
}) => {
  const { limit } = listInput;
  const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (search) {
      setPage(1);
      setListInput({
        ...listInput,
        start: 0,
      });
    }
    if (listLength && listLength <= limit * 10) {
      const newPageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
        (data) => data < Math.ceil(listLength / limit) + 1
      );
      setPage(1);
      setPageArr(newPageArr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listLength, search]);

  //* 페이지 네이션
  const handleChangePage = (e: any) => {
    setListInput({
      ...listInput,
      start: e.target.value * limit - limit,
    });
    setPage(e.target.value);
  };

  //* 다음 페이지 누르기
  const handleChangeNext = () => {
    //@ts-ignore

    if (page >= Math.ceil(listLength / limit)) {
      alert("마지막 페이지 입니다");
      return;
    }
    if (Number(page) === pageArr[pageArr.length - 1]) {
      let newPageArr = pageArr
        .map((data) => data + 10)
        //@ts-ignore
        .filter((data) => data <= Math.ceil(listLength / limit));
      setPageArr(newPageArr);
    }
    setPage(() => Number(page) + 1);
    setListInput({
      ...listInput,
      start: listInput.start + limit,
    });
  };

  //* 이전 페이지 누르기
  const handleChangePrev = () => {
    if (page <= 1) {
      alert("첫 페이지입니다.");
      return;
    }
    setPage(() => Number(page) - 1);
    setListInput({
      ...listInput,
      start: listInput.start - limit,
    });
    if (Number(page) === 11) {
      setPageArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    } else if (Number(page) === pageArr[0]) {
      let newPageArr = pageArr.map((data) => data - 10);
      setPageArr(newPageArr);
    }
  };

  return (
    <>
      <PageWrapper>
        <Page onClick={handleChangePrev}>
          <ArrowLeft src={ArrowSVG} />
        </Page>
        {pageArr.map((data) => (
          <Page
            key={data}
            value={data}
            onClick={handleChangePage}
            isActive={listInput.start / limit + 1 === data ? true : false}
          >
            {data}
          </Page>
        ))}
        <Page onClick={handleChangeNext}>
          <ArrowRight src={ArrowSVG} />
        </Page>
      </PageWrapper>
    </>
  );
};

export default PaginationContainer;

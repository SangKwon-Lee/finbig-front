import axios from "axios";
import DataListPresenter from "./DataList.presenter";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const DataListContainer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTest = async () => {
    const { data } = await axios.get("http://221.168.33.64/api/reits/info");
    //* 칼럼 명
    const workSheetColumnNames = Object.keys(data[0]);
    //* 데이터
    const workSheetRowValues = data.map((data: any) => {
      return Object.values(data);
    });
    exportExcel(workSheetRowValues, workSheetColumnNames);
  };

  //* 엑셀파일로 다운받기
  const exportExcel = (data: any, workSheetColumnNames: any) => {
    const workBook = XLSX.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
    XLSX.utils.book_append_sheet(workBook, workSheet, "data");
    const excelBuffer = XLSX.write(workBook, {
      bookType: "xlsx",
      type: "array",
    });
    const excelData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(excelData, `fileName.xlsx`);
  };

  return (
    <>
      <DataListPresenter />
    </>
  );
};
export default DataListContainer;

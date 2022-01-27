import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

//* 엑셀파일로 다운받기
export const exportExcel = (
  workSheetRowValues: any,
  workSheetColumnNames: any,
  apiName?: String
) => {
  const workBook = XLSX.utils.book_new();
  const workSheetData = [workSheetColumnNames, ...workSheetRowValues];
  const workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
  XLSX.utils.book_append_sheet(workBook, workSheet, `${apiName}`);
  const excelBuffer = XLSX.write(workBook, {
    bookType: "xlsx",
    type: "array",
  });
  const excelData = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });
  saveAs(excelData, `${apiName}.xlsx`);
};

import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExcelExport = ({ excelData, fileName }) => {
  const fileType =
    "application/und.openxmIformats-officedocument. spreadsheetml. sheet; charset-UTF-8";
  const fileExtension = ".xlsx";
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div>Export data to excel</div>
      <div
        className="p-2 text-center rounded-2 mt-3"
        style={{
          background: "dodgerblue",
          color: "#fff",
          width: 100,
        }}
        onClick={() => exportToExcel(fileName)}
      >
        Export
      </div>
    </div>
  );
};

export default ExcelExport;

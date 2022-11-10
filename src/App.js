import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ExcelExport from "./excelexport";

function App() {
  // array of the data you to export to excel
  const ExcelExportData = [
    {
      firstname: "Arul ",
      lastname: "prasath",
      address: "home ground",
    },
  ];

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-white"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* custom component for exporting to excel */}
      <ExcelExport excelData={ExcelExportData} fileName={"Excel Export"} />
    </div>
  );
}

export default App;

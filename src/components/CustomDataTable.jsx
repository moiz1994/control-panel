// src/components/CustomDataTable.jsx
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

const CustomDataTable = ({
  data,
  columns,
  selectionEnabled = false,
  onSelectionChange,
  title,
  rows = 10,
  paginator = true,
  striped = true,
  responsiveLayout = "scroll",
  className = "p-datatable-gridlines", // ensures gridlines
}) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (e) => {
    setSelectedRows(e.value);
    if (onSelectionChange) onSelectionChange(e.value);
  };

  // global search header
  const renderHeader = () => (
    <div className="d-flex justify-content-between align-items-center">
      {title && <h4 className="mb-3">{title}</h4>}

      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="p-inputtext-sm"
        />
      </IconField>
    </div>
  );

  return (
    <div className="card">
      <DataTable
        value={data}
        rows={rows}
        paginator={paginator}
        globalFilter={globalFilter}
        stripedRows={striped}
        showGridlines
        responsiveLayout="scroll"
        selectionMode={selectionEnabled ? "multiple" : null}
        selection={selectedRows}
        onSelectionChange={handleSelectionChange}
        header={renderHeader()}
        emptyMessage="No records found."
        className={className}
      >
        {selectionEnabled && (
          <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        )}
        {columns.map((col, i) => (
          <Column
            key={i}
            field={col.field}
            header={col.header}
            body={col.body} // 🔥 allows custom rendering
            sortable={col.sortable}
            style={{ fontSize: "14px" }}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default CustomDataTable;

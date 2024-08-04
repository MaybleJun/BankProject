import { FC, useEffect, useState } from "react";
import { IPayment } from "../../models/paymentModel";
import ArrowDownIcon from "../../assets/ArrowDown.svg";
import "./Table.scss";
import { baseSort, dateSort } from "../../utils/datebaseSort";

interface ITableProps {
    data: IPayment[];
    columns: string[];
}

interface ISort {
    sortBy: string;
    sortOrder: "asc" | "desc";
}

interface IColumnHeader {
    key: string;
    label: string;
}

const Table: FC<ITableProps> = ({ data, columns }) => {
    const [tableData, setTableData] = useState<IPayment[]>([]);
    const [sortConfig, setSortConfig] = useState<ISort>({ sortBy: "", sortOrder: "asc" });
    const [columnHeaders, setColumnHeaders] = useState<IColumnHeader[]>([]);

    useEffect(() => {
        setTableData(data);
        setColumnHeaders(
            columns.map((columnName, index) => ({
                key: data.length > 0 ? Object.keys(data[0])[index] : "",
                label: columnName,
            }))
        );
        setSortConfig({ sortBy: data.length > 0 ? Object.keys(data[0])[0] : "", sortOrder: "asc" });
    }, [data, columns]);

    useEffect(() => {
        if (sortConfig.sortBy) {
            handleSorting(sortConfig);
        }
    }, [sortConfig]);

    const handleSorting = ({ sortBy, sortOrder }: ISort) => {
        const sortedData = sortBy === "date" ? dateSort(tableData, sortBy, sortOrder) : baseSort(tableData, sortBy, sortOrder);
        setTableData([...sortedData]);
    };

    const toggleSortOrder = (header: IColumnHeader) => {
        setSortConfig(prevConfig => ({
            sortBy: prevConfig.sortBy === header.key ? header.key : header.key,
            sortOrder: prevConfig.sortOrder === "asc" ? "desc" : "asc"
        }));
    };

    return (
        <div className="table">
            <div className="table__row">
                {columnHeaders.map(({ key, label }) => (
                    <div
                        key={key}
                        style={{ width: `calc(98% / ${columns.length})` }}
                        className="cell head"
                        onClick={() => toggleSortOrder({ key, label })}
                    >
                        {label}
                        <ArrowDownIcon className={`${sortConfig.sortBy === key && sortConfig.sortOrder === "desc" ? "icon" : ""} table__row`} />
                    </div>
                ))}
            </div>
            {tableData.map((rowData, index) => (
                <div key={index} className="table__row">
                    {Object.values(rowData).map((cellData, idx) => (
                        <div key={`${cellData}_${idx}`} style={{ width: `calc(98% / ${columns.length})` }} className="cell">
                            {cellData}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Table;

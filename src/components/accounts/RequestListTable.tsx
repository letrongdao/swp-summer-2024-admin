"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import NavigationPane from "./NavigationPane";
import axios from "axios";

export default function RequestListTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [accountList, setAccountList] = useState([]);

  const fetchAccountData = async () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Data: ", res.data);
        setAccountList(res.data);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  const columns = [
    {
      name: <p className="font-semibold text-tremor-default">No</p>,
      selector: (row: any, index: any) => index + 1,
      grow: 0,
    },
    {
      name: <p className="font-semibold text-tremor-default">Username</p>,
      selector: (row: any) => row.username,
      sortable: true,
    },
    {
      name: <p className="font-semibold text-tremor-default">Email</p>,
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: <p className="font-semibold text-tremor-default">Full name</p>,
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: <p className="font-semibold text-tremor-default">Attachments</p>,
      cell: () => <p>attachments</p>,
      sortable: true,
    },
    // {
    //   name: <p className="font-semibold text-tremor-default">Status</p>,
    //   selector: (row: any) => row.id,
    //   format: (row: any) =>
    //     row.id % 3 !== 0 ? (
    //       <p className="font-bold text-green-500">ACTIVE</p>
    //     ) : (
    //       <p className="font-bold text-red-500">DISABLED</p>
    //     ),
    //   sortable: true,
    //   grow: 0,
    // },
    {
      name: <p className="font-semibold text-tremor-default">Actions</p>,
      cell: (row: any) => (
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="min-w-fit flex flex-row gap-2 bg-green-600 text-white font-semibold rounded-md p-2 hover:bg-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
            </svg>
            Approve
          </div>
          <div className="min-w-fit flex flex-row gap-2 bg-red-600 text-white font-semibold rounded-md p-2 hover:bg-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
            Reject
          </div>
        </div>
      ),
      grow: 1,
    },
  ];

  const handleChange = ({ selectedRows }: { selectedRows: any }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    setSelectedRows(selectedRows);
  };

  return (
    <>
      <NavigationPane selectedList={selectedRows} />
      <div className="flex flex-col">
        <DataTable
          columns={columns}
          data={accountList}
          sortIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
            </svg>
          }
          striped
          highlightOnHover
          pointerOnHover
          selectableRows
          onSelectedRowsChange={handleChange}
          progressPending={isLoading}
          pagination
          paginationPerPage={7}
          paginationComponentOptions={{
            noRowsPerPage: true,
          }}
        />
      </div>
    </>
  );
}

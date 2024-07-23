"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./style.css";
import { Avatar, Image, message, Modal } from "antd";
import ProductInformation from "../timepieces/ProductInformation";
import dateFormat from "@/assistants/date.format";

export default function ContactListTable({
  list,
  getUpdatedStatus,
}: {
  list: any[];
  getUpdatedStatus: Function;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingProductDetails, setIsShowingProductDetails] = useState("");

  const handleAction = async (action: "completed" | "canceled", id: string) => {
    await axios
      .patch(`http://localhost:3000/appointment/${id}`, {
        status: action,
      })
      .then((res) => {
        console.log("Update status: ", res.data);
        getUpdatedStatus("updated");
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      name: (
        <p className="w-min text-center font-semibold text-tremor-default">
          No
        </p>
      ),
      cell: (row: any, index: any) => <p className="w-fit">{index + 1}</p>,
      grow: 0,
    },
    {
      name: (
        <p className="w-full text-center font-semibold text-tremor-default">
          Requester
        </p>
      ),
      cell: (row: any) => {
        return (
          <div className="flex items-center gap-2">
            <Avatar src={row.account.avatar} alt="" size={40} />
            <p>{row.account.username}</p>
          </div>
        );
      },
      grow: 1,
    },
    {
      name: (
        <p className="w-full text-center font-semibold text-tremor-default">
          Product
        </p>
      ),
      cell: (row: any) => {
        return (
          <>
            <div
              onClick={() => setIsShowingProductDetails(row.id)}
              className="flex items-center gap-2 py-2 cursor-pointer hover:underline"
            >
              <Image
                src={row.product?.image}
                alt=""
                width={64}
                className="rounded-full"
                preview={false}
              />
              <p>{row.product?.name}</p>
            </div>
            <ProductInformation
              product={row.product}
              open={isShowingProductDetails === row.id}
              setOpen={setIsShowingProductDetails}
            />
          </>
        );
      },
      grow: 2,
    },
    {
      name: (
        <p className="w-full text-center font-semibold text-tremor-default">
          Scheduled date
        </p>
      ),
      cell: (row: any) => <p className="min-w-fit">{row.date}</p>,
      sortable: true,
      sortFunction: (a: any, b: any) => {
        return a.date.localeCompare(b.date);
      },
      grow: 1,
    },
    {
      name: (
        <p className="w-full text-center font-semibold text-tremor-default">
          Created date
        </p>
      ),
      cell: (row: any) => (
        <p className="">
          {dateFormat(new Date(row.createdAt), "HH:MM dd/mm/yyyy")}
        </p>
      ),
      sortable: true,
      sortFunction: (a: any, b: any) => {
        return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
      },
      grow: 1,
    },
    {
      name: <p className="mx-auto font-semibold text-tremor-default">Status</p>,
      cell: (row: any) => {
        if (row.status === "completed") {
          return (
            <span className="mx-auto w-24 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-center text-white text-nowrap font-semibold">
              COMPLETED
            </span>
          );
        } else if (row.status === "scheduled") {
          return (
            <span className="mx-auto w-24 py-2 rounded-xl bg-gray-500 hover:bg-gray-600 text-center text-white text-nowrap font-semibold">
              PENDING
            </span>
          );
        } else {
          return (
            <span className="mx-auto w-24 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-center text-white text-nowrap font-semibold">
              CANCELED
            </span>
          );
        }
      },
      sortable: true,
      sortFunction: (a: any, b: any) => {
        const ordering: any = { pending: 0, approved: 1, rejected: 2 };
        return (
          ordering[a.status] - ordering[b.status] ||
          new Date(a.updatedAt) < new Date(b.updatedAt)
        );
      },
      grow: 1,
    },
    {
      name: (
        <p className="w-full text-center font-semibold text-tremor-default">
          Actions
        </p>
      ),
      cell: (row: any) => {
        if (row.status !== "scheduled")
          return (
            <p className="w-full text-center font-light">
              ACTION MADE AT {dateFormat(row.updatedAt, "HH:MM dd/mm/yyyy")}
            </p>
          );
        else
          return (
            <div className="w-full flex flex-col gap-2 items-center justify-center py-2">
              <button
                onClick={() => handleAction("completed", row.id)}
                className="w-24 py-2 rounded-xl bg-green-600 hover:bg-green-800 text-white font-semibold text-nowrap"
              >
                Completed
              </button>
              <button
                onClick={() => handleAction("canceled", row.id)}
                className="w-24 py-2 rounded-xl bg-red-600 hover:bg-red-800 text-white font-semibold text-nowrap"
              >
                Canceled
              </button>
            </div>
          );
      },
      grow: 1,
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <DataTable
          responsive={true}
          columns={columns as any}
          data={list}
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
          progressPending={isLoading}
          pagination
          paginationPerPage={10}
          paginationComponentOptions={{
            noRowsPerPage: true,
          }}
          className="overflow-x-hidden"
        />
      </div>
    </>
  );
}

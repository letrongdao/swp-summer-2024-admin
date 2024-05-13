"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  return (
    <div className="inline-block min-h-screen min-w-56 flex flex-col float-left border-r-2 border-black items-start py-4 px-4 gap-4">
      <Link
        href="/"
        className={`flex items-center w-full h-[8vh] text-sm font-bold px-4 rounded-md hover:bg-gray-800 hover:text-white
        ${path === "/" ? "bg-gray-800 text-white" : ""}`}
      >
        Overview
      </Link>
      <div className="w-full border-b border-black my-[-10px]" />
      <Link
        href="/user/accounts"
        className={`flex items-center w-full h-[8vh] text-sm font-bold px-4 rounded-md mb-[-10%] hover:bg-gray-800 hover:text-white
        ${path.match("/user") ? "bg-gray-800 text-white" : ""}`}
      >
        User Management
      </Link>
      <Link
        href="/user/accounts"
        className={`flex items-center w-[92%] h-[6vh] text-xs font-light px-4 my-2 rounded-md ml-4 mb-[-10%] hover:bg-cyan-800 hover:text-white
        ${path === "/user/accounts" ? "bg-cyan-800 text-white" : ""}`}
      >
        All accounts
      </Link>
      <Link
        href="/user/appraisers"
        className={`flex items-center w-[92%] h-[6vh] text-xs font-light px-4 my-2 rounded-md ml-4 mb-[-10%] hover:bg-cyan-800 hover:text-white
        ${path === "/user/appraisers" ? "bg-cyan-800 text-white" : ""}`}
      >
        Appraisers' requests
      </Link>
      <Link
        href="/user/conflicts"
        className={`flex items-center w-[92%] h-[6vh] text-xs font-light px-4 my-2 rounded-md ml-4 mb-[-10%] hover:bg-cyan-800 hover:text-white
        ${path === "/user/conflicts" ? "bg-cyan-800 text-white" : ""}`}
      >
        Conflict resolutions
      </Link>

      <div className="w-full border-b border-black mt-2 mb-[-5%]" />
      <Link
        href="/timepiece"
        className={`flex items-center w-full h-[8vh] text-sm font-bold px-4 rounded-md hover:bg-gray-800 hover:text-white
        ${path === "/timepiece" ? "bg-gray-800 text-white" : ""}`}
      >
        Timepiece Management
      </Link>
      <div className="w-full border-b border-black my-[-5%]" />
      <Link
        href="/transaction"
        className={`flex items-center w-full h-[8vh] text-sm font-bold px-4 rounded-md hover:bg-gray-800 hover:text-white
        ${path === "/transaction" ? "bg-gray-800 text-white" : ""}`}
      >
        Transactions
      </Link>
      <div className="w-full border-b border-black my-[-5%]" />
      <Link
        href="/report"
        className={`flex items-center w-full h-[8vh] text-sm font-bold px-4 rounded-md hover:bg-gray-800 hover:text-white
        ${path === "/report" ? "bg-gray-800 text-white" : ""}`}
      >
        Reports
      </Link>
    </div>
  );
}

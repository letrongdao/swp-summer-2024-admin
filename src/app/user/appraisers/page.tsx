import RequestListTable from "@/components/accounts/RequestListTable";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <RequestListTable />
    </div>
  );
}

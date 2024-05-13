import AccountListTable from "@/components/accounts/AccountListTable";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AccountListTable />
    </div>
  );
}

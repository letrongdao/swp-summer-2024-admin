import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import TimepieceListTable from "@/components/timepieces/TimepieceListTable";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <TimepieceListTable />
    </div>
  );
}

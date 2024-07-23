"use client";
import AppointmentListTable from "@/components/accounts/AppointmentListTable";
import Loading from "@/components/loading/Loading";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAppointmentListData = async () => {
    setIsLoading(true);
    await axios
      .get("http://localhost:3000/appointment")
      .then((res) => {
        let temp = res.data;
        const ordering: any = { scheduled: 0, completed: 1, cancelled: 2 };
        temp.sort(function (a: any, b: any) {
          return (
            ordering[a.status] - ordering[b.status] ||
            new Date(a.updatedAt) < new Date(b.updatedAt)
          );
        });
        setAppointmentList(temp);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAppointmentListData();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AppointmentListTable
        list={appointmentList}
        getUpdatedStatus={async (value: boolean) => {
          if (value) await getAppointmentListData();
        }}
      />
    </div>
  );
}

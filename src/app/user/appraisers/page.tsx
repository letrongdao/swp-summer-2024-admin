"use client";
import AppraiserRequestListTable from "@/components/accounts/AppraiserRequestListTable";
import Loading from "@/components/loading/Loading";
import Navbar from "@/components/navbar/Navbar";
import AppraiserSidebar from "@/components/sidebar/AppraiserSidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [sellerRequestList, setSellerRequestList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRequestListData = async () => {
    setIsLoading(true);
    await axios
      .get("http://localhost:3000/sellerRequest")
      .then((res) => {
        let temp = res.data;
        const ordering: any = { pending: 0, approved: 1, rejected: 1 };
        temp.sort(function (a: any, b: any) {
          return (
            ordering[a.status] - ordering[b.status] ||
            new Date(a.updatedAt) > new Date(b.updatedAt)
          );
        });
        setSellerRequestList(temp);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRequestListData();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div>
      <Navbar />
      <AppraiserSidebar />
      <AppraiserRequestListTable
        list={sellerRequestList}
        getUpdatedStatus={async (value: boolean) => {
          if (value) await getRequestListData();
        }}
      />
    </div>
  );
}

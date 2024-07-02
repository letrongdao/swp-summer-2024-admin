"use client";
import Navbar from "@/components/navbar/Navbar";
import Cards from "@/components/overview/Cards";
import Charts from "@/components/overview/Charts";
import Sidebar from "@/components/sidebar/Sidebar";
import AdminSignInForm from "@/components/overview/AdminSignInForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [signInFormOpen, setSignInFormOpen] = useState(false);
  useEffect(() => {
    const adminSignIn = sessionStorage.adminSignIn;
    if (!adminSignIn) {
      setSignInFormOpen(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <AdminSignInForm modalOpen={signInFormOpen} />
      <Sidebar />
      {signInFormOpen ? null : <Cards />}
      {signInFormOpen ? null : <Charts />}
    </>
  );
}

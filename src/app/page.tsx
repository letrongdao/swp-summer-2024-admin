import Navbar from "@/components/navbar/Navbar";
import Cards from "@/components/overview/Cards";
import Charts from "@/components/overview/Charts";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Cards />
      <Charts />
    </>
  );
}

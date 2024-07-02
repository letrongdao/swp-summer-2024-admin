"use client";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    if (!sessionStorage.adminSignin && !window.location.pathname.match("/")) {
      window.location.replace("/");
    }
  }, []);

  const signOut = () => {
    sessionStorage.removeItem("adminSignIn");
    window.location.replace("/");
  };

  return (
    <div className="w-screen h-16 flex flex-row bg-black justify-between items-center px-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          color="white"
          width="48"
          height="48"
        >
          <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          color="white"
          width="48"
          height="48"
          className="fill-white cursor-pointer hover:fill-gray-400"
          onClick={signOut}
        >
          <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
        </svg>
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";

export default function NavigationPane({
  selectedList,
}: {
  selectedList: any;
}) {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <div className="h-12 flex flex-row justify-between m-1">
      {selectedList.length > 0 ? (
        <div className="flex flex-row items-center gap-4 ml-4">
          <span>Selected</span>
          <span className="font-bold text-md">{selectedList.length}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div></div>
      <div className="flex flex-row items-center justify-center gap-1">
        {selectedList.length > 0 ? (
          <>
            <button className="flex flex-row items-center gap-2 p-2 border border-black bg-green-500 text-white rounded-md hover:bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>
              </svg>
              {path.match("/accounts") ? (
                <>Activate all selected</>
              ) : (
                <>Approve all selected</>
              )}
            </button>
            <button className="flex flex-row items-center gap-2 p-2 border border-black bg-red-500 text-white rounded-md hover:bg-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M7.0943 5.68009L18.3199 16.9057C19.3736 15.5506 20 13.8491 20 12C20 7.58172 16.4183 4 12 4C10.1509 4 8.44939 4.62644 7.0943 5.68009ZM16.9057 18.3199L5.68009 7.0943C4.62644 8.44939 4 10.1509 4 12C4 16.4183 7.58172 20 12 20C13.8491 20 15.5506 19.3736 16.9057 18.3199ZM4.92893 4.92893C6.73748 3.12038 9.23885 2 12 2C17.5228 2 22 6.47715 22 12C22 14.7611 20.8796 17.2625 19.0711 19.0711C17.2625 20.8796 14.7611 22 12 22C6.47715 22 2 17.5228 2 12C2 9.23885 3.12038 6.73748 4.92893 4.92893Z"></path>
              </svg>
              {path.match("/accounts") ? (
                <>Disable all selected</>
              ) : (
                <>Reject all selected</>
              )}
            </button>
          </>
        ) : null}
        <button className="min-w-fit flex items-center gap-2 bg-slate-500 text-white p-2 rounded-md border border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
          </svg>
          Refresh
        </button>
        <button className="min-w-fit flex items-center gap-2 bg-cyan-600 text-white p-2 rounded-md border border-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
          </svg>
          Create a new account
        </button>
      </div>
    </div>
  );
}

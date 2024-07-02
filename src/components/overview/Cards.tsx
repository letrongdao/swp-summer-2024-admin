"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@tremor/react";
import axios from "axios";

export default function Cards() {
  const [totalAccount, setTotalAccount] = useState(0);
  const [isShowingMore, setIsShowingMore] = useState(false);

  const getAccountData = async () => {
    await axios
      .get("http://localhost:3000/auth/accounts")
      .then((res) => {
        console.log(res.data);
        setTotalAccount(res.data.length);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAccountData();
  }, []);

  const showStatistics = () => {
    setIsShowingMore(!isShowingMore);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center w-full">
          <Card
            className="m-2 max-w-md min-w-fit inline-block cursor-pointer"
            decoration="top"
            decorationColor="cyan"
            onClick={() => getAccountData()}
          >
            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Total account
            </h4>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {totalAccount}
            </p>
          </Card>
          <Card
            className="m-2 max-w-md min-w-fit !bg-lime-950 inline-block"
            decoration="top"
            decorationColor="green"
          >
            <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Total income earned
            </h4>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              384,168,246 $
            </p>
          </Card>
          <Card
            className="w-[50%] m-2 max-w-md min-w-fit inline-block !bg-purple-950"
            decoration="top"
            decorationColor="indigo"
          >
            <h4 className="min-w-fit text-tremor-default dark:text-dark-tremor-content">
              Total remaining timepiece
            </h4>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              67
            </p>
          </Card>
          <Card
            className="w-[50%] m-2 max-w-md min-w-fit inline-block !bg-rose-950"
            decoration="top"
            decorationColor="orange"
          >
            <h4 className="text-tremor-default dark:text-dark-tremor-content">
              Total transaction made
            </h4>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              139
            </p>
          </Card>
        </div>
        {isShowingMore ? (
          <div className="flex flex-row items-center justify-center w-full">
            <Card
              className="m-2 max-w-md inline-block !bg-white"
              decoration="top"
              decorationColor="yellow"
            >
              <h4 className="text-tremor-default !text-black dark:text-dark-tremor-content">
                Total account
              </h4>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong !text-black dark:text-dark-tremor-content-strong">
                259
              </p>
            </Card>
            <Card
              className="m-2 max-w-md inline-block !bg-white"
              decoration="top"
              decorationColor="yellow"
            >
              <h4 className="text-tremor-default !text-black dark:text-dark-tremor-content">
                Total account
              </h4>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong !text-black dark:text-dark-tremor-content-strong">
                259
              </p>
            </Card>
            <Card
              className="m-2 max-w-md inline-block !bg-white"
              decoration="top"
              decorationColor="yellow"
            >
              <h4 className="text-tremor-default !text-black dark:text-dark-tremor-content">
                Total account
              </h4>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong !text-black dark:text-dark-tremor-content-strong">
                259
              </p>
            </Card>
            <Card
              className="m-2 max-w-md inline-block !bg-white"
              decoration="top"
              decorationColor="yellow"
            >
              <h4 className="text-tremor-default !text-black dark:text-dark-tremor-content">
                Total account
              </h4>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong !text-black dark:text-dark-tremor-content-strong">
                259
              </p>
            </Card>
            <Card
              className="m-2 max-w-md inline-block !bg-white"
              decoration="top"
              decorationColor="yellow"
            >
              <h4 className="text-tremor-default !text-black dark:text-dark-tremor-content">
                Total account
              </h4>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong !text-black dark:text-dark-tremor-content-strong">
                259
              </p>
            </Card>
            <Card
              className="m-2 max-w-md inline-block !bg-white"
              decoration="top"
              decorationColor="yellow"
            >
              <h4 className="text-tremor-default !text-black dark:text-dark-tremor-content">
                Total account
              </h4>
              <p className="text-tremor-metric font-semibold text-tremor-content-strong !text-black dark:text-dark-tremor-content-strong">
                259
              </p>
            </Card>
          </div>
        ) : null}
      </div>

      <button
        onClick={showStatistics}
        className="flex flex-row items-center gap-1 absolute text-xs right-0 font-light hover:font-medium"
      >
        {isShowingMore ? (
          <>Show less</>
        ) : (
          <>
            Show more statistics
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="currentColor"
              className="inline-block"
            >
              <path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM3 12.5L7 9V16L3 12.5Z"></path>
            </svg>
          </>
        )}
      </button>
    </>
  );
}

"use client";
import React from "react";
import { BarChart, LineChart } from "@tremor/react";

export default function Charts() {
  const barChartData = [
    {
      name: "Amphibians",
      "Number of timepieces sold": 10,
    },
    {
      name: "Birds",
      "Number of timepieces sold": 24,
    },
    {
      name: "Crustaceans",
      "Number of timepieces sold": 17,
    },
    {
      name: "Ferns",
      "Number of timepieces sold": 14,
    },
    {
      name: "Arachnids",
      "Number of timepieces sold": 9,
    },
    {
      name: "Corals",
      "Number of timepieces sold": 13,
    },
    {
      name: "Algae",
      "Number of timepieces sold": 11,
    },
  ];
  const lineChartData = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
    {
      date: "Jul 22",
      SemiAnalysis: 3490,
      "The Pragmatic Engineer": 1982,
    },
    {
      date: "Aug 22",
      SemiAnalysis: 2903,
      "The Pragmatic Engineer": 2012,
    },
    {
      date: "Sep 22",
      SemiAnalysis: 2643,
      "The Pragmatic Engineer": 2342,
    },
    {
      date: "Oct 22",
      SemiAnalysis: 2837,
      "The Pragmatic Engineer": 2473,
    },
    {
      date: "Nov 22",
      SemiAnalysis: 2954,
      "The Pragmatic Engineer": 3848,
    },
    {
      date: "Dec 22",
      SemiAnalysis: 3239,
      "The Pragmatic Engineer": 3736,
    },
  ];

  const dataFormatter = (number: number) => {
    return Intl.NumberFormat("us").format(number).toString();
  };

  const valueFormatter = function (number: number) {
    return "$ " + new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div className="flex flex-row items-center justify-center gap-16 px-8 mt-8">
      <div className="min-w-[40%]">
        <h3 className="text-lg font-medium">Number of timepieces sold in</h3>
        <BarChart
          className="mt-6"
          data={barChartData}
          index="name"
          categories={["Number of timepieces sold"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          yAxisWidth={65}
        />
      </div>
      <div className="min-w-[40%]">
        <h3 className="text-lg font-medium">
          Newsletter revenue over time (USD)
        </h3>
        <LineChart
          className="mt-4 h-72"
          data={lineChartData}
          index="date"
          yAxisWidth={65}
          categories={["SemiAnalysis", "The Pragmatic Engineer"]}
          colors={["red", "cyan"]}
          valueFormatter={valueFormatter}
        />
      </div>
    </div>
  );
}

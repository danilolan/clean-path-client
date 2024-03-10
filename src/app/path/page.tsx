"use client";

import Plotly from "plotly.js-dist-min";
import { useEffect } from "react";
import { Customer } from "../list/page";
import { Divider } from "@mui/material";

const data = [
  {
    name: "Customer 1",
    email: "customer1@example.com",
    phone: "12345678901",
    position: { x: 120, y: 85 },
  },
  {
    name: "Customer 2",
    email: "customer2@example.com",
    phone: "12345678902",
    position: { x: 200, y: 150 },
  },
  {
    name: "Customer 3",
    email: "customer3@example.com",
    phone: "12345678903",
    position: { x: 300, y: 215 },
  },
  {
    name: "Customer 4",
    email: "customer4@example.com",
    phone: "12345678904",
    position: { x: 400, y: 280 },
  },
  {
    name: "Customer 5",
    email: "customer5@example.com",
    phone: "12345678905",
    position: { x: 500, y: 345 },
  },
  {
    name: "Customer 6",
    email: "customer6@example.com",
    phone: "12345678906",
    position: { x: 600, y: 410 },
  },
  {
    name: "Customer 7",
    email: "customer7@example.com",
    phone: "12345678907",
    position: { x: 700, y: 475 },
  },
  {
    name: "Customer 8",
    email: "customer8@example.com",
    phone: "12345678908",
    position: { x: 800, y: 540 },
  },
  {
    name: "Customer 9",
    email: "customer9@example.com",
    phone: "12345678909",
    position: { x: 900, y: 605 },
  },
  {
    name: "Customer 10",
    email: "customer10@example.com",
    phone: "12345678910",
    position: { x: 1000, y: 670 },
  },
  {
    name: "Customer 11",
    email: "customer11@example.com",
    phone: "12345678911",
    position: { x: 110, y: 735 },
  },
  {
    name: "Customer 12",
    email: "customer12@example.com",
    phone: "12345678912",
    position: { x: 220, y: 800 },
  },
  {
    name: "Customer 13",
    email: "customer13@example.com",
    phone: "12345678913",
    position: { x: 330, y: 865 },
  },
  {
    name: "Customer 14",
    email: "customer14@example.com",
    phone: "12345678914",
    position: { x: 440, y: 930 },
  },
  {
    name: "Customer 15",
    email: "customer15@example.com",
    phone: "12345678915",
    position: { x: 550, y: 995 },
  },
  {
    name: "Customer 16",
    email: "customer16@example.com",
    phone: "12345678916",
    position: { x: 660, y: 1060 },
  },
  {
    name: "Customer 17",
    email: "customer17@example.com",
    phone: "12345678917",
    position: { x: 770, y: 1125 },
  },
  {
    name: "Customer 18",
    email: "customer18@example.com",
    phone: "12345678918",
    position: { x: 880, y: 1190 },
  },
  {
    name: "Customer 19",
    email: "customer19@example.com",
    phone: "12345678919",
    position: { x: 990, y: 1255 },
  },
  {
    name: "Customer 20",
    email: "customer20@example.com",
    phone: "12345678920",
    position: { x: 100, y: 1320 },
  },
];

function customersToPath(data: Customer[]): Plotly.Data {
  const x: number[] = [];
  const y: number[] = [];
  const text: string[] = [];

  data.forEach((customer) => {
    x.push(customer.position.x);
    y.push(customer.position.y);
    text.push(customer.name);
  });

  return {
    x,
    y,
    text,
    type: "scatter",
    mode: "lines+markers",
  };
}

export default function Path() {
  useEffect(() => {
    Plotly.newPlot("myDiv", [customersToPath(data)]);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="p-8 bg-white rounded shadow w-full">
        <h2 className="font-medium text-3xl text-primary text-center">
          Best path
        </h2>
        <Divider sx={{ marginY: "12px" }} />
        <div className="flex flex-wrap gap-4 text-darkGrey">
          {data.map((customer, index) => (
            <div className="flex items-center gap-4" key={customer.name}>
              <p className="font-normal">{customer.name}</p>
              <span className="font-black text-primary">
                {index + 1 != data.length && ">"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 bg-white rounded shadow w-full">
        <div id="myDiv" className="w-full"></div>
      </div>
    </div>
  );
}

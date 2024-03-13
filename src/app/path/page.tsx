"use client";

import Plotly from "plotly.js-dist-min";
import { useEffect } from "react";
import { Customer } from "../list/page";
import { CircularProgress, Divider } from "@mui/material";
import useSWR from "swr";
import { PathDto } from "@/types/dtos";
import { toast } from "react-toastify";

function pointsToPloty(points: PathDto): Plotly.Data {
  const x: number[] = [];
  const y: number[] = [];
  const text: string[] = [];

  points.forEach((point) => {
    x.push(point.position.x);
    y.push(point.position.y);
    text.push(point.name);
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
  const { data, error, isLoading } = useSWR<PathDto>(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/path`,
    (url: string | URL | Request) => fetch(url).then((r) => r.json())
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    Plotly.newPlot("myDiv", [pointsToPloty(data)]);
  }, [data]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-8">
      {isLoading ? (
        <div className="p-8 bg-white rounded shadow w-full">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="p-8 bg-white rounded shadow w-full">
            <h2 className="font-medium text-3xl text-primary text-center">
              Best path
            </h2>
            <Divider sx={{ marginY: "12px" }} />
            <div className="flex flex-wrap gap-4 text-darkGrey">
              {data?.map((point, index) => (
                <div className="flex items-center gap-4" key={point.name}>
                  <p className="font-normal">{point.name}</p>
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
        </>
      )}
    </div>
  );
}

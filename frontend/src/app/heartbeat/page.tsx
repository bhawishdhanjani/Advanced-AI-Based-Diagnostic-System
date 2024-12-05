"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const page = () => {
  const [video, setVideo] = useState(null);
  const [result, setResult] = useState<number>(0);

  const handleFileChange = (event: any) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (video) {
      const formData = new FormData();
      formData.append("file", video);
      const response = await fetch("http://127.0.0.1:8000/heartbeat/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setResult(data.average_heartbeat as number);
      } else {
        console.error(data.error);
      }
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center absolute top-0">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input type="file" onChange={handleFileChange} />
          <Button type="submit" color="secondary">
            Check Heartbeat
          </Button>
          <div
            className={`
            ${result === 0 ? `hidden` : `block`} 
              px-4 py-1 font-extrabold text-l text-center text-white hover:bg-opacity-100 cursor-pointer rounded-lg border-3 bg-opacity-30 `}
          >
            {"Your heart beat is "}{" "}
            {<span className="text-green-500">{Math.floor(result)}</span>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;

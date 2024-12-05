"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const SkinCancerPage = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (event: any) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      const response = await fetch("/api/uploadimage", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setResult(data.result);
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
            Check
          </Button>
          <div
            className={`
            ${result === "" ? `hidden` : `block`} 
              px-4 py-1 font-extrabold text-xl text-center text-white hover:bg-opacity-100 cursor-pointer rounded-lg border-3 bg-opacity-30 `}
          >
            {result.toUpperCase()}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SkinCancerPage;

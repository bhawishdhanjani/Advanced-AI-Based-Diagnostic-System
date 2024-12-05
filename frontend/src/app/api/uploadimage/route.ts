// pages/api/uploadImage.js
import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { log } from "console";
import axios from "axios";
import { url } from "inspector";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "djzhzguof",
  api_key: "588788193988655",
  api_secret: "0Q0wooqFvssLDKAT5RmpF0kxgt0",
});

export async function POST(req: NextRequest) {
  const data = await req.formData(); // Ensure you're sending the image file correctly
  const file: File | null = data.get("file") as unknown as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const result: { url: string } = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (error, result: any) {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      })
      .end(buffer);
  });
  console.log(result);
  // Here you put url you get from
  const detections = await axios.post(
    "https://56f5-34-46-96-38.ngrok-free.app/predict",
    {
      url: result.url,
    }
  );

  return NextResponse.json(
    { result: detections.data.detections },
    { status: 200 }
  );
}

// export function POST(req: NextApiRequest, res: NextApiResponse) {
//   return res.status(200).json({
//     message: "Hello",
//   });

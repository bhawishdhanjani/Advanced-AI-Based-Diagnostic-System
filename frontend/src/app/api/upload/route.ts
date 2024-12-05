import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest) {
  const res = NextResponse.json({ message: "Your message" });
  return res;
}

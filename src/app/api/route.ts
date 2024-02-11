import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  // addWatermarkToImage(imageUrl, watermarkImageUrl, outputPath);
  return NextResponse.json({ message: "Hi" });
}

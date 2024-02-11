import sharp from "sharp";
import axios from "axios";
import { NextResponse } from "next/server";

async function addWatermarkToImage(
  imageUrl: string,
  watermarkImageUrl: string,
) {
  try {
    // Download the image from the URL
    const response = await axios.get(
      imageUrl.startsWith("/")
        ? `${process.env.FRONTEND_URL}${imageUrl}`
        : imageUrl,
      { responseType: "arraybuffer" },
    );
    const imageBuffer = Buffer.from(response.data);

    // Download the watermark image from the URL
    const watermarkResponse = await axios.get(
      watermarkImageUrl.startsWith("/")
        ? `${process.env.FRONTEND_URL}${watermarkImageUrl}`
        : watermarkImageUrl,
      {
        responseType: "arraybuffer",
      },
    );
    const watermarkBuffer = Buffer.from(watermarkResponse.data);

    // Load the image using sharp
    const image = sharp(imageBuffer);

    // Get image dimensions
    const { width } = await image.metadata();

    // Resize the watermark to fit a reasonable size on the image
    const resizedWatermark = sharp(watermarkBuffer).resize({
      width: Math.floor(width / 4),
    });

    // Add the watermark to the image
    const watermarkedImageBuffer = await image
      .composite([
        { input: await resizedWatermark.toBuffer(), gravity: "southeast" },
      ])
      .toBuffer();

    return watermarkedImageBuffer;
  } catch (error) {
    console.error("Error processing image:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const body: any = await req.json();
    const watermarkedImageBuffer = await addWatermarkToImage(
      body.imageUrl,
      body.watermarkImageUrl,
    );

    // Send the watermarked image as the response
    return NextResponse.json({
      url:
        "data:image/jpeg;base64," + watermarkedImageBuffer.toString("base64"),
    });
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Internal Error");
  }
}

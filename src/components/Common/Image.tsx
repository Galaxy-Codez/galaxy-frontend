"use client";
import axios from "axios";
import type { ImageProps } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useState } from "react";

const LazyImage = (props: ImageProps & { watermark?: boolean }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (props.watermark) {
      (async () => {
        const { data } = await axios.post("/api/watermark", {
          imageUrl: props.src,
          watermarkImageUrl: props.src,
        });
        setSrc(data.url);
      })();
    } else {
      setSrc(props.src as string);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (!src) return;
  return (
    <Image
      {...props}
      className={props.className + " h-auto"}
      src={src}
      decoding="async"
      width={400}
      height={400}
      data-ll-status="loaded"
      data-lazy-src={src}
      loading="lazy"
      fetchPriority="high"
      alt={props.alt}
    />
  );
};

export default LazyImage;

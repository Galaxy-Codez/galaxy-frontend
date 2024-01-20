import React, { useState, useEffect, useRef } from "react";

const LazyVideo = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement>) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
      {load ? <video {...props} /> : <div>Loading...</div>}
    </div>
  );
};

export default LazyVideo;

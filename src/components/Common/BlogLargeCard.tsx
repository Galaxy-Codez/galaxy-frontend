import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface BlogLargeCard {
  image: string;
  CardTitle: string;
  CardDescription: string;
  slug: string;
  last?: boolean;
  total?: number;
  setSkip: Dispatch<SetStateAction<number>>;
}

const BlogLargeCard = ({
  image,
  CardTitle,
  CardDescription,
  slug,
  last,
  setSkip,
  total,
}: BlogLargeCard) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkip(total);
        observer.disconnect();
      }
    });

    if (last) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(videoRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={videoRef} className="w-full px-4">
        <div className="mb-10 w-full">
          <Link href={slug} className="overflow-hidden rounded">
            <Image
              loading="lazy"
              width={1920}
              height={400}
              src={image}
              alt={CardTitle}
              className="h-[400px] w-full object-contain object-center"
              style={{
                background: "linear-gradient(to top,#000 0,#2693fa 123%)",
              }}
            />
          </Link>
          <div className="mt-8">
            <h3>
              <Link
                href={slug}
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </Link>
            </h3>
            <p className="mb-4 text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
            <Link
              href={slug}
              className="font-semibold text-primaryBlue hover:text-app-orange"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLargeCard;

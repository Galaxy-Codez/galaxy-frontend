import Link from "next/link";
import LazyImage from "./Image";

interface BlogSmallCard {
  image: string;
  CardTitle: string;
  CardDescription: string;
  slug: string;
}

const BlogSmallCard = ({
  image,
  CardTitle,
  CardDescription,
  slug,
}: BlogSmallCard) => {
  return (
    <>
      <div className="w-full">
        <div className="flex w-full gap-2">
          <Link href={slug} className="w-[150px] overflow-hidden rounded">
            <LazyImage
              src={image}
              alt={CardTitle}
              className="h-auto min-h-[4rem] w-full object-cover"
            />
          </Link>
          <div className="w-full overflow-hidden">
            <Link
              href={slug}
              className="inline-block overflow-hidden truncate text-sm font-semibold text-dark hover:text-primary dark:text-white sm:text-lg lg:text-sm xl:text-lg"
            >
              {CardTitle}
            </Link>
            <p className="line-clamp-1 text-sm text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSmallCard;

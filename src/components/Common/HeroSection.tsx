import Link from "next/link";

interface HeroSectionProps {
  title?: string;
  description?: string;
  getStartedLink?: string;
}

const HeroSection = ({
  title,
  description,
  getStartedLink,
}: HeroSectionProps) => {
  return (
    <section
      className="h-full min-h-screen bg-white py-20 lg:py-[110px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(0,61,119,0.75) 0%,rgba(38,147,250,0.75) 100%),url(https://www.ropstam.com/wp-content/uploads/2023/05/blog-header-ropstam-solutions-scaled-1.webp)!important",
      }}
    >
      <div className="container h-full px-32">
        <div className="flex h-full min-h-[80vh] flex-col justify-center max-lg:items-center">
          <h1 className="font-['Inter'] text-3xl font-bold lg:text-6xl ">
            {title}
          </h1>
          <p className="my-4 font-['Inter'] text-base font-bold max-lg:text-center lg:max-w-[40vw]">
            {description}
          </p>
          <Link href={getStartedLink} className="hover:bg-app-orange border-2 px-6 py-2 font-medium text-white w-fit rounded-lg border-white hover:border-app-orange">Let&apos;s Get Started</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

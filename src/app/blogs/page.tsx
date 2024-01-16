import HeroSection from "@/components/Common/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

const ErrorPage = () => {
  return (
    <>
      <HeroSection
        title="Blog"
        description={`With over a decade of experience in software development, we bring a wealth of knowledge and expertise to the table. At Ropstam, we believe in sharing our skills and insights with our clients and the wider community to drive growth and success.`}
        getStartedLink="#"
      />
    </>
  );
};

export default ErrorPage;

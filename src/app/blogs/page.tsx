import BlogSections from "@/components/Blogs/BlogSections";
import HeroSection from "@/components/Common/HeroSection";
import Contact from "@/components/Contact";
import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  Metadata,
} from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: `Explore the digital frontier with GalaxyCodez's blog page, your go-to destination for a treasure trove of insights from a leading software house. Delve into our thought-provoking articles, expert opinions, and industry updates as we navigate the ever-evolving landscape of software development. Stay ahead of the curve with the latest trends, best practices, and innovative solutions. Join GalaxyCodez on this immersive journey through the realm of software expertise and discover the power of informed coding.`,
  keywords:
    "Software house, Technology trends, Coding insights, Developer community, Software solutions, Code tutorials, Programming tips, Web development, App development, Tech industry news, Coding best practices, Software engineering, IT consultancy, Code optimization, GalaxyCodez updates, Mobile app development, UI/UX design, System architecture, Software maintenance, Agile development",
};
const BlogsPage = () => {
  return (
    <>
      <HeroSection
        title={"Blog"}
        description={`With over a decade of experience in software development, we bring a wealth of knowledge and expertise to the table. At Ropstam, we believe in sharing our skills and insights with our clients and the wider community to drive growth and success.`}
        getStartedLink="#"
        bannerImage="/images/banners/blogs-banner.webp"
      />
      <BlogSections />
      <Contact />
    </>
  );
};

export default BlogsPage;

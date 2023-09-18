import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
// import FeaturedProject from "@/components/FeaturedProject";
import Contacts from "@/components/Contacts";
import Brands from "@/components/Brands";
import FeaturedProject from "@/components/FeatureProject";
const Page = async () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedProject />
      <Contacts />
      <Brands />
    </div>
  );
};
export default Page;

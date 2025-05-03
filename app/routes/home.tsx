import {
  Hero,
  AboutOverview,
  Services,
  Approach,
  LatestBlog,
  Testimonials,
} from "~/components/views/home";
import { BLOGS } from "~/utils/constant";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <AboutOverview />
      <Services />
      <Approach />
      <LatestBlog blogs={BLOGS.slice(0, 3)} />
      <Testimonials />
    </div>
  );
}

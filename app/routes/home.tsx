import Cta from "~/components/views/cta";
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
      <Services description="Discover the key ways we can partner to unlock your potential, gain strategic clarity, and engineer exponential growth for you." />
      <Approach description="My signature methodology fuses diverse disciplines to create deep, lasting change and elevate your performance and impact significantly." />
      <LatestBlog blogs={BLOGS.slice(0, 3)} />
      <Testimonials />
      <Cta variant="secondary" />
    </div>
  );
}

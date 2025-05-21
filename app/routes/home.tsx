import Cta from "~/components/views/cta";
import Hero from "~/components/views/home/hero";
import AboutOverview from "~/components/views/home/about-overview";
import Approach from "~/components/views/home/approach";
import Services from "~/components/views/home/services";
import LatestBlog from "~/components/views/home/lastest-blog";
import Testimonials from "~/components/views/home/testimonials";
import { BLOGS } from "~/utils/constant";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <AboutOverview />
      <Services description="Discover the key ways we can partner to unlock your potential, gain strategic clarity, and engineer exponential growth for you." />
      <Approach description="My signature methodology helps high-growth individuals reconnect with their true self, unlock clarity, alignment, and authentic impact from the inside out." />
      <LatestBlog blogs={BLOGS.slice(0, 3)} />
      <Testimonials />
      <Cta />
    </div>
  );
}

import Cta from "~/components/views/cta";
import Services from "~/components/views/home/services";
import Testimonials from "~/components/views/home/testimonials";
import AboutHero from "~/components/views/about/about-hero";
import Banner from "~/components/views/about/banner";
import MyMission from "~/components/views/about/my-mission";

export default function About() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <Banner />
      <MyMission />
      <Services title={<></>} heading="My Key Offerings" />
      <Testimonials
        withBg={false}
        title={<></>}
        heading="Hear from my Clients"
        className="md:py-24 py-[72px] bg-brand-primary/80 text-brand-white"
      />
      <Cta />
    </div>
  );
}

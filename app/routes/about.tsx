import Cta from "~/components/views/cta";
import Services from "~/components/views/home/services";
import Testimonials from "~/components/views/home/testimonials";
import { AboutHero, Banner, MyMission } from "~/components/views/about";

export default function About() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <Banner />
      <MyMission />
      <Services title={<></>} heading="My Key Offerings" />
      <Testimonials
        withBg={false}
        bgFileName="wavy-red"
        title={<></>}
        heading="Hear from my Clients"
        className="bg-brand-secondary/80 text-brand-white md:py-24 py-[72px]"
      />
      <Cta />
    </div>
  );
}

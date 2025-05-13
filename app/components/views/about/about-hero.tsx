import { Animate } from "~/components/common";
import { Button } from "~/components/form";

export default function AboutHero() {
  return (
    <div className="w-full md:px-[5%] px-6 md:py-24 py-[72px] flex justify-center items-center">
      <div className="w-full max-w-9xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:gap-12 gap-8 overflow-hidden">
        <Animate
          animation="fade-right"
          className="w-full flex flex-col gap-2 max-w-xl"
        >
          <h3 className="title text-brand-primary">Meet Your Catalyst</h3>
          <h1 className="font-crimson font-light lg:text-7xl md:text-6xl xs:text-5xl text-[40px] leading-[1]">
            Architect of <br /> Transformation
          </h1>
          <Button className="py-3.5 px-5 mt-6">Work with Eduwa</Button>
        </Animate>

        <Animate
          animation="fade-left"
          className="w-full flex flex-col max-w-3xl gap-4 lg:text-2xl md:text-xl text-lg leading-[1.5]"
        >
          <p>
            Eduwa Osa is the catalyst for profound, lasting
            transformation—partnering with high achievers, visionary leaders,
            and forward-thinking organizations to unlock their deepest
            potential, master their internal and external dynamics, and scale
            their outcomes exponentially.
          </p>
          <p>
            Her work goes beyond conventional growth strategies—it is a science
            and art of deep transformation, integrating five core
            disciplines—Philosophy, Psychology, Spirituality, Neuroscience, and
            High-Performance Strategy—to help both individuals and organizations
            break internal barriers, realign with their original design, and
            drive sustainable, exponential impact.
          </p>
        </Animate>
      </div>
    </div>
  );
}

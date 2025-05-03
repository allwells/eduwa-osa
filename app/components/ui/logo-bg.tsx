import Animate from "~/components/common/animate";

export default function LogoBackground() {
  return (
    <Animate
      animation="zoom-in"
      className="absolute -z-[1] h-full w-full flex justify-center items-center inset-0 m-auto"
    >
      {/* <div className="w-full h-full bg-[url('/images/logo.png')] bg-repeat bg-center bg-contain saturate-0 invert contrast-200 opacity-10" /> */}

      <img
        loading="lazy"
        src="/images/logo.png"
        className="h-full w-auto object-center object-contain saturate-0 invert contrast-200 opacity-10"
      />
    </Animate>
  );
}

import BrandLogo from "~/components/layout/logo";
import { LayoutBackground } from "~/routes/layout";

export default function PageLoader() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen relative isolate">
      <LayoutBackground />
      <div
        style={{ animationDuration: "0.5s" }}
        className="w-24 h-24 shrink-0 rounded-full border-y-2 border-brand-primary animate-spin"
      />
      <BrandLogo className="absolute animate-pulse" />
    </div>
  );
}

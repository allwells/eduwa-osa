import { useState } from "react";
import Cta from "~/components/views/cta";
import { BLOGS } from "~/utils/constant";
import Button from "~/components/form/button";
import Animate from "~/components/common/animate";
import BlogCard from "~/components/views/blog/blog-card";
import SvgSectionBreaker from "~/components/ui/svg-section-breaker";

const INITIAL_VISIBLE_BLOGS_COUNT = 10;

export default function Blog() {
  const blogs = BLOGS;
  const [visibleBlogsCount, setVisibleBlogsCount] = useState<number>(
    INITIAL_VISIBLE_BLOGS_COUNT
  );

  const currentlyVisibleBlogs = blogs.slice(0, visibleBlogsCount);

  const handleShowMore = () => {
    setVisibleBlogsCount((prevCount) => prevCount + 4);
  };

  const allBlogsShown = visibleBlogsCount >= blogs.length;

  return (
    <div className="w-full flex flex-col">
      <div className="w-full md:px-[5%] px-8 md:py-32 py-24 flex flex-col items-center justify-center">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center md:gap-32 gap-20">
          <div className="w-full flex flex-col items-center justify-center gap-2 text-center">
            <Animate
              as="h1"
              className="font-crimson font-medium lg:text-7xl md:text-6xl xs:text-5xl text-[40px] leading-[1]"
            >
              Catalyst Codex
            </Animate>

            <Animate
              as="h1"
              staggerIndex={1}
              className="description text-brand-grey-2 w-full max-w-xl"
            >
              Actionable insights for visionaries and leaders seeking profound
              transformation and exponential growth.
            </Animate>
          </div>

          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4">
            {currentlyVisibleBlogs.map((blog, index) => (
              <Animate
                key={blog.id}
                staggerIndex={index}
                className="lg:last-of-type:flex md:last-of-type:hidden last-of-type:flex"
              >
                <BlogCard {...blog} />
              </Animate>
            ))}
          </div>

          {!allBlogsShown && (
            <Animate className="w-full flex flex-col gap-6 justify-center items-center">
              <Button onClick={handleShowMore}>Load More</Button>
            </Animate>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <SvgSectionBreaker
          filename="arc-white"
          className="-scale-x-100 -mb-1"
        />
        <Cta variant="white" />
      </div>
    </div>
  );
}

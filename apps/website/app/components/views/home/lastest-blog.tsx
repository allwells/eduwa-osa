import type { Blog } from "~/types";
import Button from "~/components/form/button";
import Animate from "~/components/common/animate";
import { IconArrowRight } from "@tabler/icons-react";
import BlogCard from "~/components/views/blog/blog-card";

interface LatestBlogProps {
  blogs: Blog[];
}

export default function LastestBlog({ blogs }: LatestBlogProps) {
  return (
    <div className="w-full md:px-[5%] px-6 py-24 flex justify-center relative overflow-hidden isolate">
      <div className="w-full max-w-9xl flex flex-col items-start md:gap-[72px] gap-12">
        <div className="w-full flex justify-between items-end">
          <div className="flex flex-col items-start">
            <Animate as="h3" className="title text-brand-primary">
              Elevate your thinking
            </Animate>
            <Animate as="h2" staggerIndex={1} className="heading">
              Insights from <br className="md:block hidden" /> Catalyst Codex
            </Animate>
          </div>

          <Animate staggerIndex={2} className="w-fit h-fit shrink-0">
            <Button to="/blog" className="md:flex hidden">
              Explore More
              <IconArrowRight className="w-6 h-6 md:stroke-[1.5] shrink-0" />
            </Button>
          </Animate>
        </div>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4">
          {blogs.map((blog, index) => (
            <Animate
              key={blog.id}
              staggerIndex={index}
              className="lg:last-of-type:flex md:last-of-type:hidden last-of-type:flex"
            >
              <BlogCard {...blog} />
            </Animate>
          ))}
        </div>

        <Animate className="w-full flex justify-center items-center">
          <Button to="/blog" className="md:hidden py-4 px-6">
            Explore More
            <IconArrowRight className="w-5 h-5 md:stroke-[1.5] shrink-0" />
          </Button>
        </Animate>
      </div>
    </div>
  );
}

import type { Blog } from "~/types";
import { Link } from "react-router";
import Image from "~/components/ui/image";
import Badge from "~/components/ui/badge";
import { toLongDate } from "~/utils/helpers";
import { LayoutBackground } from "~/routes/layout";

export default function BlogCard(blog: Blog) {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="w-full h-fit flex justify-center items-center rounded group isolate overflow-hidden relative"
    >
      <Image
        src={blog.cover}
        alt={blog.title}
        className="absolute inset-0 scale-none group-hover:scale-110 transition-transform duration-500 -z-[1]"
      />

      <div className="w-full h-[460px] aspect-[360/460] bg-brand-black/30 flex flex-col justify-end items-center xl:p-6 lg:p-4 sm:p-6 p-4">
        <div className="w-full h-fit bg-brand-black xl:px-6 xl:pt-6 xl:pb-4 lg:px-4 lg:pb-4 lg:pt-8 sm:p-6 px-4 pb-4 pt-8 flex flex-col gap-2 rounded relative isolate overflow-hidden">
          <LayoutBackground />

          <Badge>{blog.category.title}</Badge>

          <h2 className="xl:text-2xl lg:text-xl sm:text-3xl text-2xl leading-[1.2] font-crimson font-medium mt-2 tracking-tight">
            {blog.title}
          </h2>

          <div className="w-full h-0 my-2 border-b border-brand-grey-1/40" />

          <span className="text-sm text-brand-grey-2 uppercase">
            {toLongDate(blog.publishedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}

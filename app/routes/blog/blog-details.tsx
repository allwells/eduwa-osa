import type { Blog } from "~/types";
import Cta from "~/components/views/cta";
import CustomImage from "~/components/ui/custom-image";
import { BLOGS } from "~/utils/constant";
import { useLoaderData } from "react-router";
import Badge from "~/components/ui/badge";
import { toLongDate } from "~/utils/helpers";
import Button from "~/components/form/button";
import Animate from "~/components/common/animate";
import { IconArrowRight } from "@tabler/icons-react";
import BlogCard from "~/components/views/blog/blog-card";
import SvgSectionBreaker from "~/components/ui/svg-section-breaker";

interface LoaderOutputProps {
  blog: Blog;
  relatedBlogs: Blog[];
}

export async function loader({
  params,
}: {
  params: { slug: string };
}): Promise<LoaderOutputProps> {
  const { slug } = params;

  if (!slug) {
    throw new Error("Slug is missing from params.");
  }

  // Fetch the blog details
  const blog = BLOGS.find((blog) => blog.slug === slug);

  if (!blog) {
    throw new Error("Blog not found.");
  }

  const relatedBlogs = BLOGS.filter((blog) => blog.slug !== slug).slice(0, 3);

  return { blog, relatedBlogs };
}

export default function BlogDetails() {
  const { blog, relatedBlogs } = useLoaderData<LoaderOutputProps>();

  return (
    <div className="w-full flex flex-col">
      <div className="w-full md:px-[5%] px-8 md:py-32 py-24 flex flex-col items-center justify-center">
        <div className="w-full max-w-9xl mx-auto flex flex-col items-center md:gap-32 gap-20">
          <div className="w-full max-w-4xl flex flex-col items-center gap-12">
            <div className="w-full flex flex-col items-center gap-4 text-center">
              <div className="flex justify-center items-center gap-4">
                <Badge>{blog.category.title}</Badge>

                <p className="text-sm text-brand-grey-2 uppercase tracking-[1.5px]">
                  {toLongDate(blog.publishedAt)}
                </p>
              </div>

              <h1 className="heading">{blog.title}</h1>
            </div>

            <div className="overflow-hidden w-full max-h-[600px] md:aspect-[1024/600] xs:aspect-[512/480] rounded-lg flex justify-center items-center">
              <CustomImage width={1024} height={600} src={blog.cover} />
            </div>

            <div className="w-full blog-content prose">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <img src={blog.cover} />

              <blockquote>Block quote</blockquote>
              <p>Ordered list</p>
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
              <p>Unordered list</p>
              <ul>
                <li>Item A</li>
                <li>Item B</li>
                <li>Item C</li>
              </ul>

              <a href={`/blog/${blog.slug}`}>Text link</a>

              <br />
              <br />
              <strong>Bold text</strong>
              <br />
              <br />
              <em>Emphasis</em>
            </div>
          </div>

          {relatedBlogs && relatedBlogs.length > 0 && (
            <div className="w-full flex flex-col items-start md:gap-[72px] gap-12">
              <Animate className="w-full flex justify-between items-end">
                <h2 className="heading">Related Insights</h2>

                <Button to="/blog" className="md:flex hidden">
                  Explore More
                  <IconArrowRight className="w-6 h-6 md:stroke-[1.5] shrink-0" />
                </Button>
              </Animate>

              <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-4">
                {relatedBlogs.map((blog, index) => (
                  <Animate
                    key={blog.id}
                    staggerIndex={index}
                    className="lg:last-of-type:flex md:last-of-type:hidden last-of-type:flex"
                  >
                    <BlogCard {...blog} />
                  </Animate>
                ))}
              </div>
            </div>
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

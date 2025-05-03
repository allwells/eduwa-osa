export type LinkType = {
  name: string;
  path: string;
  url?: string;
};

export type AOSAnimation =
  | "none"
  | "fade-up"
  | "fade-down"
  | "fade-right"
  | "fade-left"
  | "fade-up-right"
  | "fade-up-left"
  | "fade-down-right"
  | "fade-down-left"
  | "flip-up"
  | "flip-down"
  | "flip-right"
  | "flip-left"
  | "slide-up"
  | "slide-down"
  | "slide-right"
  | "slide-left"
  | "zoom-in"
  | "zoom-in-up"
  | "zoom-in-down"
  | "zoom-in-right"
  | "zoom-in-left"
  | "zoom-out"
  | "zoom-out-up"
  | "zoom-out-down"
  | "zoom-out-right"
  | "zoom-out-left";

export type AOSEasing =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "ease-in-back"
  | "ease-out-back"
  | "ease-in-out-back"
  | "ease-in-sine"
  | "ease-out-sine"
  | "ease-in-out-sine"
  | "ease-in-quad"
  | "ease-out-quad"
  | "ease-in-out-quad"
  | "ease-in-cubic"
  | "ease-out-cubic"
  | "ease-in-out-cubic"
  | "ease-in-quart"
  | "ease-out-quart"
  | "ease-in-out-quart";

export type AOSAnchorPlacement =
  | "top-bottom"
  | "top-center"
  | "top-top"
  | "center-bottom"
  | "center-center"
  | "center-top"
  | "bottom-bottom"
  | "bottom-center"
  | "bottom-top";

export type Service = {
  id: string;
  subtitle: string;
  title: string;
  description: string;
};

export type Transformation = {
  subtitle: string;
  title: string;
  description: string;
};

export type BlogCategory = {
  id: string;
  slug: string;
  title: string;
};
export type Blog = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover: string;
  publishedAt: string; // iso date format
  category: BlogCategory;
  content: any;
};

export type Testimonial = {
  name: string;
  content: string;
  photo: string | null;
};

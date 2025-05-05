import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("resources", "routes/resources.tsx"),
    ...prefix("blog", [
      index("routes/blog/index.tsx"),
      route(":slug", "routes/blog/blog-details.tsx"),
    ]),
  ]),
] satisfies RouteConfig;

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
    // route("about", "routes/about.tsx"),

    // ...prefix("work", [
    //   index("routes/work/index.tsx"),
    //   route(":slug", "routes/work/work-details.tsx"),
    // ]),
  ]),
] satisfies RouteConfig;

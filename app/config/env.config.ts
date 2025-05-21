import { assertValue } from "~/utils/helpers";

// Storyblok CMS
export const STORYBLOK_PREVIEW_TOKEN = assertValue<string>(
  process.env.STORYBLOK_PREVIEW_TOKEN,
  "Missing environment variable: STORYBLOK_PREVIEW_TOKEN"
);

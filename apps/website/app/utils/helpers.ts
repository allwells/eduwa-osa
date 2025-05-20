import dayjs from "dayjs";
import slugify from "slugify";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

/**
 * Checks if a given page path is considered active based on the current pathname.
 *
 * This function is useful for navigation components (like sidebars or headers)
 * to determine if a link should be highlighted as active.
 *
 * The logic handles the special case of the root path ("/").
 *
 * @param {string} pathname - The current full path of the page.
 * @param {string} path - The path to check against the current pathname.
 * @returns {boolean} Returns true if the `path` is considered active based on the `pathname`, false otherwise.
 */
export const isPageActive = (pathname: string, path: string): boolean => {
  return path === "/" ? pathname === "/" : pathname.startsWith(path);
};

/**
 * Slugifies the input string with specific options.
 *
 * @param {string} text - The input string to slugify
 * @return {string} The slugified string
 */
export function slugifyThis(text: string): string {
  return slugify(text, {
    lower: true,
    strict: true,
  });
}

/**
 * Converts an ISO date string to a long-formatted date string.
 *
 * @param isoString - An ISO 8601 date string (e.g., "2025-04-15T13:45:30Z").
 * @returns A formatted date string like "15th April, 2025 @ 1:45 PM".
 * @throws Will throw an error if the input string is not a valid date.
 */
export function toLongDate(isoString: string): string {
  const date = dayjs(isoString);

  if (!date.isValid()) {
    throw new Error("Invalid ISO date string.");
  }

  return date.format("Do MMMM, YYYY");
}

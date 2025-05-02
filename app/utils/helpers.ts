import slugify from "slugify";

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
 *
 * @example
 * // Assuming current pathname is "/users/123"
 * isPageActive("/users/123", "/")       // returns false
 * isPageActive("/users/123", "/users")  // returns true
 * isPageActive("/users/123", "/users/123") // returns true
 * isPageActive("/users/123", "/settings") // returns false
 *
 * @example
 * // Assuming current pathname is "/"
 * isPageActive("/", "/")       // returns true
 * isPageActive("/", "/home")   // returns false
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

/**
 * Centralized theme colors utility
 * Single source of truth for all color-to-theme mappings across the application
 */

/**
 * Color definitions with both hex and Tailwind class equivalents
 */
export const COLORS = {
  red: { hex: "#FF4747", tailwind: "js-red" },
  blue: { hex: "#5295CB", tailwind: "js-blue" },
  yellow: { hex: "#FDCD49", tailwind: "js-yellow" },
  black: { hex: "#121416", tailwind: "js-black" },
  white: { hex: "#E8E9EB", tailwind: "js-white" },
};

/**
 * Hex color values only (for direct color usage)
 */
export const COLOR_HEX = {
  red: COLORS.red.hex,
  blue: COLORS.blue.hex,
  yellow: COLORS.yellow.hex,
  black: COLORS.black.hex,
  white: COLORS.white.hex,
};

/**
 * Tailwind color class names only
 */
export const COLOR_TAILWIND = {
  red: COLORS.red.tailwind,
  blue: COLORS.blue.tailwind,
  yellow: COLORS.yellow.tailwind,
  black: COLORS.black.tailwind,
  white: COLORS.white.tailwind,
};

/**
 * Theme names
 */
export const THEME_NAMES = {
  RED: "red",
  BLUE: "blue",
  YELLOW: "yellow",
};

/**
 * Audience to theme mapping
 * Maps audience slugs to their assigned theme colors
 */
export const AUDIENCE_THEME = {
  "web-designers": THEME_NAMES.RED,
  "website-designers": THEME_NAMES.RED,
  "digital-marketing": THEME_NAMES.YELLOW,
  "public-good": THEME_NAMES.BLUE,
};

/**
 * Get Tailwind class string for a specific color type and theme
 * @param {string} theme - The theme name (red, blue, yellow)
 * @param {string} type - The class type (accent, bg, border, text)
 * @returns {string} The Tailwind class string
 */
export const getThemeClass = (theme, type = "accent") => {
  const cleanTheme = theme?.toLowerCase() ?? THEME_NAMES.RED;
  const color = cleanTheme in COLOR_TAILWIND ? COLOR_TAILWIND[cleanTheme] : COLOR_TAILWIND.red;

  const prefixes = {
    accent: "text-",
    bg: "bg-",
    background: "bg-",
    text: "text-",
    border: "border-",
  };

  const prefix = prefixes[type] ?? "text-";
  return `${prefix}${color}`;
};

/**
 * Get multiple Tailwind classes for a theme (for EditorialContrastLandingTemplate pattern)
 * @param {string} theme - The theme name
 * @returns {Object} Object with accent, bg, and border class strings
 */
export const getThemeClasses = (theme) => {
  const cleanTheme = theme?.toLowerCase() ?? THEME_NAMES.RED;
  const color = cleanTheme in COLOR_TAILWIND ? COLOR_TAILWIND[cleanTheme] : COLOR_TAILWIND.red;

  return {
    accent: `text-${color}`,
    bg: `bg-${color}`,
    border: `border-${color}`,
  };
};

/**
 * Get theme color from audience slug
 * @param {string} audienceSlug - The audience identifier
 * @returns {string} The theme name (red, blue, yellow)
 */
export const getThemeByAudience = (audienceSlug) => {
  return AUDIENCE_THEME[audienceSlug] ?? THEME_NAMES.RED;
};

/**
 * Get hex color value from theme
 * @param {string} theme - The theme name
 * @returns {string} The hex color value
 */
export const getHexByTheme = (theme) => {
  const cleanTheme = theme?.toLowerCase() ?? THEME_NAMES.RED;
  return COLOR_HEX[cleanTheme] ?? COLOR_HEX.red;
};

/**
 * Get button classes for a category/audience with state variants
 * For use in pattern like portfolio.js categoryThemeClasses
 * @param {string} audienceSlug - The audience identifier (or 'all')
 * @returns {Object} Object with inactive and active button class strings
 */
export const getCategoryButtonClasses = (audienceSlug) => {
  if (audienceSlug === "all") {
    return {
      inactive: "bg-transparent text-js-black hover:bg-js-black hover:text-js-white",
      active: "bg-js-black text-js-white",
    };
  }

  const theme = getThemeByAudience(audienceSlug);
  const color = theme in COLOR_TAILWIND ? COLOR_TAILWIND[theme] : COLOR_TAILWIND.red;
  const textColor = theme === THEME_NAMES.BLUE ? "text-js-white" : "text-js-black";
  const hoverTextColor = theme === THEME_NAMES.BLUE ? "hover:text-js-white" : "hover:text-js-black";

  return {
    inactive: `bg-transparent text-js-black hover:bg-${color} ${hoverTextColor}`,
    active: `bg-${color} ${textColor}`,
  };
};

/**
 * Get accent classes for a category/audience (divider and arrow)
 * For use in pattern like portfolio.js categoryAccentClasses
 * @param {string} audienceSlug - The audience identifier (or 'all')
 * @returns {Object} Object with divider and arrow class strings
 */
export const getCategoryAccentClasses = (audienceSlug) => {
  if (audienceSlug === "all") {
    return {
      divider: "border-js-black",
      arrow: "text-js-black",
    };
  }

  const theme = getThemeByAudience(audienceSlug);
  const color = theme in COLOR_TAILWIND ? COLOR_TAILWIND[theme] : COLOR_TAILWIND.red;

  return {
    divider: `border-${color}`,
    arrow: `text-${color}`,
  };
};

export const getRandomColorHex = () => {
  const themeValues = Object.values(THEME_NAMES);
  const randomTheme = themeValues[Math.floor(Math.random() * themeValues.length)];
  return getHexByTheme(randomTheme);
};

export const getRandomTheme = () => {
  const themeValues = Object.values(THEME_NAMES);
  return themeValues[Math.floor(Math.random() * themeValues.length)];
};

const themeColors = {
  COLORS,
  COLOR_HEX,
  COLOR_TAILWIND,
  THEME_NAMES,
  AUDIENCE_THEME,
  getThemeClass,
  getThemeClasses,
  getThemeByAudience,
  getHexByTheme,
  getCategoryButtonClasses,
  getCategoryAccentClasses,
  getRandomColorHex,
  getRandomTheme,
};

export default themeColors;

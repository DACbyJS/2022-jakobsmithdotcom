import Link from "next/link";
import WigglyLink from "../svg/WigglyLink";
import { useTheme } from "../../lib/contexts/ThemeProvider";

const THEME_COLORS = {
  red: "#FF4747",
  blue: "#5295CB",
  yellow: "#FDCD49",
};

const BRAND_COLORS = Object.values(THEME_COLORS);

const getRandomColor = () =>
  BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];

const WigglyButton = ({ href, children, target, rel, colorName }) => {
  const { theme } = useTheme();
  const color = THEME_COLORS[colorName] ?? THEME_COLORS[theme] ?? getRandomColor();
  const border = `3px solid ${color}`;
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className="overpass-underline-no-line wiggly-svg-link px-6 py-3"
      style={{
        borderTop: border,
        borderLeft: border,
        borderRight: border,
      }}
    >
      {children}
      <WigglyLink color={color} />
    </Link>
  );
};

export default WigglyButton;

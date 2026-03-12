import Link from "next/link";
import WigglyLink from "../svg/WigglyLink";
import { useTheme } from "../../lib/contexts/ThemeProvider";
import { COLOR_HEX, getRandomColorHex } from "../../lib/utilities/themeColors";
import classNames from "classnames";

const WigglyButton = ({ href, children, target, rel, colorName, className }) => {
  const { theme } = useTheme();
  const color = COLOR_HEX[colorName] ?? COLOR_HEX[theme] ?? getRandomColorHex();
  const border = `3px solid ${color}`;
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={classNames("overpass-underline-no-line wiggly-svg-link px-6 py-3", className)}
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

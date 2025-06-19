// Libs
import { Tooltip } from "react-tooltip";

/**
 * SiteTooltip component for displaying tooltips on pricing items.
 * @param {Object} item - Props containing the item data, need targeting id and tooltip text
 * @returns {JSX.Element} The rendered tooltip component.
 * @see https://react-tooltip.com/docs/api#anchorselect
 */
const SiteTooltip = ({ item }) => (
  <Tooltip
    className="site-tooltip style-override"
    anchorSelect={`#item-${item.id}`}
    place="right"
    clickable
  >
    {item.tooltip}
  </Tooltip>
);
export default SiteTooltip;

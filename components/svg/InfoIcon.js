const SvgInfoIcon = ({ handleInfoClick }) => (
  <svg
    id="menu-dots-with-close"
    onClick={handleInfoClick}
    className="cursor-pointer rainbow-svg-on-hover circle-white"
    width="100%"
    height="100%"
    viewBox="0 0 97 97"
    fill="none"
    preserveAspectRatio="xMinYMin meet"
    alt="Click to Open Menu"
  >
    <circle cx="48.5" cy="48.5" r="48.5" fill="#E8E9EB" />
    <path
      d="M48.5238 19.8095C48.5238 18.2857 49.127 16.9524 50.3333 15.8095C51.5397 14.6667 52.9365 14.0635 54.5238 14C55.6667 14 56.619 14.381 57.381 15.1429C58.1429 15.9048 58.5556 16.8571 58.619 18C58.619 19.4603 57.9841 20.7937 56.7143 22C55.4444 23.2063 54.0476 23.8413 52.5238 23.9048C51.5714 23.9048 50.6825 23.5873 49.8571 22.9524C49.0317 22.3175 48.5873 21.2698 48.5238 19.8095ZM33 49.619C33 49.1111 33.2857 48.127 33.8571 46.6667C34.4286 45.2063 35.1905 43.5873 36.1429 41.8095C37.0952 40.0317 38.4921 38.4127 40.3333 36.9524C42.1746 35.4921 44.0794 34.7937 46.0476 34.8571C48.5238 34.8571 50.5873 35.5873 52.2381 37.0476C53.8889 38.5079 54.746 40.4762 54.8095 42.9524C54.8095 44.0317 54.3651 45.8095 53.4762 48.2857C52.5873 50.7619 51.3175 54.0952 49.6667 58.2857C48.0159 62.4762 46.6825 66.0635 45.6667 69.0476C45.3492 70.4444 45.1905 71.4603 45.1905 72.0952C45.1905 73.6825 45.7302 74.4762 46.8095 74.4762C47.381 74.4762 47.9841 74.381 48.619 74.1905C49.254 74 49.9841 73.5556 50.8095 72.8571C51.6349 72.1587 52.4921 71.0476 53.381 69.5238C54.2698 68 55.0635 66.127 55.7619 63.9048C55.9524 63.1429 56.1111 62.6984 56.2381 62.5714C56.3651 62.4444 56.9048 62.381 57.8571 62.381C59.127 62.381 59.7619 62.6984 59.7619 63.3333C59.7619 63.8413 59.4762 64.8254 58.9048 66.2857C58.3333 67.746 57.5397 69.3651 56.5238 71.1429C55.5079 72.9206 54.0794 74.5079 52.2381 75.9048C50.3968 77.3016 48.4286 78 46.3333 78C44.3016 78 42.4286 77.3333 40.7143 76C39 74.6667 38.1111 72.6349 38.0476 69.9048C38.0476 68.8254 38.2063 67.8095 38.5238 66.8571C38.8413 65.9048 40.2063 62.2857 42.619 56C45.0317 49.5873 46.4286 45.746 46.8095 44.4762C47.1905 43.2063 47.4127 41.9683 47.4762 40.7619C47.4762 39.2381 46.9365 38.4762 45.8571 38.4762H45.6667C43.7619 38.4762 42.0159 39.5238 40.4286 41.619C38.8413 43.7143 37.6349 46.381 36.8095 49.619C36.746 49.6825 36.6825 49.7778 36.619 49.9048C36.5556 50.0317 36.5238 50.127 36.5238 50.1905C36.5238 50.254 36.4603 50.3175 36.3333 50.381C36.2063 50.4444 36.1111 50.4762 36.0476 50.4762C35.9841 50.4762 35.8571 50.4762 35.6667 50.4762C35.4762 50.4762 35.2222 50.4762 34.9048 50.4762H33.5714C33.1905 50.0952 33 49.8095 33 49.619Z"
      fill="#121416"
    />
  </svg>
);

export default SvgInfoIcon;

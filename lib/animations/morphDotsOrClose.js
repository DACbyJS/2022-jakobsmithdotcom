export const getMenuDotsData = async () => {
  // Snap
  const Snap = (await import("snapsvg-cjs")).default;
  const svg = document.getElementById("menu-dots-with-close");
  const s = Snap(svg);

  // Menu Dots
  const allDots = {
    menuDotsOne: Snap.select("#menu-dots-1"),
    menuDotsTwo: Snap.select("#menu-dots-2"),
    menuDotsThree: Snap.select("#menu-dots-3"),
  };
  const allDotsPoints = {
    menuDotsPointsOne: allDots.menuDotsOne.node.getAttribute("d"),
    menuDotsPointsTwo: allDots.menuDotsTwo.node.getAttribute("d"),
    menuDotsPointsThree: allDots.menuDotsThree.node.getAttribute("d"),
  };

  // Menu Close
  const allCloses = {
    menuClosesOne: Snap.select("#menu-close-1"),
    menuClosesTwo: Snap.select("#menu-close-2"),
    menuClosesThree: Snap.select("#menu-close-3"),
  };
  const allClosesPoints = {
    menuClosesPointsOne: allCloses.menuClosesOne.node.getAttribute("d"),
    menuClosePointsTwo: allCloses.menuClosesTwo.node.getAttribute("d"),
    menuClosePointsThree: allCloses.menuClosesThree.node.getAttribute("d"),
  };

  return { allDots, allDotsPoints, allCloses, allClosesPoints };
};

export const toClose = (allDots, allClosesPoints) => {
  const { menuDotsOne, menuDotsTwo, menuDotsThree } = allDots;
  menuDotsOne.animate({ d: allClosesPoints.menuClosesPointsOne }, 500);
  menuDotsTwo.animate({ d: allClosesPoints.menuClosePointsTwo }, 750);
  menuDotsThree.animate({ d: allClosesPoints.menuClosePointsThree }, 1000);
};

export const toDots = (allDots, allDotsPoints) => {
  const { menuDotsOne, menuDotsTwo, menuDotsThree } = allDots;
  menuDotsOne.animate({ d: allDotsPoints.menuDotsPointsOne }, 1000);
  menuDotsTwo.animate({ d: allDotsPoints.menuDotsPointsTwo }, 750);
  menuDotsThree.animate({ d: allDotsPoints.menuDotsPointsThree }, 500);
};

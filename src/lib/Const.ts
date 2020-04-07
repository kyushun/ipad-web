const windowWidth = window.innerWidth;

const isMobile = windowWidth <= 480;
const appCountByOneLine = !isMobile ? 6 : 4;

export const ipadScreenSize = !isMobile ? 980 : 360;
export const appIconSize = !isMobile ? 80 : 50;
export const appIconRadius = !isMobile ? 18 : 12;
export const appIconMargin =
  (ipadScreenSize - appIconSize * appCountByOneLine) / (appCountByOneLine * 2);

import { useMediaQuery } from 'react-responsive';

export function Desktop({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 801 });
  return isDesktop ? children : null;
}

export function TabletAndMore({ children }) {
  const isTabletAndMore = useMediaQuery({ minWidth: 426 });
  return isTabletAndMore ? children : null;
}

export function Tablet({ children }) {
  const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 800 });
  return isTablet ? children : null;
}

export function Mobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 425 });
  return isMobile ? children : null;
}

export function MobileTablet({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  return isMobile ? children : null;
}

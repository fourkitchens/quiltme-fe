import { useMemo } from "react";
import useMediaQuery from "./use-media-query";

const data = { mobile: 2, tablet: 4, desktop: 5 };

export default function useImageGridColumns() {
  const isDesktop = useMediaQuery("(min-width: 56.5em)");
  const isMobile = useMediaQuery("(min-width: 37.4375em)");

  const cols = useMemo(() => {
    if (isDesktop) return data.desktop;
    if (isMobile) return data.tablet;
    return data.mobile;
  }, [isDesktop, isMobile]);

  return cols;
}

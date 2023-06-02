import * as React from "react";
import ImageList from "../02-molecules/image-list";
import ImageControls from "../02-molecules/image-controls";

export default function ImagesGrid() {
  const gallery = React.useRef(null);

  const onInit = ({ instance }) => {
    if (!gallery.current) {
      gallery.current = instance;
    }
  };

  const setIndex = (index, animate) => {
    if (gallery.current && index >= 0) {
      const { current } = gallery;
      current.items[current.index].classList.remove("active");
      current.items[index].classList.add("active");
      current.index = index;

      if (animate) {
        current.items[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "center",
        });
      }
    }
  }

  return (
    <>
      <ImageList onInit={onInit} setIndex={setIndex} />
      <ImageControls instance={gallery} setIndex={setIndex} />
    </>
  );
}

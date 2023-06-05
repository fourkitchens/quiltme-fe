import { useContext, useState } from "react";
import ImageList from "../02-molecules/image-list";
import ImagePreview from "../02-molecules/image-preview";
import ImageControls from "../02-molecules/image-controls";
import SubmissionContext from "../../../context/submission";

export default function ImagesGrid({ data }) {
  // Language context.
  const submContext = useContext(SubmissionContext);
  const submission = submContext.getData();

  const [items, setItems] = useState(data);

  const scrollToItem = () => {
    setTimeout(() => {
      const selected = document.querySelector(".image-focused");
      if (selected) {
        selected.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "center",
        });
      }
    });
  };

  const setSelected = (index) => {
    const newState = items.map((obj, id) => {
      const selected = index >= 0 && id === index;
      const focus = index >= 0 ? selected : obj.focus;
      return { ...obj, selected, focus, id };
    });

    setItems(newState);
    setTimeout(() => submContext.setData(null));
  };

  const setFocus = (index) => {
    const newState = items.map((obj, id) => {
      const focus = id === index;
      return { ...obj, focus, id };
    });

    setItems(newState);
    scrollToItem();
  };

  if (submission) {
    items.map((item, index) => {
      if (!item.selected && item.entityId === submission.entityId) {
        setSelected(index);
        scrollToItem();
      }
    });
  }

  return (
    <>
      <ImageList items={items} setSelected={setSelected} />
      <ImagePreview items={items} setSelected={setSelected} />
      <ImageControls
        items={items}
        setFocus={setFocus}
        setSelected={setSelected}
      />
    </>
  );
}

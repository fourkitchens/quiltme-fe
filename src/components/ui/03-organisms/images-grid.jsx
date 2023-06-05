import { useState } from "react";
import ImageList from "../02-molecules/image-list";
import ImagePreview from "../02-molecules/image-preview";
import ImageControls from "../02-molecules/image-controls";

export default function ImagesGrid() {
  const [items, setItems] = useState(data);

  const scrollToItem = () => {
    setTimeout(() => {
      const selected = document.querySelector('.image-focused');
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
      return { ...obj, selected, focus: selected, id };
    });

    setItems(newState);
  };

  const setFocus = (index) => {
    const newState = items.map((obj, id) => {
      const focus = id === index;
      return { ...obj, focus, id };
    });

    setItems(newState);
    scrollToItem();
  };

  return (
    <>
      <ImageList items={items} setSelected={setSelected} />
      <ImagePreview items={items} setSelected={setSelected} />
      <ImageControls items={items} setFocus={setFocus} setSelected={setSelected} />
    </>
  );
}

const data = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

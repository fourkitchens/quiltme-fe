import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

// Icons.
import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import IconButton from "../01-atoms/icon-button";

export default function ImagePreview({ items, setSelected }) {
  const [data, setData] = useState();

  useEffect(() => {
    const results = items?.filter((item) => item.selected);
    if (results?.length) {
      setData(results[0]);
    }
  }, [items]);

  const onKeyPressed = (event) => {
    if (event.key === "ArrowRight") {
      nextItem();
    }

    if (event.key === "ArrowLeft") {
      prevItem();
    }
  };

  const nextItem = () => {
    const selected = data.id < items.length - 1 ? data.id + 1 : 0;
    setSelected(selected);
  };

  const prevItem = () => {
    const selected = data.id > 0 ? data.id - 1 : items.length - 1;
    setSelected(selected);
  };

  const handleClose = () => {
    setSelected(-1);
    setData(null);
  };

  // Styles
  const mainContainerStyles = {
    zIndex: 9999,
    "& .MuiModal-backdrop": {
      bgcolor: "cool-magenta.light",
    },
  };

  const contentStyles = {
    maxWidth: "80vw",
    bgColor: "white",
    overflow: "hidden",
    aspectRatio: "1 / 1",
    border: "0.5rem solid #F8B722",
    p: { xs: "2.5rem", md: "3.75rem" },
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const controlStyles = {
    display: "flex",
    padding: "0 1rem",
    position: "absolute",
    top: "calc(50% - 1.25rem)",
    justifyContent: "space-between",
    width: { xs: "calc(100% - 6rem)", md: "calc(100% - 8.5rem)" },
  };

  const closeButtonStyles = {
    top: "1.5rem",
    right: "1.5rem",
    position: "absolute",
  };

  return (
    <Dialog
      scroll="paper"
      open={!!data}
      onClose={handleClose}
      sx={mainContainerStyles}
      onKeyDown={onKeyPressed}
      aria-describedby="search-box-heading"
    >
      {data && (
        <DialogContent sx={contentStyles}>
          <IconButton sx={closeButtonStyles} variant="dark" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Box sx={controlStyles}>
            <IconButton onClick={prevItem}>
              <ArrowLeftIcon />
            </IconButton>
            <IconButton onClick={nextItem}>
              <ArrowRightIcon />
            </IconButton>
          </Box>
          <Box
            loading="lazy"
            component="img"
            sx={imageStyles}
            src={data.img}
            alt={data.title}
          />
        </DialogContent>
      )}
    </Dialog>
  );
}
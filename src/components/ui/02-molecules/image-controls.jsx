import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "../../../hooks/use-media-query";

// Icons.
import PreviewIcon from "@mui/icons-material/Preview";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function ImageControls({ instance, setIndex }) {
  const [isActive, setActive] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 37.5em)");

  const controlStyles = {
    margin: 0,
    gap: "0.25rem",
    left: "1.5rem",
    display: "grid",
    bottom: "6.5rem",
    position: "fixed",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  const iconButtonStyles = {
    padding: 0,
    transition: "all 0.4s",
    "&:hover, &:focus-visible": {
      opacity: 1,
      bgcolor: "white",
      "& svg": {
        color: "cool-magenta.main",
      },
    },
    "& svg": {
      color: "white",
      width: "2.5rem",
      height: "2.5rem",
    },
  };

  const previewButtonStyles = {
    ...iconButtonStyles,
    borderRadius: "0.25rem",
  };

  const getNextIndex = (key) => {
    if (instance.current) {
      const { index, items } = instance.current;
      const rows = isMobile ? 3 : 7;
      const len = items.length;

      switch (key) {
        case "left":
          if (index > 0) return index - 1;
          break;
        case "right":
          if (index < len - 1) return index + 1;
          break;
        case "top":
          if (index - rows >= 0) return index - rows;
          break;
        case "bottom":
          if (index + rows < len) return index + rows;
          break;
      }
      return -1;
    }
  };

  const openPreview = () => {
    if (instance.current) {
      const { index, items } = instance.current;
      items[index].click();
    }
  };

  const handleClick = (event) => {
    if (instance.current) {
      const key = event.currentTarget.getAttribute("aria-label");
      const nextIndex = getNextIndex(key);
      setIndex(nextIndex, true);
      setActive(true);
    }
  };

  return (
    <Box sx={controlStyles} role="navigation" aria-label="gallery">
      <Box gridColumn={2}>
        <IconButton
          aria-label="top"
          onClick={handleClick}
          sx={iconButtonStyles}
        >
          <ArrowCircleUpOutlinedIcon />
        </IconButton>
      </Box>
      <Box gridColumn={1}>
        <IconButton
          aria-label="left"
          onClick={handleClick}
          sx={iconButtonStyles}
        >
          <ArrowCircleLeftOutlinedIcon />
        </IconButton>
      </Box>
      {isActive && (
        <Box gridColumn={2}>
          <IconButton
            onClick={openPreview}
            aria-label="preview"
            sx={previewButtonStyles}
          >
            <PreviewIcon />
          </IconButton>
        </Box>
      )}
      <Box gridColumn={3}>
        <IconButton
          aria-label="right"
          onClick={handleClick}
          sx={iconButtonStyles}
        >
          <ArrowCircleRightOutlinedIcon />
        </IconButton>
      </Box>
      <Box gridColumn={2}>
        <IconButton
          aria-label="bottom"
          onClick={handleClick}
          sx={iconButtonStyles}
        >
          <ArrowCircleDownOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

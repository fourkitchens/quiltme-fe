import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "../01-atoms/icon-button";
import useImageGridColumns from "../../../hooks/use-image-grid-columns";

// Icons.
import PreviewIcon from '@mui/icons-material/CenterFocusWeak';
import ArrowUpIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowDownIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowLeftIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function ImageControls({ items, setFocus, setSelected }) {
  const cols = useImageGridColumns();
  const [focus, saveFocus] = useState(null);

  useEffect(() => {
    if (items) {
      const results = items.filter((item) => item.focus);
      if (results?.length) {
        saveFocus(results[0]);
      }
    }
  }, [items]);

  const handleLeft = () => {
    if (focus?.id > 0) {
      setFocus(focus.id - 1);
    }
  };

  const handleRigth = () => {
    const currentId = focus ? focus.id : 0;
    if (currentId < items?.length - 1) {
      setFocus(currentId + 1);
    }
  };

  const handleTop = () => {
    if (focus?.id - cols >= 0) {
      setFocus(focus.id - cols);
    }
  };

  const handleBottom = () => {
    const currentId = focus ? focus.id : 0;
    if (currentId + cols < items.length) {
      setFocus(currentId + cols);
    }
  };

  const handlePreview = () => {
    setSelected(focus.id);
  };

  // Styles.
  const controlStyles = {
    margin: 0,
    gap: "0.25rem",
    left: "1.5rem",
    display: "grid",
    bottom: "8.5rem",
    position: "fixed",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  return (
    <Box sx={controlStyles} role="navigation" aria-label="gallery">
      <Box gridColumn={2}>
        <IconButton aria-label="top" onClick={handleTop}>
          <ArrowUpIcon />
        </IconButton>
      </Box>
      <Box gridColumn={1}>
        <IconButton aria-label="left" onClick={handleLeft}>
          <ArrowLeftIcon />
        </IconButton>
      </Box>
      {focus && (
        <Box gridColumn={2}>
          <IconButton aria-label="preview" onClick={handlePreview}>
            <PreviewIcon />
          </IconButton>
        </Box>
      )}
      <Box gridColumn={3}>
        <IconButton aria-label="right" onClick={handleRigth}>
          <ArrowRightIcon />
        </IconButton>
      </Box>
      <Box gridColumn={2}>
        <IconButton aria-label="bottom" onClick={handleBottom}>
          <ArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

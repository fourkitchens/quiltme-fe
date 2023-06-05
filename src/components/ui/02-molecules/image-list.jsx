import Box from "@mui/material/Box";
import { ButtonBase } from "@mui/material";
import MuiImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useImageGridColumns from "../../../hooks/use-image-grid-columns";

export default function ImageList({ items, setSelected }) {
  const cols = useImageGridColumns();

  const listStyles = {
    margin: 0,
    overflow: "visible",
    transform: "rotate(-1deg)",
    transformOrigin: "top left",
  };

  const itemStyles = {
    "&:after": {
      content: "''",
      opacity: 0.2,
      width: "100%",
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      transition: "all 0.5s",
      bgcolor: "nice-black.main",
    },
    "&.image-focused:after": {
      opacity: 0.5,
      bgcolor: "sunset-orange.main",
    },
  };

  const imageStyles = {
    objectFit: "cover",
    width: { xs: "50vw", sm: "30vw", lg: "25vw" },
    height: { xs: "50vw", sm: "30vw", lg: "25vw" },
  };

  const handleClick = (event) => {
    const selected = event.currentTarget.getAttribute("data-key");
    const index = parseInt(selected, 10);
    setSelected(index);
  };

  return (
    <MuiImageList sx={listStyles} cols={cols} gap={0}>
      {items?.map((item, index) => (
        <ImageListItem
          key={index}
          sx={itemStyles}
          className={item.focus ? "image-focused" : ""}
        >
          <ButtonBase data-key={index} onClick={handleClick}>
            <Box
              loading="lazy"
              component="img"
              sx={imageStyles}
              alt={item.title}
              src={`${item.image}?w=800&fit=crop&auto=format`}
              srcSet={`${item.image}?w=800&fit=crop&auto=format&dpr=2 2x`}
            />
          </ButtonBase>
        </ImageListItem>
      ))}
    </MuiImageList>
  );
}

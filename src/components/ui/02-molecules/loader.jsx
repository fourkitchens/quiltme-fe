import Skeleton from "@mui/material/Skeleton";
import MuiImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useImageGridColumns from "../../../hooks/use-image-grid-columns";

export default function Loader() {
  const cols = useImageGridColumns();

  const listStyles = {
    margin: 0,
    overflow: "hidden",
    transform: "rotate(-1deg)",
    transformOrigin: "top left",
  };

  const itemStyles = {
    margin: "0.25rem",
    width: { xs: "50vw", sm: "30vw", lg: "25vw" },
    height: { xs: "50vw", sm: "30vw", lg: "25vw" },
  };

  return (
    <MuiImageList sx={listStyles} cols={cols} gap={0}>
      {Array.from({ length: 10 }, (_, index) => (
        <ImageListItem key={index}>
          <Skeleton variant="rectangular" sx={itemStyles} />
        </ImageListItem>
      ))}
    </MuiImageList>
  );
}

import MuiIconButton from "@mui/material/IconButton";

export default function IconButton({ children, variant, sx, ...rest }) {
  let buttonStyles = Object.assign({
    padding: 0,
    color: "white",
    transition: "all 0.4s",
    "&:hover, &:focus-visible": {
      bgcolor: "white",
      color: "cool-magenta.main",
    },
    "& svg": {
      width: "2.5rem",
      height: "2.5rem",
    },
  }, sx);

  if (variant === "dark") {
    buttonStyles = Object.assign(buttonStyles, {
      color: "nice-black.main",
      "&:hover, &:focus": {
        bgcolor: "nice-black.light",
        color: "sunset-orange.main",
      },
    });
  }

  return (
    <MuiIconButton sx={buttonStyles} size="large" {...rest}>
      {children}
    </MuiIconButton>
  );
}

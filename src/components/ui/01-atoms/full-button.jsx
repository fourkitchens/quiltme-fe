import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

export default function FullButton({ children, sx, ...rest }) {
  const buttonStyles = {
    flex: 1,
    pl: "3rem",
    pr: "3rem",
    display: "flex",
    alignItems: "center",
    bgcolor: "soft-pink.main",
    justifyContent: "flex-end",
    height: {xs: "3.43rem", md: "5rem" },
    ...sx,
  };

  const labelStyles = {
    mb: 0,
  };

  return (
    <ButtonBase sx={buttonStyles} {...rest}>
      <Typography variant="h3" sx={labelStyles}>
        {children}
      </Typography>
    </ButtonBase>
  );
}

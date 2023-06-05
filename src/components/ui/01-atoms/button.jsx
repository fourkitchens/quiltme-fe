import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";

export default function Button({ children, ...rest }) {
  const wrapperStyles = {
    zIndex: 2,
    mt: "2.5rem",
    position: "relative",
  };

  const buttonStyles = {
    p: "0.625rem 1.5rem",
    "&:hover, &:focus": {
      "&:before": {
        content: '""',
        width: "100%",
        height: "3.5rem",
        position: "absolute",
        borderRadius: "0.25rem",
        border: "0.125rem dashed #F8B722",
        top: { xs: "0.75rem", md: "1rem"},
        left: "1rem",
        zIndex: -1,
      },
    },
  };

  return (
    <Box sx={wrapperStyles}>
      <MuiButton
        sx={buttonStyles}
        variant="contained"
        color="electric-orange"
        {...rest}
      >
        {children}
      </MuiButton>
    </Box>
  );
}

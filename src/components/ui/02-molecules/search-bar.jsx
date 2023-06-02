import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Close, ImageSearch } from "@mui/icons-material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

export default function SearchBar() {
  const [isActive, setActive] = useState(false);

  const wrapperStyles = {
    zIndex: 501,
    display: "flex",
  };

  const overlayStyles = {
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    position: "absolute",
    bgcolor: "magic-blue.light",
  };

  const iconButtonStyles = {
    width: "5rem",
    height: "5rem",
    borderRadius: 0,
    bgcolor: "gentle-yellow.main",
    "&:hover": {
      bgcolor: "gentle-yellow.main",
    },
    "& svg": {
      width: "2.2rem",
      height: "2.2rem",
      color: "nice-black.main",
    },
  };

  const formStyles = {
    bottom: "5rem",
    display: "flex",
    p: "1.25rem 2rem",
    position: "absolute",
    right: { md: "5rem" },
    minWidth: { md: "31rem" },
    flexFlow: "column nowrap",
    width: { xs: "100%", md: "initial" },
    borderColor: "gentle-yellow.main",
    borderWidth: "0.25rem",
    borderStyle: "solid",
    borderRadius: 0,
  };

  const inputWrapperStyles = {
    mb: "0.5rem",
    display: "flex",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "nice-black.main",
  };

  const inputStyles = {
    flex: 1,
    p: "0 1rem",
    minHeight: "2.75rem",
  };

  const submitStyles = {
    borderRadius: 0,
    minHeight: "2.75rem",
    bgcolor: "magic-blue.main",
    "&:hover": { bgcolor: "magic-blue.main" },
    "svg": { fill: "white" },
  };

  const toggleState = () => {
    setActive(!isActive);
  };

  return (
    <Box sx={wrapperStyles}>
      {isActive && (
        <Box sx={overlayStyles}>
          <Paper component="form" sx={formStyles}>
            <Typography ml={1} variant="default-text" gutterBottom>
              Search for an image
            </Typography>
            <Box sx={inputWrapperStyles}>
              <InputBase
                sx={inputStyles}
                inputProps={{ "aria-label": "search user" }}
              />
              <IconButton sx={submitStyles} aria-label="menu">
                <ArrowForwardIos />
              </IconButton>
            </Box>
            <Typography ml={1} variant="small-text" gutterBottom>
              Search by name, Drupal handle, or email address.
            </Typography>
          </Paper>
        </Box>
      )}
      <Tooltip
        placement="top-start"
        title={isActive ? "close search" : "open search"}
      >
        <IconButton
          size="large"
          aria-label="search"
          sx={iconButtonStyles}
          onClick={toggleState}
        >
          {isActive ? <Close /> : <ImageSearch />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}

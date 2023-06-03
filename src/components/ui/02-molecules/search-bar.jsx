import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/ImageSearch";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  // Styles
  const wrapperStyles = {
    zIndex: 502,
    display: "flex",
  };

  const mainContainerStyles = {
    zIndex: 9999,
    "& .MuiModal-backdrop": {
      bgcolor: "magic-blue.light",
    },
    "& .MuiDialog-paper": {
      margin: 0,
      overflow: "visible",
    },
    "& .MuiDialog-container": {
      height: "auto",
      position: "absolute",
      right: {xs: 0, md: "5rem" },
      bottom: {xs: "3.43rem", md: "5rem" },
    },
    "& .close-button": {
      position: "absolute",
      right: {xs: 0, md: "-5rem" },
      bottom: {xs: "-3.43rem", md: "-5rem" }
    }
  };

  const iconButtonStyles = {
    borderRadius: 0,
    bgcolor: "gentle-yellow.main",
    width: {xs: "3.43rem", md: "5rem" },
    height: {xs: "3.43rem", md: "5rem" },
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
    minWidth: { md: "31rem" },
    flexFlow: "column nowrap",
    width: { xs: "100vw", md: "initial" },
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

  const renderedButton = (
    <IconButton
      size="large"
      aria-label="search"
      sx={iconButtonStyles}
      onClick={handleClickOpen}
      className="close-button"
    >
      {open ? <CloseIcon /> : <SearchIcon />}
    </IconButton>
  );

  return (
    <Box sx={wrapperStyles}>
      {renderedButton}
      <Dialog
        open={open}
        scroll="paper"
        onClose={handleClose}
        sx={mainContainerStyles}
        aria-describedby="search-box-heading"
      >
        <DialogContent sx={formStyles}>
          {renderedButton}
          <Typography id="search-box-heading" ml={1} variant="default-text" gutterBottom>
            Search for an image
          </Typography>
          <Box sx={inputWrapperStyles}>
            <InputBase
              sx={inputStyles}
              inputProps={{ "aria-label": "search user" }}
            />
            <IconButton sx={submitStyles} aria-label="menu">
              <ArrowIcon />
            </IconButton>
          </Box>
          <Typography ml={1} variant="small-text" gutterBottom>
            Search by name, Drupal handle, or email address.
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

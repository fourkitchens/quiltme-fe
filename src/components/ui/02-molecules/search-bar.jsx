import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import debounce from "lodash/debounce";
import Dialog from "@mui/material/Dialog";
import { useQuery } from "@apollo/client";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import DialogContent from "@mui/material/DialogContent";
import SubmissionContext from "../../../context/submission";
import SearchUser from "../../../graphql/search-user.graphql";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/ImageSearch";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";

export default function SearchBar() {
  // Language context.
  const submContext = useContext(SubmissionContext);

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, data } = useQuery(SearchUser, {
    variables: {
      value: searchTerm,
    },
    onError() {
      submContext.setData(null);
    },
  });

  const handleClose = (clear = true) => {
    setOpen(false);
    if (clear) submContext.setData(null);
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClickSubmit = () => {
    if (data?.nodeQuery?.entities?.length) {
      submContext.setData(data?.nodeQuery?.entities[0]);
      handleClose(false);
    }
  };

  const setSearchTermDebounced = debounce(setSearchTerm, 500);

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
      right: { xs: 0, md: "5rem" },
      bottom: { xs: "3.43rem", md: "5rem" },
    },
    "& .close-button": {
      position: "absolute",
      right: { xs: 0, md: "-5rem" },
      bottom: { xs: "-3.43rem", md: "-5rem" },
    },
  };

  const iconButtonStyles = {
    borderRadius: 0,
    bgcolor: "gentle-yellow.main",
    width: { xs: "3.43rem", md: "5rem" },
    height: { xs: "3.43rem", md: "5rem" },
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
    width: "100%",
    minHeight: "2.75rem",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    }
  };

  const submitStyles = {
    borderRadius: 0,
    height: "3.5rem",
    aspectRatio: "1 / 1",
    bgcolor: "magic-blue.main",
    "&:hover": { bgcolor: "magic-blue.main" },
    svg: { fill: "white" },
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
          <Typography
            id="search-box-heading"
            ml={1}
            variant="default-text"
            gutterBottom
          >
            Search for an image
          </Typography>
          <Box sx={inputWrapperStyles}>
            <Autocomplete
              sx={inputStyles}
              loading={loading}
              options={data?.nodeQuery?.entities || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => {
                    setSearchTermDebounced(e.target.value);
                  }}
                />
              )}
            />
            <IconButton
              sx={submitStyles}
              aria-label="search"
              onClick={handleClickSubmit}
            >
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

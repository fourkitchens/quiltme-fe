import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import DialogContent from "@mui/material/DialogContent";
import SubmissionContext from "../../../context/submission";

// Icons
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/ImageSearch";
import ArrowIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const noOptions = {
  noMatch: "No results",
  minimumRequired: "Enter 2 caracters minimum",
};

export default function SearchBar() {
  // Language context.
  const submContext = useContext(SubmissionContext);
  const options = submContext.getItems();

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [noOptionsText, setNoOptionsText] = useState(
    noOptions.minimumRequired
  );

  const handleClose = (clear = true) => {
    setOpen(false);
    if (clear) submContext.setFilter(null);
  };

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClickSubmit = () => {
    if (selectedOption) {
      submContext.setFilter(selectedOption);
      handleClose(false);
    }
  };

  const handleFilter = (options, state) => {
    let newOptions = [];
    if (state.inputValue.length >= 2) {
      options.forEach((element) => {
        const { name, email, username } = element;
        const inputValue = state.inputValue.toLowerCase();
        if (
          name?.toLowerCase().includes(inputValue) ||
          email?.toLowerCase().includes(inputValue) ||
          username?.toLowerCase().includes(inputValue)
        ) {
          newOptions.push(element);
        }
      });
    }
    return newOptions;
  };

  const renderOption = (props, item) => {
    const primarylabel = item.username
      ? `${item.name} (${item.username})`
      : item.name;
    return (
      <ListItem key={props.id} {...props}>
        <ListItemAvatar>
          <Avatar>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              component="img"
              alt={item.name}
              src={item.image}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={primarylabel} secondary={item.email} />
      </ListItem>
    );
  };

  const handleChange = (_, value) => {
    setSelectedOption(value);
  };

  const handleTextChange = (event) => {
    if (event.target.value.length >= 2) {
      setNoOptionsText(noOptions.noMatch);
    } else {
      setNoOptionsText(noOptions.minimumRequired);
    }
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
    },
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
              autoSelect={true}
              options={options || []}
              onChange={handleChange}
              renderOption={renderOption}
              filterOptions={handleFilter}
              noOptionsText={noOptionsText}
              getOptionLabel={(option) => `${option.entityId}. ${option.name}`}
              renderInput={(params) => (
                <TextField {...params} onChange={handleTextChange} />
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

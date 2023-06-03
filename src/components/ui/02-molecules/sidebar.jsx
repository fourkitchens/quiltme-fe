/* eslint-disable @next/next/no-img-element */
import { useState, forwardRef } from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Button from "../01-atoms/button";
import Dialog from "@mui/material/Dialog";
import FullButton from "../01-atoms/full-button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import SmallLogoIcon from "../../../img/small-logo.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Slide
      ref={ref}
      direction="left"
      easing={{
        exit: "ease-out",
        enter: "ease-out",
      }}
      {...props}
    />
  );
});

export default function BottomBanner() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Styles
  const fullButtonStyles = {
    top: 0,
    pl: "3rem",
    zIndex: "500",
    position: "fixed",
    transform: "rotate(270deg)",
    transformOrigin: "top right",
    justifyContent: "flex-start",
    right: {xs: "3.43rem", md: "5rem" },
    width: {xs: "calc(100vh - 5rem)", md: "calc(100vh - 7rem)" },
  };

  const mainContainerStyles = {
    "& .MuiModal-backdrop": {
      bgcolor: "cool-magenta.light",
    },
    "& .MuiDialog-container": {
      display: "flex",
      justifyContent: "flex-end",
    },
    "& .MuiPaper-root-MuiDialog-paper": {
      bottom: 0,
      maxWidth: "100%",
    },
    "& .MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollBody": {
      m: 0,
      borderRadius: 0,
      maxWidth: "100%",
      boxShadow: "none",
      pt: { md: "12rem" },
      bgcolor: "transparent",
      verticalAlign: "bottom",
    },
  };

  const dialogHeaderStyles = {
    p: 0,
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    position: { md: "absolute" },
    left: { md: "1.25rem" },
    top: { md: "1.25rem" },
  };

  const dialogContentStyles = {
    width: "95vw",
    bgcolor: "white",
    maxWidth: "50rem",
    position: "relative",
    p: { xs: "1.5rem", md: "5rem" },
    pb: { xs: "2.5rem", md: "5rem" },
  };

  const subheadingStyles = {
    mt: "2.5rem",
    mb: "0.75rem",
  };

  const closeIconButtonStyles = {
    p: "0.5rem",
    width: "2.81rem",
    height: "2.81rem",
    color: "nice-black.main",
    "&:hover, &:focus": {
      color: "sunset-orange.main",
    },
    "& svg": {
      width: "2rem",
      height: "2rem",
    },
  };

  const logoIconStyles = {
    ml: "auto",
    opacity: { xs: 1, md: 0 },
  };

  return (
    <>
      <FullButton sx={fullButtonStyles} onClick={handleClickOpen}>
        What's the stitch?
      </FullButton>
      <Dialog
        open={open}
        scroll="body"
        onClose={handleClose}
        sx={mainContainerStyles}
        TransitionComponent={Transition}
        aria-describedby="bottom-banner-dialog"
      >
        <DialogContent sx={dialogContentStyles}>
          <Box>
            <Box sx={dialogHeaderStyles}>
              <IconButton
                size="large"
                onClick={handleClose}
                sx={closeIconButtonStyles}
              >
                <CloseIcon />
              </IconButton>
              <Box size="large" sx={logoIconStyles}>
                <SmallLogoIcon />
              </Box>
            </Box>
            <Typography
              variant="h1"
              gutterBottom
              sx={{ mb: "1.5rem" }}
              id="bottom-banner-dialog"
            >
              Crafting a community fabric with AI
            </Typography>
            <Typography variant="default-text" gutterBottom>
              We created Quilt.me to demonstrate the power and potential of
              Drupal by exploring what's possible in this new world of AI.
              Rethinking how we approach image creation, we combined code, art
              direction, and AI to turn portraits into quilted images.
            </Typography>
            <Typography variant="default-text" gutterBottom>
              Teams can use our AI-powered Drupal integration to develop a
              distinctive house style, apply art direction on the fly, and
              create stunning and one-of-a-kind branded graphics that are
              uniquely you.
            </Typography>
            <Typography variant="h2" gutterBottom sx={subheadingStyles}>
              Why Quilts?
            </Typography>
            <Typography variant="default-text" gutterBottom>
              Quilting is a transformative art that breathes fresh life into
              fabrics to create something vibrant and new. With its rich history
              in Pennsylvania (the site of DrupalCon '23) and foundations in
              community and collaboration, it was the perfect source of
              inspiration.
            </Typography>
            <Typography variant="h2" gutterBottom sx={subheadingStyles}>
              Made with love by Four Kitchens
            </Typography>
            <Typography variant="default-text" gutterBottom>
              The Web Chefs of Four Kitchens have a natural curiosity and a
              passion for making cool stuff for the web. Want to do good in good
              company? See what drives us and if our values match yours.
            </Typography>
            <Box sx={{ mt: "2.5rem", zIndex: 2, position: "relative" }}>
              <Button
                endIcon={<ArrowOutwardIcon />}
                href="https://www.fourkitchens.com/contact/"
              >
                Meet the team
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

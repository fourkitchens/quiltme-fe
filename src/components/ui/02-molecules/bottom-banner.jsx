/* eslint-disable @next/next/no-img-element */
import { useState, forwardRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Dialog,
  DialogContent,
  Slide,
  IconButton,
} from "@mui/material";
import BackgroundPattern from "../01-atoms/background-pattern";
import LogoIcon from "../../../img/4k-logo.svg";
import CloseIcon from "../../../img/icons/close.svg";
import SmallLogoIcon from "../../../img/small-logo.svg";
import AnimatedSVG from "../01-atoms/animated-svg";
import Team from "../../../img/4k-team.svg";
import FullButton from "../01-atoms/full-button";
import Button from "../01-atoms/button";

const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
      easing={{ enter: "ease-out", exit: "ease-out" }}
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
    bgcolor: "sunset-orange.main",
  };

  const mainContainerStyles = {
    zIndex: 9999,
    "& .MuiModal-backdrop": {
      bgcolor: "sunset-orange.light",
    },

    "& .MuiPaper-root-MuiDialog-paper": {
      m: 0,
      bottom: 0,
      maxWidth: "100%",
    },

    "& .MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollBody": {
      maxWidth: "100%",
      m: 0,
      backgroundColor: "transparent",
      verticalAlign: "bottom",
    },

    "& .MuiDialog-container.MuiDialog-scrollBody.MuiDialog-container::before": {
      content: '""',
      backgroundColor: "pacific-white.main",
      display: ["block", null, "none"],
      position: "absolute",
      top: 0,
      right: 0,
      width: "90%",
      height: "100px",
      zIndex: 2,
    },
  };

  const dialogContentStyles = {
    position: "relative",
    height: "660px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: ["flex-end", null, "center"],
    p: 0,
    pb: [0, null, "36px"],
  };

  const containerStyles = {
    zIndex: 2,
    position: "relative",
    display: ["flex", "flex", "block"],
    flexDirection: ["column", "column", "none"],
    height: ["100%", "100%", "450px"],
  };

  const gridStyles = {
    p: ["89px 0 44px 0", null, "2.188rem 0"],
    backgroundColor: "pacific-white.main",
    position: "relative",
    ml: 0,
    width: ["90%", "90%", "100%"],
    height: ["auto", "auto", "100%"],
    alignSelf: ["flex-end", "flex-end", "none"],
  };

  const patternWrapperStyles = {
    width: "100%",
    height: ["571px", "571px", "660px"],
    position: ["fixed", "fixed", "absolute"],
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  };

  const creditsContainerStyles = {
    display: "flex",
    flexDirection: ["column", "column", "row"],
    justifyContent: "space-between",
    backgroundColor: "gentle-yellow.main",
    p: ["28px", "37px"],
    m: [0, 0, "0 auto"],
    width: "auto",
  };

  const creditsTextStyles = {
    mb: 0,
    maxWidth: ["100%", "100%", "555px"],
    order: [1, null, 0],
  };

  const iconButtonStyles = {
    width: ["279px", "279px", "326px"],
    height: ["37px"],
    p: 0,
    order: [0, null, 1],
    mb: ["26px", null, 0],

    "& svg": {
      display: "block",
      position: "relative",
      width: "auto",
      height: "auto",
    },
  };

  const closeIconButtonStyles = {
    position: "absolute",
    top: ["15px", "20px", 0],
    left: ["15%", "15%", "unset"],
    right: [null, null, "40px"],
    zIndex: 9999,

    "&:hover, &:focus": {
      backgroundColor: "transparent",

      "& svg": {
        "& path": {
          fill: (theme) => theme.palette["sunset-orange"].main,
        },
      },
    },
  };

  const smallLogoIconButtonStyles = {
    display: ["block", null, "none"],
    position: "absolute",
    top: 0,
    right: "24px",
    zIndex: 9999,

    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
  };

  const gridItemStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    pr: ["24px", "24px", "0 !important"],
    pl: ["24px", "24px", "0 !important"],
    pt: "0 !important",
  };

  const gridImageStyles = {
    display: "block",
    position: "relative",
    maxWidth: ["100%", "100%", "40% !important"],

    "& div": {
      width: "100%",
      height: "100%",
      m: "0 auto",
    },

    "& svg": {
      display: "block",
      position: "relative",
      width: "auto",
      height: "auto",
    },
  };

  return (
    <>
      <FullButton sx={fullButtonStyles} onClick={handleClickOpen}>
        Quilted by Four Kitchens
      </FullButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        scroll="body"
        onClose={handleClose}
        aria-describedby="bottom-banner-dialog"
        sx={mainContainerStyles}
      >
        <DialogContent sx={dialogContentStyles}>
          <Stack sx={patternWrapperStyles}>
            <BackgroundPattern />
          </Stack>
          <Box sx={containerStyles}>
            <IconButton
              size="small"
              sx={closeIconButtonStyles}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <IconButton size="large" sx={smallLogoIconButtonStyles}>
              <SmallLogoIcon />
            </IconButton>
            <Grid container spacing={3} sx={gridStyles}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ ...gridImageStyles, ...gridItemStyles }}
              >
                <AnimatedSVG>
                  <Team />
                </AnimatedSVG>
              </Grid>
              <Grid item xs={12} md={6} sx={gridItemStyles}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{ mb: 1 }}
                  id="bottom-banner-dialog"
                >
                  Keeping pace with technology is hard work
                </Typography>
                <Typography variant="default-text" gutterBottom>
                  Our experience in education, advocacy, and publishing informs
                  our unique, content-focused approach to crafting websites that
                  make an impact and stand the test of time. Whether you’re
                  looking for extra hands or a complete redesign, we can help
                  your team realize its potential.
                </Typography>
                <Button href="https://www.fourkitchens.com/contact/">
                  Let’s Talk
                </Button>
              </Grid>
            </Grid>
            <Box sx={creditsContainerStyles}>
              <Typography variant="small-text" sx={creditsTextStyles}>
                Credits: Adam Erickson, Ashley Hitson, Hector Lopez, Joanna
                Cendrowski, Katy Fernández, Kelvin Cheng, Laura Johnson, Mari
                Núñez, Mike Goulding, Randy Dean Oest, Roberto Hernández,
                Sebastianna Skalisky, Mike Zarafonetis.
              </Typography>
              <IconButton
                size="large"
                aria-label="4k-logo"
                sx={iconButtonStyles}
                href="https://www.fourkitchens.com/"
              >
                <LogoIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

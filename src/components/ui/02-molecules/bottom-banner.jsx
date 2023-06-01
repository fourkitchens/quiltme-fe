/* eslint-disable @next/next/no-img-element */
import { useState, forwardRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogContent,
  Slide,
  ButtonBase,
  IconButton,
} from "@mui/material";
import BackgroundPattern from "../01-atoms/background-pattern";
import LogoIcon from "../../../img/4k-logo.svg";
import CloseIcon from "../../../img/icons/close.svg";
import SmallLogoIcon from "../../../img/small-logo.svg";
import Logo from "./logo";
import Team from "../../../img/4k-team.svg";

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
  const bottomButtonStyles = {
    flex: 1,
    display: "flex",
    paddingRight: "47px",
    alignItems: "center",
    justifyContent: "flex-end",
  };

  const mainContainerStyles = {
    "& .MuiModal-backdrop": {
      backgroundColor: "sunset-orange.main",
      opacity: "0.8 !important",
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
    zIndex: 999,

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
    top: "15px",
    right: "24px",
    zIndex: 999,

    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
  };

  const buttonStyles = {
    p: "10px 24px",

    "&:hover, &:focus": {
      "&:before": {
        content: '""',
        border: "2px dashed #F8B722",
        borderRadius: "4px",
        width: ["140px", "140px", "153px"],
        height: "55px",
        position: "absolute",
        left: ["15px", "15px", "15px"],
        top: ["12px", "12px", "16px"],
        zIndex: -1,
      },
    },
  };

  const gridItemStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pr: ["24px", "24px", 0],
    pl: ["24px", "24px", 0],
    pt: 0,
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
      <ButtonBase sx={bottomButtonStyles} onClick={handleClickOpen}>
        <Typography variant="large-text" gutterBottom sx={{ mb: 0 }}>
          Quilted by Four Kitchens
        </Typography>
      </ButtonBase>
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
                sx={{ ...gridImageStyles, gridItemStyles }}
              >
                <Logo>
                  <Team />
                </Logo>
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
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mt: 2, zIndex: 2, position: "relative" }}
                >
                  <Button
                    variant="contained"
                    color="electric-orange"
                    href="https://www.fourkitchens.com/contact/"
                    sx={buttonStyles}
                  >
                    Let’s Talk
                  </Button>
                </Stack>
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

/* eslint-disable @next/next/no-img-element */
import * as React from "react";
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
import BackgroundPattern from '../01-atoms/background-pattern';
import LogoIcon from '../../../img/4k-logo.svg';
import Image from '../01-atoms/image';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BottomBanner() {
  const [open, setOpen] = React.useState(false);
  const scroll = 'body';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Styles
  const bottomButtonStyles = {
    flex: 1,
    display: 'flex',
    paddingRight: '47px',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const mainContainerStyles = {
    "& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop": {
      backgroundColor: 'sunset-orange.main',
      opacity: "0.8 !important",
    },

    "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
      m: 0,
      bottom: 0,
      maxWidth: "100%",
    },

    "& .css-2zwj5t-MuiPaper-root-MuiDialog-paper": {
      maxWidth: '100%',
      m: 0,
      backgroundColor: 'transparent',
      verticalAlign: 'bottom',
    },

    "& .css-2zwj5t-MuiPaper-root-MuiDialog-paper.MuiDialog-paperScrollBody": {
      maxWidth: '100%',
    }

  };

  const dialogContentStyles = {
    position: 'relative',
    height: '660px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: ['flex-end', null, 'center'],
    p: 0,
    pb: [0, null, '36px'],
  };

  const containerStyles = {
    zIndex: 2,
    position: 'relative',
    display: ['flex', 'flex', 'block'],
    flexDirection: ['column', 'column', 'none'],
    alignItems: ['flex-end', 'flex-end', 'none'],
    height: ['100%', '100%', '450px']
  };

  const gridStyles = {
    p: "2.188rem 0",
    backgroundColor: 'pacific-white.main',
    position: 'relative',
    ml: 0,
    width: ['90%', '90%', '100%'],
    height: '100%'
  };

  const patternWrapperStyles = {
    width: '100%',
    height: '660px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  };

  const creditsContainerStyles = {
    display: 'flex',
    flexDirection: ['column', 'column', 'row'],
    justifyContent: 'space-between',
    backgroundColor: 'gentle-yellow.main',
    p: '37px',
    m: '0 auto',
    width: ['100%', '100%', 'auto'],
  };

  const creditsTextStyles = { 
    mb: 0,
    maxWidth: '555px',
    order: [1, null, 0],
  };


  const iconButtonStyles = {
    width: '326px',
    height: '37px',
    p: 0,
    order: [0, null, 1],
    mb: ['26px', null, 0],
  };

  const buttonStyles = {
    p: "10px 24px",

    '&:hover, &:focus': {
      '&:before': {
        content: '""',
        border: '2px dashed #F8B722',
        borderRadius: '4px',
        width: '153px',
        height: '55px',
        position: 'absolute',
        right: '-12px',
        top: '12px',
      },
    }
  };

  const gridImageStyles = {
    pl: 0,
    maxWidth: ['100%', null, '40% !important'],
  };

  const imageSyles = {
    display: 'block',
    position: 'relative',
    width: ['322.67px', '322.67px', '100%'],
    height: ['235.52px', '235.52px', '100%'],

    '& img': {
      display: 'block',
      position: 'relative',
      width: '100%',
      width: '100%',
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
        scroll={scroll}
        onClose={handleClose}
        aria-describedby="bottom-banner-dialog"
        sx={mainContainerStyles}
      >
        <DialogContent sx={dialogContentStyles}>
          <Stack sx={patternWrapperStyles}>
            <BackgroundPattern />
          </Stack>
          <Box sx={containerStyles}>
          <Grid container spacing={3} sx={gridStyles}>
            <Grid item xs={12} md={6} sx={gridImageStyles}>
              <Stack sx={imageSyles}>
                <img
                  src="/4k-team.svg"
                  alt="Four Kitchens Team"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
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
                looking for extra hands or a complete redesign, we can help your
                team realize its potential.
              </Typography>
              <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="electric-orange"
                  href="https://www.fourkitchens.com/"
                  sx={buttonStyles}
                >
                  Let’s Talk
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={creditsContainerStyles}>
            <Typography variant="small-text" sx={creditsTextStyles}>
              Credits: Name, Name, Name, Name, Name, Name, Name, Name, Name, Name, Name, Name, Name, Name, Name
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

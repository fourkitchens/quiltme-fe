import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Dialog,
  Slide,
  ButtonBase,
  IconButton,
} from "@mui/material";
import BackgroundPattern from '../01-atoms/background-pattern';
import LogoIcon from '../../../img/4k-logo.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BottomBanner() {
  const [open, setOpen] = React.useState(false);

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
  };

  const containerStyles = {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: '36px',
    zIndex: 2,
  };

  const gridStyles = {
    p: "2.188rem 3.875rem",
    backgroundColor: 'pacific-white.main',
    height: '100%',
    position: 'relative',
  };

  const patternWrapperStyles = {
    width: '100%',
    height: '70%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  };

  const creditsContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'gentle-yellow.main',
    p: '37px',
    m: '0 auto',
  };

  const creditsTextStyles = { 
    mb: 0,
    maxWidth: '555px',
  };


  const iconButtonStyles = {
    width: '326px',
    height: '37px',
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
        keepMounted
        onClose={handleClose}
        aria-describedby="bottom-banner-dialog"
        sx={mainContainerStyles}
      >
        <Stack sx={patternWrapperStyles}>
          <BackgroundPattern />
        </Stack>
        <Box sx={containerStyles}>
          <Grid container spacing={2} sx={gridStyles}>
            <Grid item xs={6}>
              <Stack>Image</Stack>
            </Grid>
            <Grid item xs={6}>
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
      </Dialog>
    </>
  );
}

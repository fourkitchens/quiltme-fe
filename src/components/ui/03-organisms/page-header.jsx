import LogoIcon from "../../../img/logo.svg";
import Container from '@mui/material/Container';
import AnimatedSVG from '../01-atoms/animated-svg';

export default function PageHeader() {
  const wrapperStyles = {
    flex: 1,
    display: 'flex',
    width: 'max-content',
    justifyContent: 'flex-end',
    pointerEvents: "none",
    position: 'fixed',
    zIndex: 502,
    right: 0,
    top: 0,
    "& svg": {
      width: { xs: "12.5rem",  md: "22.5rem" }
    }
  };

  return (
    <header>
      <Container sx={wrapperStyles} disableGutters>
        <AnimatedSVG>
          <LogoIcon />
        </AnimatedSVG>
      </Container>
    </header>
  );
}

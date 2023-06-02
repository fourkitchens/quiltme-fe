import Logo from '../02-molecules/logo';
import LogoIcon from '../../../img/logo.svg';
import Container from '@mui/material/Container';

export default function PageHeader() {
  const wrapperStyles = {
    flex: 1,
    zIndex: 2,
    display: 'flex',
    width: 'max-content',
    justifyContent: 'flex-end',
    pointerEvents: "none",
    position: 'fixed',
    zIndex: 502,
    right: 0,
    top: 0,
    "& svg": {
      width: { xs: "12.5rem",  lg: "22.5rem" }
    }
  };

  return (
    <header>
      <Container sx={wrapperStyles} disableGutters>
        <Logo>
          <LogoIcon />
        </Logo>
      </Container>
    </header>
  );
}

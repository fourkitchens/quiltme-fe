import Logo from './logo';
import Box from '@mui/material/Box';
import LogoIcon from "../../../img/logo.svg";

export default function PageHeader() {
  const wrapperStyles = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 0,
  };

  return (
    <header>
      <Box sx={wrapperStyles}>
        <Logo>
          <LogoIcon />
        </Logo>
      </Box>
    </header>
  );
}

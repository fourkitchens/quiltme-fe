import { Box } from "@mui/material";
import { keyframes } from '@mui/system';
import LogoIcon from "../../../img/logo.svg";

const dash = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1000;
  }
`;

export default function Logo() {
  return (
    <Box
      sx={{
        '& svg': {
          strokeDasharray: '9 16',
          animation: `${dash} 40s linear infinite`
        }
      }}
    >
      <LogoIcon />
    </Box>
  );
}

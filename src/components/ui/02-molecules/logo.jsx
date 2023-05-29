import { Box } from "@mui/material";
import { keyframes } from '@mui/system';

const dash = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1000;
  }
`;

export default function Logo({ children }) {
  const wrapperStyles = {
    '& svg': {
      strokeDasharray: '9 16',
      animation: `${dash} 40s linear infinite`
    }
  };

  return (
    <Box sx={wrapperStyles}>
      {children}
    </Box>
  );
}

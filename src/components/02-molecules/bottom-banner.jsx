import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BottomBanner() {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            XS-4
          </Grid>
          <Grid item xs={8}>
            XS-8
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

import { Box, Typography, Grid, Link } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#DCDCDC',
        color: '#000',
        padding: '40px 20px',
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: '200px', height: '41px', marginBottom: '10px' }}
          />
          <Typography variant="body2">
            Your ultimate fitness destination. Join us to achieve your fitness
            goals.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: info@goldsgym.com</Typography>
          <Typography variant="body2">
            Phone: +962 78 234 5678
            <Link href="tel:+1234567890" color="inherit"></Link>
          </Typography>
          <Typography variant="body2">
            Address: 123 Fitness St, Gym City, GC 12345
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Suggestions
          </Typography>
          <Typography variant="body2">
            We value your feedback! Share your suggestions with us:
          </Typography>
          suggestions@goldsgym.com
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #555',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Golds Gym. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

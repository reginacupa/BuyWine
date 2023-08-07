import * as React from 'react';
import '../Footer/footer.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
    <Box sx={{ width: 300 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="Email" icon={<EmailOutlinedIcon/>} />
      </BottomNavigation>
    </Box>

    <span>Desenvolvido por Regina Cupa</span>

    </>
    
  );
}
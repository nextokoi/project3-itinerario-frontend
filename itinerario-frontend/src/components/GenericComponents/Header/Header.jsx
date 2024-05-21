import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import bagIcon from '../../../assets/photos/bag.svg'
import itLogo from '../../../assets/photos/itLogo.png'
import itLogo2 from '../../../assets/photos/ItLogo2.png'
import itLogo3 from '../../../assets/photos/itLogo3.png'
import itLogo4 from '../../../assets/photos/itLogo4.png'
import itLogo5 from '../../../assets/photos/itLogo5.png'
import avPhoto from '../../../assets/photos/avPhoto.jpg'
import { useTheme } from '@emotion/react';
import { customTheme } from '../../../themes/custom';
import { styled } from '@mui/material/styles';

const SmallAvatar = styled(Avatar)({
  width: 34,
  height: 34,
});

/* const pages = ['Products', 'Pricing', 'Blog']; */
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const settings = [{ name: 'Profile', path: '/profile' }, { name: 'Logout' }];

function Header() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const theme = useTheme(customTheme)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    if (e.target.outerText === 'Logout') {
      localStorage.removeItem('token')
      navigate('/')
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ minHeight: 160 }} >
      <Container maxWidth="xl" display={"flex"} sx={{ alignContent: "center", alignItems: "center", justifyContent: "center" }}>
        <Toolbar disableGutters display={"flex"} sx={{ alignContent: "center", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, px: 16, py: 6, alignContent: "center", alignItems: "center", justifyContent: "center" }}>
            <Box
              onClick={() => { navigate('/') }}
              component='img'
              src={itLogo5} sx={{ width: '215px' }}></Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Itinero
          </Typography>

          {!localStorage.getItem("token") && (
            <Button component={Link} to={'/login'} sx={{ color: '#fff', mr: 5 }}>Sign in <AccountCircleIcon sx={{ ml: 1 }} /></Button>
          )}

          {localStorage.getItem("token") && (<Box sx={{ flexGrow: 0, pr: 17 }}>
            <Tooltip title="Open settings">
              <IconButton size={"small"} onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SmallAvatar src={avPhoto} sx={{ backgroundColor: '#858585', mr: 1 }} />
                <MenuIcon fontSize={"medium"} sx={{ color: 'white' }} ></MenuIcon>
              </IconButton>

            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              {settings.map((setting) => {
                return (
                  <Link to={setting.path} style={{ textDecoration: 'none' }} key={setting.name} >
                    <MenuItem onClick={handleCloseUserMenu} sx={{ width: '130px', display: 'flex', justifyContent: 'center' }}>
                      <Typography textAlign="center" sx={{ color: "#191C1B" }}>{setting.name}</Typography>
                    </MenuItem>
                  </Link>
                )
              })}

            </Menu>
          </Box>)}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

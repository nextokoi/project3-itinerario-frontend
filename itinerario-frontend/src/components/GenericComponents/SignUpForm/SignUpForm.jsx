import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Linked from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signup } from '../../../services/authService';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Linked component={Link} to={'/signup'} color="inherit" href="https://mui.com/">
        Itinero
      </Linked>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

//const defaultTheme = createTheme();

export default function SignUpForm() {
/*   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data)
    signup({
      "username": data.get('username'),
      "email": data.get('email'),
      "password": data.get('password'),
    });
  }; */
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('')

  const handlePasswordRepeatChange = (e) => {
    setPasswordRepeat(e.target.value)
  }

  const cleanError = () => {
    setError('')
  }

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)

    const username = data.get('username')
    const email = data.get('email')
    const password = data.get('password')

    if (password !== passwordRepeat){
      setError("Passwords don't match")
      return
    }

    try {
      const response = await signup({
        username,
        email,
        password
      });

      console.log(response)

      navigate('/login')

    } catch (error) {

      console.error("Error during login:", error);

    }

  }

  return (
    //<ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} alt="Remy Sharp">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>              
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="off"
                    onChange={cleanError}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
                  onChange={cleanError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  onChange={cleanError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordRepeat"
                  label="Repeat your Password"
                  type="password"
                  id="passwordRepeat"
                  autoComplete="off"
                  value={passwordRepeat}
                  onChange={handlePasswordRepeatChange}
                />
              {error && <p style={{color: 'red'}}> {error} </p>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Linked component={Link} to={'/login'} variant="body2">
                  Already have an account? Sign in
                </Linked>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    //</ThemeProvider>
  );
}



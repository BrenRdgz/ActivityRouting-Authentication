import React, {useState} from "react";
import { useHistory} from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function LoginPage() {
  const history = useHistory();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username !== 'Br3nR' || password !== '123456') {
      setShowError(true) 
      return
    };
    localStorage.setItem('authorized', '1');
    history.push("/");
  };

  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const isValidLogin = () => {
    return username?.length && password?.length;
  };
  return (
    <>
    <br></br>
    <Box
      
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {showError ? <div>
      Error in login
    </div> : null}
    <form onClick={handleLogin}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" component="div">
          <TextField
              label="Username"
              placeholder="Username"
              type="text"
              name="username"
              required
              value={username}
              onChange={handleUsername}
              fullWidth
              variant="outlined"/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <TextField
              label="Password"
              placeholder="password"
              type={"password"}
              name="password"
              required
              value={password}
              onChange={handlePassword}
              fullWidth
              variant="outlined"/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success" size="large" onClick={isValidLogin}>Login</Button>
      </CardActions>
    </Card>
    </form>
    </Box>
    </>
  );
}

export default LoginPage;
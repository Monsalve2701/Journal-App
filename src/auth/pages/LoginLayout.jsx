import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

const LoginLayout = ({ isCheckingAuth, onGoogleSignIn, onSubmit, onInputChange, email, password }) => {


  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container sx={{ mt: 2 }}>
          <Grid item>
            <TextField
              label="Email"
              type={"email"}
              placeholder="Enter your email"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />

            <TextField
              sx={{ mt: 2 }}
              label="Pass"
              type={"password"}
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={isCheckingAuth}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={onGoogleSignIn}
              disabled={isCheckingAuth}
            >
              <Google /> <Typography sx={{ ml: 1 }}> Auth </Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction={"row"} justifyContent="end">
          <Link component={RouterLink} color={"inherit"} to="/auth/register">
            Register
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginLayout;

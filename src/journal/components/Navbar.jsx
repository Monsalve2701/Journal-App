import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar position="fixed"  sx={{ 
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: { sm: `${ drawerWidth }px` }
     }}>
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography variant="h6" noWrap>
            {" "}
            Journal APP
          </Typography>
          <IconButton color="error">
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Box } from "@mui/system";
import { Row } from "react-bootstrap";

export const SideBar = ({ drawerwidth = 240 }) => {
  return (
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerwidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open="true"
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerwidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            {" "}
            Julian Monsalve{" "}
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNotIcon />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText
                    secondary={"Exercitation cillum irure elit consectetur."}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

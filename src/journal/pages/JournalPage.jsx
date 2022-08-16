import { Typography, IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import AddIcon from '@mui/icons-material/Add';

const JournalPage = () => {
  return (
    <JournalLayout>

      {
        /* <NothingSelectedView />  */
      }


        <NoteView />
      
      <IconButton size="large"
      sx={{
        color: "white",
        backgroundColor: "error.main",
        ":hover" : { backgroundColor: "error.main", opacity:0.8 },
        position: "fixed",
        right: 50,
        bottom: 50
      }}>
        <AddIcon sx={{ fontSize: 30 }}/>
      </IconButton>
    
    </JournalLayout>
  );
};

export default JournalPage;

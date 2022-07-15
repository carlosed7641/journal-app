import { AddOutlined, MailLockOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView  } from "../views";

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* {<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, molestias ad aliquid quos omnis, deserunt obcaecati ullam quaerat voluptate consequuntur, sunt dolore odio. Perferendis, deserunt reiciendis sed molestiae tempora quia.</Typography>} */}

            {/* <NothingSelectedView /> */}
            {<NoteView/>}

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': {backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    top: 550,
                    right: 50,
                }}
            >

                <AddOutlined sx={{fontSize: 30}}/>

            </IconButton>
        </JournalLayout>
    );
}


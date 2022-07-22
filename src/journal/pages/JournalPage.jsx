import { AddOutlined, MailLockOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView  } from "../views";

export const JournalPage = () => {

    const dispatch = useDispatch();

    const { isSaving, active} = useSelector(state => state.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout>

            {/* {<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, molestias ad aliquid quos omnis, deserunt obcaecati ullam quaerat voluptate consequuntur, sunt dolore odio. Perferendis, deserunt reiciendis sed molestiae tempora quia.</Typography>} */}

            {
                (!!active) ? <NoteView/> : <NothingSelectedView />

            }
            

            <IconButton
                disabled={isSaving}
                onClick={onClickNewNote}
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


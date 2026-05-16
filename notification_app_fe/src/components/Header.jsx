
import {
    AppBar,
    Toolbar,
    Typography
} from "@mui/material";

function Header() {

    return (

        <AppBar position="static">

            <Toolbar>

                <Typography
                    variant="h6"
                >
                    Campus Notification System
                </Typography>

            </Toolbar>

        </AppBar>
    );
}

export default Header;

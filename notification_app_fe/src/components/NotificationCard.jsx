
import {
    Card,
    CardContent,
    Typography,
    Stack
} from "@mui/material";

import PriorityBadge
from "./PriorityBadge";

function NotificationCard({
    notification
}) {

    return (

        <Card
            sx={{
                marginBottom: 2,
                borderRadius: 3
            }}
        >

            <CardContent>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                >

                    <Typography
                        variant="h6"
                    >
                        {notification.Type}
                    </Typography>

                    <PriorityBadge
                        type={notification.Type}
                    />

                </Stack>

                <Typography
                    sx={{
                        marginTop: 1
                    }}
                >
                    {notification.Message}
                </Typography>

                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {notification.Timestamp}
                </Typography>

            </CardContent>

        </Card>
    );
}

export default NotificationCard;
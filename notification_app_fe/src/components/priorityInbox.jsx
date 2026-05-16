import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import PriorityBadge from "./PriorityBadge";

import { getPriorityScore } from "../utils/priorityCalculator";

const PriorityInbox = ({
  notifications,
}) => {
  return (
    <Grid container spacing={2}>
      {notifications.map((notification) => {
        const score = getPriorityScore(
          notification.Type,
          notification.Timestamp
        );

        return (
          <Grid
            item
            xs={12}
            md={6}
            key={notification.ID}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                transition: "0.3s",
                "&:hover": {
                  transform:
                    "translateY(-4px)",
                },
              }}
            >
              <CardContent>
                <PriorityBadge
                  score={score}
                />

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                >
                  {notification.Message}
                </Typography>

                <Typography
                  color="primary"
                  mb={1}
                >
                  Type:
                  {notification.Type}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {notification.Timestamp}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PriorityInbox;

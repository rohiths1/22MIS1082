import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

function App() {

  const [priorityNotifications,
    setPriorityNotifications] =
    useState([]);

  const sampleNotifications = [

    {
      ID: 1,
      Type: "Placement",
      Message:
        "Google interview schedule released",
      Timestamp:
        "2026-05-16T10:30:00",
    },

    {
      ID: 2,
      Type: "Event",
      Message:
        "Hackathon registration started",
      Timestamp:
        "2026-05-16T08:00:00",
    },

    {
      ID: 3,
      Type: "Result",
      Message:
        "Semester results published",
      Timestamp:
        "2026-05-16T09:30:00",
    },

    {
      ID: 4,
      Type: "Placement",
      Message:
        "Microsoft coding round announced",
      Timestamp:
        "2026-05-16T11:00:00",
    },

    {
      ID: 5,
      Type: "Event",
      Message:
        "Technical symposium tomorrow",
      Timestamp:
        "2026-05-15T18:00:00",
    },

  ];

  const getPriorityScore = (
    type,
    timestamp
  ) => {

    let weight = 0;

    switch (type) {

      case "Placement":
        weight = 50;
        break;

      case "Result":
        weight = 35;
        break;

      case "Event":
        weight = 20;
        break;

      default:
        weight = 10;
    }

    const currentTime =
      new Date().getTime();

    const notificationTime =
      new Date(timestamp).getTime();

    const minutesDifference =
      (currentTime - notificationTime)
      /
      (1000 * 60);

    const recencyBoost =
      Math.max(
        0,
        30 - minutesDifference
      );

    return weight + recencyBoost;
  };

  const sortNotifications = (
    notifications
  ) => {

    return [...notifications].sort(
      (a, b) => {

        return (
          getPriorityScore(
            b.Type,
            b.Timestamp
          )
          -
          getPriorityScore(
            a.Type,
            a.Timestamp
          )
        );
      }
    );
  };

  const getPriorityLabel = (
    score
  ) => {

    if (score >= 40) {
      return {
        label: "HIGH PRIORITY",
        color: "error",
      };
    }

    if (score >= 25) {
      return {
        label: "MEDIUM PRIORITY",
        color: "warning",
      };
    }

    return {
      label: "LOW PRIORITY",
      color: "success",
    };
  };

  useEffect(() => {

    const sorted =
      sortNotifications(
        sampleNotifications
      );

    setPriorityNotifications(
      sorted.slice(0, 10)
    );

  }, []);

  return (

    <Container
      sx={{ marginTop: 5 }}
    >

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Priority Inbox
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Top notifications based on
        priority and recency
      </Typography>

      <Grid
        container
        spacing={3}
      >

        {
          priorityNotifications.map(
            (notification) => {

            const score =
              getPriorityScore(
                notification.Type,
                notification.Timestamp
              );

            const badge =
              getPriorityLabel(score);

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
                  }}
                >

                  <CardContent>

                    <Chip
                      label={badge.label}
                      color={badge.color}
                      sx={{
                        marginBottom: 2,
                      }}
                    />

                    <Typography
                      variant="h6"
fontWeight="bold"
                    >
                      {
                        notification.Message
                      }
                    </Typography>

                    <Typography
                      sx={{
                        marginTop: 1,
                      }}
                    >
                      Type:
                      {
                        notification.Type
                      }
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        marginTop: 1,
                      }}
                    >
                      {
                        notification.Timestamp
                      }
                    </Typography>

                    <Typography
                      sx={{
                        marginTop: 2,
                        fontWeight: "bold",
                      }}
                    >
                      Priority Score:
                      {
                        Math.round(score)
                      }
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>
            );
          })
        }

      </Grid>

    </Container>
  );
}

export default App;
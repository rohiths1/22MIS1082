import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";

function App() {

  const TOKEN =
    "PASTE_YOUR_ACCESS_TOKEN";

  const [notifications,
    setNotifications] =
    useState([]);

  const [filter,
    setFilter] =
    useState("");

  const [page,
    setPage] =
    useState(1);

  const [loading,
    setLoading] =
    useState(true);

  const Log = async (
    stack,
    level,
    packageName,
    message
  ) => {

    try {

      await axios.post(
        "http://4.224.186.213/evaluation-service/logs",

        {
          stack,
          level,
          package: packageName,
          message,
        },

        {
          headers: {
            Authorization:
              `Bearer ${TOKEN}`,
          },
        }
      );

    } catch (error) {

      console.log(
        "Logging failed"
      );
    }
  };

  const fetchNotifications =
    async () => {

      try {

        setLoading(true);

        let url =
         rom "@mui/material";

function App() {

  const [priorityNotifications,
    set

        if (filter) {

          url +=
           ace everything inside:
src/App.j
        }

        const response =
          await axios.get(
            url,
            {
              headers: {
                Authorization:
                   Container,
  Typo
              },
            }
          );

        const data =
          response.data.notifications;

        const sorted =
          sortNotifications(data);

        setNotifications(sorted);

        await Log(
          "frontend",
          "info",
          "api",
          "Notifications fetched successfully"
        );

      } catch (error) {

        await Log(
          "frontend",
          "error",
          "api",
          "Notification fetch failed"
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchNotifications();

  }, [page, filter]);

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
const differenceMinutes =
      (currentTime - notificationTime)
      /
      (1000 * 60);

    const recencyBoost =
      Math.max(
        0,
        30 - differenceMinutes
      );

    return weight + recencyBoost;
  };

  const sortNotifications =
    (notifications) => {

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

  const getPriorityBadge =
    (score) => {

      if (score >= 40) {

        return {
          label:
            "HIGH PRIORITY",
          color: "error",
        };
      }

      if (score >= 25) {

        return {
          label:
            "MEDIUM PRIORITY",
          color: "warning",
        };
      }

      return {
        label:
          "LOW PRIORITY",
        color: "success",
      };
    };

  return (

    <Container
      sx={{
        marginTop: 5,
      }}
    >

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Campus Notification System
      </Typography>

      <FormControl
        fullWidth
        sx={{ mb: 4 }}
      >

        <InputLabel>
          Filter Notifications
        </InputLabel>

        <Select
          value={filter}
          label="Filter Notifications"
          onChange={(e) => {

            setFilter(
              e.target.value
            );

            Log(
              "frontend",
              "info",
              "component",
              "Notification filter changed"
            );
          }}
        >

          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Placement">
            Placement
          </MenuItem>

          <MenuItem value="Result">
            Result
          </MenuItem>

          <MenuItem value="Event">
            Event
          </MenuItem>

        </Select>

      </FormControl>

      {
        loading ? (

          <Stack
            alignItems="center"
            mt={10}
          >

            <CircularProgress />

          </Stack>

        ) : (

          <Grid
            container
            spacing={3}
          >

            {
              notifications.map(
                (notification) => {

                const score =
                  getPriorityScore(
                    notification.Type,
                    notification.Timestamp
                  );

                const badge =
                  getPriorityBadge(
                    score
                  );

                return (

                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={
                      notification.ID
                    }
                  >

                    <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: 4,
                        height: "100%",
                      }}
                    >

                      <CardContent>

                        <Chip
                          label={
                            badge.label
                          }
                          color={
                            badge.color
                          }
                          sx={{
                            mb: 2,
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
                          mt={1}
                        >
                          Type:
                          {
                            notification.Type
                          }
</Typography>

                        <Typography
                          color="text.secondary"
                          mt={1}
                        >
                          {
                            notification.Timestamp
                          }
                        </Typography>

                        <Typography
                          fontWeight="bold"
                          mt={2}
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
        )
      }

      <Stack
        direction="row"
        spacing={2}
        mt={5}
        justifyContent="center"
      >

        <Button
          variant="contained"
          disabled={page === 1}
          onClick={() => {

            setPage(page - 1);

            Log(
              "frontend",
              "debug",
              "page",
              "Previous page opened"
            );
          }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          onClick={() => {

            setPage(page + 1);

            Log(
              "frontend",
              "debug",
              "page",
              "Next page opened"
            );
          }}
        >
          Next
        </Button>

      </Stack>

    </Container>
  );
}

export default App;

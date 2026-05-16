import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";

import Loader from "../components/Loader";

import PriorityInbox from "../components/PriorityInbox";

import { fetchNotifications } from "../services/api";

import {
  sortNotifications,
} from "..
/utils/priorityCalculator";

const PriorityNotifications = () => {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadPriorityNotifications();
  }, []);

  const loadPriorityNotifications =
    async () => {
      setLoading(true);

      const data =
        await fetchNotifications(
          1,
          50
        );

      const sorted =
        sortNotifications(data);

      setNotifications(
        sorted.slice(0, 10)
      );

      setLoading(false);
    };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Priority Inbox
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Top 10 most important
        notifications based on
        priority and recency
      </Typography>

      {loading ? (
        <Loader />
      ) : (
        <PriorityInbox
          notifications={
            notifications
          }
        />
      )}
    </Container>
  );
};

export default PriorityNotifications;
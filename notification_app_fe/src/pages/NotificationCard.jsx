import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

const NotificationCard = ({
  notification,
}) => {
  const getColor = () => {
    if (
      notification.Type ===
      "Placement"
    )
      return "success";

    if (
      notification.Type ===
      "Result"
    )
      return "primary";

    return "warning";
  };

  const isNew = () => {
    const now = new Date();

    const time = new Date(
      notification.Timestamp
    );

    const difference =
      (now - time) / (1000 * 60);

    return difference <= 60;
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          spacing={1}
          mb={1}
        >
          <Chip
            label={notification.Type}
            color={getColor()}
          />

          {isNew() && (
            <Chip
              label="NEW"
              color="error"
            />
          )}
        </Stack>

        <Typography
          variant="h6"
          fontWeight="bold"
        >
          {notification.Message}
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
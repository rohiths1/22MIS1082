export const getPriorityScore = (
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

  const currentTime = new Date().getTime();

  const notificationTime = new Date(
    timestamp
  ).getTime();

  const differenceMinutes =
    (currentTime - notificationTime) /
    (1000 * 60);

  const recencyBoost = Math.max(
    0,
    30 - differenceMinutes
  );

  return weight + recencyBoost;
};

export const sortNotifications = (
  notifications
) => {
  return [...notifications].sort((a, b) => {
    return (
      getPriorityScore(
        b.Type,
        b.Timestamp
      ) -
      getPriorityScore(
        a.Type,
        a.Timestamp
      )
    );
  });
};
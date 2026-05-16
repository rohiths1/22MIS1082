
import { Chip } from "@mui/material";

const PriorityBadge = ({ score }) => {
  let label = "";
  let color = "";

  if (score >= 40) {
    label = "HIGH PRIORITY";
    color = "error";
  } else if (score >= 25) {
    label = "MEDIUM PRIORITY";
    color = "warning";
  } else {
    label = "LOW PRIORITY";
    color = "success";
  }

  return (
    <Chip
      label={`${label} (${Math.round(score)})`}
      color={color}
      sx={{
        fontWeight: "bold",
        marginBottom: 1,
      }}
    />
  );
};

export default PriorityBadge;


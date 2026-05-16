
import {
    MenuItem,
    Select
} from "@mui/material";

function FilterBar({
    selectedType,
    setSelectedType
}) {

    return (

        <Select
            fullWidth
            value={selectedType}
            onChange={(event) => {

                setSelectedType(
                    event.target.value
                );
            }}
        >

            <MenuItem value="">
                All Notifications
            </MenuItem>

            <MenuItem value="Event">
                Event
            </MenuItem>

            <MenuItem value="Result">
                Result
            </MenuItem>

            <MenuItem value="Placement">
                Placement
            </MenuItem>

        </Select>
    );
}

export default FilterBar;


⸻


STEP 11 — PRIORITY BADGE
Create:
src/components/PriorityBadge.jsx
Paste:
import {
    Chip
} from "@mui/material";

function PriorityBadge({ type }) {

    let label = "";

    if (type === "Placement") {

        label = "High Priority";
    }
    else if (type === "Result") {

        label = "Medium Priority";
    }
    else {

        label = "Low Priority";
    }

    return (
        <Chip label={label} />
    );
}

export default PriorityBadge;
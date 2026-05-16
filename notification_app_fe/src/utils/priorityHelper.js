
export function calculatePriority(type) {

    switch (type) {

        case "Placement":
            return 3;

        case "Result":
            return 2;

        case "Event":
            return 1;

        default:
            return 0;
    }
}

export function sortNotifications(data) {

    return [...data].sort((a, b) => {

        const priorityDifference =
            calculatePriority(b.Type)
            -
            calculatePriority(a.Type);

        if (priorityDifference !== 0) {

            return priorityDifference;
        }

        return new Date(b.Timestamp)
            -
            new Date(a.Timestamp);
    });
}

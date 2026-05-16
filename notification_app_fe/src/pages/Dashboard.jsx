import {
    useEffect,
    useState
} from "react";

import {
    Container,
    Typography
} from "@mui/material";

import NotificationCard
from "../components/NotificationCard";

import FilterBar
from "../components/FilterBar";

import PaginationBar
from "../components/PaginationBar";

import {
    getNotifications
}
from "../api/notificationService";

import {
    sortNotifications
}
from "../utils/priorityHelper";

import {
    Log
}
from "../logger/logger";

function Dashboard() {

    const [notifications,
setNotifications] = useState([]);

    const [selectedType,
        setSelectedType] = useState("");

    const [page,
        setPage] = useState(1);

    async function loadData() {

        try {

            await Log(
                "frontend",
                "info",
                "api",
                "Fetching notification data"
            );

            const response =
                await getNotifications(
                    page,
                    10,
                    selectedType
                );

            const sortedNotifications =
                sortNotifications(response);

            setNotifications(
                sortedNotifications
            );

            await Log(
                "frontend",
                "info",
                "state",
                "Notification state updated"
            );

        } catch (error) {

            await Log(
                "frontend",
                "error",
                "api",
                "Notification fetch failed"
            );
        }
    }

    useEffect(() => {

        loadData();

    }, [page, selectedType]);

    return (

        <Container
            sx={{
                marginTop: 4
            }}
        >

            <Typography
                variant="h4"
                gutterBottom
            >
                Student Notifications
            </Typography>

            <FilterBar
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />

            <div
                style={{
                    marginTop: "20px"
                }}
            >

                {
                    notifications.map(
                        (item) => (

                        <NotificationCard
                            key={item.ID}
                            notification={item}
                        />

                    ))
                }

            </div>

            <PaginationBar
                page={page}
                setPage={setPage}
            />

        </Container>
    );
}

export default Dashboard;
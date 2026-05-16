
import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyb2hpdGhAZXhhbXBsZS5jb20iLCJleHAiOjE3Nzg5MjgxNDQsImlhdCI6MTc3ODkyNzI0NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImViZjQ3YzVkLTNiMmItNDVhMS05NjcyLTVlMWM3NDJjODk1OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJvaGl0aCBzIiwic3ViIjoiMzRlNDZhNDMtOTY3Yy00YTc5LWIyZTktNTNmNWRhNTI3OWFlIn0sImVtYWlsIjoicm9oaXRoQGV4YW1wbGUuY29tIiwibmFtZSI6InJvaGl0aCBzIiwicm9sbE5vIjoiMjJtaXMxMDgyIiwiYWNjZXNzQ29kZSI6IlNmRnVXZyIsImNsaWVudElEIjoiMzRlNDZhNDMtOTY3Yy00YTc5LWIyZTktNTNmNWRhNTI3OWFlIiwiY2xpZW50U2VjcmV0IjoiRFZEV2FEdmRRV0pTQ3hVdCJ9.8fMrtu7tofycyVYsHB_Uh51F3JcAZ_vfKdx3NLRmUmA";

const BASE_URL =
    "http://4.224.186.213/evaluation-service/notifications";

export async function getNotifications(
    page,
    limit,
    type
) {

    let requestUrl =
        ${BASE_URL}?page=${page}&limit=${limit};

    if (type) {

        requestUrl +=
           UE + PROFESSIONAL)
This approa
    }

    const response = await axios.get(
        requestUrl,
        {
            headers: {
                Authorization:
                    Bearer ${ACCESS_TOKEN}
            }
        }
    );

    return response.data.notifications;
}

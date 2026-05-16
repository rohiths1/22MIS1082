# Notification Priority System Design
# Stage 1 - Notification Priority Logic

## Overview

The purpose of Stage 1 is to design and implement a notification prioritization mechanism that identifies important notifications and displays them in a separate Priority Inbox.

The prioritization logic is based on:

- notification category

- notification recency

This helps users quickly identify critical notifications.

---

# Notification Categories

The system currently supports three categories:

| Notification Type | Description |

|-------------------|-------------|

| Placement | Placement and recruitment updates |

| Result | Academic result notifications |

| Event | General event notifications |

---

# Priority Assignment

Each category is assigned a weight based on importance.

| Type | Weight |

|------|--------|

| Placement | 50 |

| Result | 35 |

| Event | 20 |

Placement notifications are treated as the highest priority because they usually require immediate action.

---

# Recency Consideration

Recent notifications receive additional priority boost.

Older notifications gradually lose importance over time.

This prevents outdated notifications from dominating the priority list.

---

# Priority Formula
copy



Priority Score =

Category Weight + Recency Boost


Where:
copy



Recency Boost =

30 - Minutes Since Notification


---

# Sorting Strategy

Notifications are sorted using:

1. Highest priority score

2. Latest timestamp

This ensures that important and recent notifications appear first.

---

# Priority Inbox

The Priority Inbox displays:

- top notifications

- high priority alerts

- recent important updates

The inbox improves visibility for urgent notifications.

---

# Features Implemented

- Notification ranking logic

- Priority score calculation

- Top notification selection

- Priority badge display

- Card-based layout

- Responsive design

---

# Benefits

The designed system provides:

- faster access to important updates

- reduced notification clutter

- improved user experience

- better visibility of urgent notifications

---

# Conclusion

Stage 1 successfully implements a scalable notification prioritization strategy that combines category importance and recency analysis to improve notification management efficiency.
# Stage 2 - Frontend Notification Application

## Overview

Stage 2 focuses on developing a frontend notification management application using ReactJS and Material UI.

The application retrieves notifications from the provided API and presents them using a clean, responsive, and interactive user interface.

---

# Features

The implemented frontend application includes:

- Notification dashboard

- Priority Inbox

- Category-based filtering

- Pagination support

- Loading indicators

- Error handling

- Logging middleware integration

- Responsive design

---

# Technology Stack

| Technology | Purpose |

|------------|---------|

| ReactJS | Frontend framework |

| JavaScript | Application logic |

| Material UI | UI components |

| Axios | API communication |

| React Router | Navigation |

---

# Frontend Architecture

The application is divided into reusable modules for maintainability and scalability.

## Main Sections

- Components

- Pages

- Services

- Utilities

- Styles

---

# Components

## Header

Displays application title and navigation.

## Notification Card

Displays:

- notification message

- notification category

- timestamp

- priority label

## Filter Bar

Allows users to filter notifications by category.

## Priority Inbox

Displays top-ranked notifications separately.

## Loader

Displayed during API loading states.

---

# API Integration

The frontend communicates with the provided backend APIs using Axios.

## Notifications API

Used for:

- retrieving notifications

- pagination

- filtering

## Logging API

Used for:

- activity tracking

- API logging

- error monitoring

---

# Logging Middleware

A centralized logging middleware is implemented to record frontend activities.

The middleware logs:

- successful API requests

- failed API requests

- page loading

- filter updates

- notification interactions

---

# Pagination

Pagination is implemented to efficiently manage large notification datasets.

Advantages:

- improved rendering performance

- controlled API usage

- better user experience

---

# Responsive Design

The application supports:

- desktops

- tablets

- mobile devices

Responsive layouts are implemented using Material UI utilities.

---

# Error Handling

The application handles:

- API failures

- empty responses

- invalid data

- loading states

Fallback UI is displayed whenever required.

---

# Performance Optimization

Several frontend optimization techniques are implemented:

- reusable components

- modular architecture

- efficient sorting logic

- reduced unnecessary rendering

- controlled pagination

---

# Security

Protected APIs are accessed using authorization tokens.

Tokens are attached securely through request headers.

Sensitive data is not exposed directly in the UI.

---

# Conclusion

Stage 2 delivers a responsive and scalable frontend notification management application capable of efficiently handling notification retrieval, prioritization, filtering, and user interaction while maintaining a clean and maintainable architecture.
## Introduction

The objective of this project is to build a frontend-based notification management platform that helps users efficiently view and organize campus notifications. Since users may receive multiple notifications frequently, the system focuses on identifying and displaying the most relevant notifications first.

The application is developed using ReactJS and Material UI to provide a clean, responsive, and interactive interface.

---

# Main Objectives

- Retrieve notifications from the provided API
- Display notifications in a user-friendly format
- Identify and display important notifications separately
- Allow filtering of notifications based on category
- Support pagination for large notification datasets
- Integrate centralized logging middleware
- Ensure responsive behavior across devices

---

# Notification Types

The system currently supports three categories of notifications:

- Placement
- Result
- Event

Each category is assigned a different importance level.

---

# Priority Determination

To improve user experience, notifications are ranked using a scoring mechanism. The score depends on two factors:

1. Notification category
2. Notification recency

More important and recent notifications receive higher scores.

---

# Category Importance

| Category | Assigned Score |
|----------|----------------|
| Placement | High |
| Result | Medium |
| Event | Low |

Placement notifications are treated as highly important because they usually require immediate user attention.

---

# Time-Based Importance

Recent notifications are considered more relevant than older notifications. The system increases the overall score for notifications that were generated recently.

This approach prevents outdated notifications from dominating the priority list.

---

# Priority Inbox

A dedicated Priority Inbox section is implemented to display the top notifications with the highest scores.

Features of the Priority Inbox include:

- Highlighted notification cards
- Priority indicators
- Timestamp visibility
- Responsive card layout

The inbox is limited to a smaller set of highly relevant notifications for better readability.

---

# Application Structure

The frontend project is divided into reusable modules to improve maintainability and scalability.

## Major Sections

- Components
- Pages
- Services
- Utilities
- Styles

This separation allows easier debugging and future feature expansion.

---

# Reusable Components

## Header

Displays navigation and application branding.

## Notification Card

Responsible for rendering notification information such as:
- category
- message
- timestamp
- priority label

## Filter Component

Allows users to filter notifications by type.

## Loader

Displayed while API requests are being processed.

## Priority Inbox Component

Displays notifications with the highest ranking scores.

---

# API Integration

The frontend communicates with the provided backend APIs using Axios.

The notifications API is used to:
- retrieve notifications
- apply filters
- manage pagination

The logging API is used to:
- record frontend activities
- monitor API failures
- track important user interactions

---

# Logging Middleware

A reusable logging utility is implemented to avoid repetitive logging logic across components.

The middleware records:
- successful API requests
- failed API requests
- page loading events
- filter updates
- component interactions

Centralized logging improves maintainability and debugging.

---

# Pagination

Pagination support is implemented to improve performance when large numbers of notifications are returned.

Benefits include:
- reduced rendering load
- smoother user experience
- controlled API requests

---

# Responsive Design

The interface is designed to work properly on:

- desktops
- tablets
- mobile devices

Material UI responsive utilities and flexible layouts are used to achieve responsiveness.

---

# Error Handling

The application handles multiple failure scenarios including:

- failed API requests
- empty notification lists
- invalid responses
- loading delays

Fallback UI elements are displayed whenever necessary.

---

# Performance Considerations

Several practices are followed to maintain frontend performance:

- reusable components
- efficient sorting logic
- limited unnecessary re-rendering
- modular architecture
- paginated data loading

---

# Security Measures

The application uses token-based API authentication.

Authorization tokens are included in API headers for protected requests.

Sensitive credentials are not exposed directly within UI components.

---

# Conclusion

The developed notification platform provides a structured and user-friendly solution for managing campus notifications. By combining category-based ranking and recency analysis, the system ensures that users can quickly identify important updates while maintaining a clean and responsive interface.

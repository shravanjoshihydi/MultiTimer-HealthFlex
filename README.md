# Timer Application
# Add Name, Duration, Category and Start your timer

A React.js application built with Vite that allows users to create, manage, and interact with multiple customizable timers. The app features timer categories, progress visualization, grouped timer actions, timer history logging, and customizable alerts.

---

## Features

### Core Features
- **Add Timer:** Create new timers with a name, duration (in seconds), category, and optional halfway alert.
- **Timer List with Grouping:** View timers grouped by categories with expandable/collapsible sections.
- **Timer Management:** Start, pause, reset timers individually or in bulk by category.
- **Progress Visualization:** Visual progress bars for each timer.
- **Timer History:** Logs completed timers with name, group and completion time on a separate history screen.
- **Persistence:** Timers and history are saved locally in `localStorage`.
- **User Feedback:** Once a timer is completed, a modal congratualting user for specific timer is displayed.

---

## Screens

- **Home Screen:** Create timers, manage existing timers, and perform grouped actions.
- **History Screen:** View a log of all completed timers with timestamps.

---

## Technical Details

- **Framework:** React.js with Vite
- **State Management:** React `useState`
- **Routing:** React Router DOM
- **Persistence:** `localStorage` for saving timers and history
- **Timers:** Managed using `setInterval`
- **Styling:** Custom CSS for clean and responsive UI
---

## Installation

1. Clone the repository

```bash
git clone https://github.com/shravanjoshihydi/MultiTimer-HealthFlex.git
cd MultiTimer-HealthFlex
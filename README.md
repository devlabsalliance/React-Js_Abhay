# Weather App - Full Project

This repository contains several key components of a React-based Weather Application, each serving specific functionalities. The app integrates with various React concepts and API calls, from simple state management to error handling.

---

## Table of Contents

- [Project Overview](#project-overview)
- [File Structure](#file-structure)
- [Installation Instructions](#installation-instructions)
- [Tech Stack](#tech-stack)
- [How to Use](#how-to-use)
- [API Configuration](#api-configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is designed to showcase various React functionalities including controlled components, API calls, state management with hooks, error boundaries, form control, and more. It demonstrates how to build a weather app using OpenWeatherMap API along with common React patterns.

---

## File Structure

Here’s an overview of the files and their purposes:

### 1. **API-Call-useAxios**
   - **Purpose:** Handles API calls using Axios, a promise-based HTTP client.
   - **Functionality:** This file sets up an Axios instance and manages API requests to fetch weather data from the OpenWeatherMap API or any other API.
   - **Key Concepts:** Axios, async/await, Promises.

### 2. **Basic_Building**
   - **Purpose:** Contains the basic setup for the weather app.
   - **Functionality:** Includes a simple structure of the React app with minimal styling and basic components such as header and search bar.
   - **Key Concepts:** React components, JSX, styling.

### 3. **Calculator_Control & Calculator_Uncontrol**
   - **Purpose:** Demonstrates controlled vs uncontrolled components in React.
   - **Functionality:** Two versions of a calculator component—one using React state (controlled) and another without React state (uncontrolled).
   - **Key Concepts:** Controlled Components, Uncontrolled Components, `useState`, refs.

### 4. **Cleanup-timer**
   - **Purpose:** Demonstrates the cleanup of side effects such as timers in React.
   - **Functionality:** Uses `useEffect` to set and clear a timer on component mount and unmount.
   - **Key Concepts:** useEffect cleanup, timers.

### 5. **Context-api**
   - **Purpose:** Implements React’s Context API for state management across components.
   - **Functionality:** Creates global state to manage and share data (like user settings, theme preferences) across different parts of the app without prop drilling.
   - **Key Concepts:** React Context API, `useContext`.

### 6. **Counter_App**
   - **Purpose:** Simple counter app to demonstrate state management.
   - **Functionality:** A basic app that lets the user increment and decrement a number.
   - **Key Concepts:** `useState`, event handling.

### 7. **Error-Boundaries**
   - **Purpose:** Demonstrates the concept of error boundaries in React.
   - **Functionality:** Catches JavaScript errors in the app’s component tree and displays a fallback UI.
   - **Key Concepts:** Error Boundaries, `componentDidCatch`, fallback UI.

### 8. **Form_control**
   - **Purpose:** Handles form control in React with controlled components.
   - **Functionality:** A form with inputs that are fully controlled by React state.
   - **Key Concepts:** Controlled components, form handling, `useState`.

### 9. **MultipleComponents**
   - **Purpose:** Shows the interaction of multiple components in a React app.
   - **Functionality:** Includes multiple React components communicating through props and state.
   - **Key Concepts:** React component structure, component communication.

### 10. **Profile-card**
   - **Purpose:** A profile card component.
   - **Functionality:** Displays a user’s information in a styled profile card.
   - **Key Concepts:** Component rendering, CSS styling.

### 11. **Weather-App**
   - **Purpose:** The main app that integrates all the above components.
   - **Functionality:** Displays the current weather using the OpenWeatherMap API and demonstrates various React techniques (API calls, error boundaries, form controls, etc.).
   - **Key Concepts:** API integration, dynamic state updates, user interaction, error handling.

---

## Installation Instructions

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-app.git

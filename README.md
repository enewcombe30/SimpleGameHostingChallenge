# **SimpleGameHosting Frontend Coding Assignment**

This project is a revised version of the original coding challenge provided by SimpleGameHosting. It includes various enhancements and improvements to show case skills and provide better functionality, design, and maintainability.

---

## **Challenge Overview**

Your task is to build a dynamic card-based UI to display server details fetched from an API endpoint. You’ll use React, Tailwind CSS, and optionally other libraries, to create an elegant, responsive layout.

The provided code already fetches server data from a mock API and displays it as JSON on the page. Your job is to replace the JSON display with a set of styled, reusable **ServerCard** components.

---

## **Getting Started**

### Prerequisites

- **Node.js**: Version v22.12.0 or higher
- **npm**: Version 11.0 or higher (or preferred package manager)
- A code editor, like **VSCode** or **NeoVim**

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/enewcombe30/simple-game-hosting-challenge.git
   ```
   ```
   cd simple-game-hosting-challenge
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open your browser at http://localhost:3000 to view the project.

---

## Features

- **Dynamic Server Cards**: Each server in the list is displayed on a card that updates automatically to show key details like the server’s name, game, player count, status, and version.
- **Dark Mode**: A toggle lets users easily switch between light and dark themes, optimising the experience depending on the lighting around them.
- **Separation of Concerns**: The server card logic is managed by a custom hook (`useServerCard`), helping to keep the components clean and modular.
- **Better Responsiveness**: A grid layout ensures server cards adjust gracefully to different screen sizes, improving the overall design.

---

## Updates and Enhancements

### Revised `page.tsx`
- Implemented state management for dark mode using `useState` and created the `handleDarkMode` function to toggle between light and dark themes by adding or removing the `dark` class from the `body`.
- Added a `Toggle` component for switching themes.
- Used `renderServerCards` to loop through the server data and generate individual cards dynamically.

### ServerCard Component
- Displays detailed information about each server, including its name, game, players, and current status.
- Features a button to change the server's status between `online` and `offline`.
- Tailwind-based styling has been improved to dynamically adjust for both light and dark themes.

### Custom Hook: `useServerCard`
- This hook manages the logic for tracking the server’s online/offline status.
- Keeps the UI and business logic separate for cleaner, more maintainable code.

### Custom Hook: `useTextFormatting`
- Provides utility functions for formatting text throughout the app:
  - Capitalises the first letter of lowercase strings received from the API.
  - Adds commas to separate items in arrays when rendered inline.

### Toggle Component
- A reusable toggle switch for managing dark mode:
  - Accepts props like `label`, `labelPosition`, and `onToggle` to customise the toggle.
  - Visual state updates dynamically when toggled.

### Responsive Grid Layout
- A new responsive grid layout for server cards improves the user experience on various devices, making sure the layout adjusts smoothly to screen size changes.

### TypeScript Enhancements
- Defined the `ServerData` type in a new `types.ts` file to clearly outline the structure of server data:
  ```typescript
  export type ServerData = {
    id: number;
    name: string;
    game: string;
    players: string;
    status: string;
    version: string;
    region: string;
    mods: string[];
  };

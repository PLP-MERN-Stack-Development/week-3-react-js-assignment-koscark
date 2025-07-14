# PLP Task Manager README

This README describes the functionality of the added code for the PLP Task Manager project, a React application built with Vite, Tailwind CSS, and React Router.

## Added Code Functionality

- **Task Management**: Enables adding, deleting, marking tasks as completed, and filtering tasks (All, Active, Completed) with local storage persistence using a custom `useLocalStorage` hook.
- **API Integration**: Fetches and displays posts from JSONPlaceholder API, with pagination, search functionality, and loading/error states, implemented in `APIData.jsx`.
- **Responsive Design**: Uses Tailwind CSS for a mobile, tablet, and desktop-friendly layout with utility classes for styling and dark mode support.
- **Theme Switching**: Implements light/dark mode toggle with React Context (`ThemeContext.js`, `ThemeProvider.jsx`), persisting the theme in local storage.
- **Reusable Components**: Includes `Button.jsx` (with variants), `Card.jsx` (boxed content), `Navbar.jsx` (navigation with theme toggle), `Footer.jsx` (links and copyright), and `Layout.jsx` (wraps pages with Navbar and Footer).
- **Routing**: Configures client-side navigation between Home and API Data pages using React Router in `App.jsx`.
- **Animations**: Adds fade-in transitions for task items and API data display, defined in `App.css`.

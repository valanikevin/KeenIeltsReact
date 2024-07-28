# KeenIELTS React Frontend

This repository contains the React frontend for the KeenIELTS platform, which provides practice tests and resources for IELTS preparation.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [URL](#url)

## Features

- User-friendly interface for IELTS preparation
- Integration with backend API for data fetching and user management
- Real-time test taking and result tracking
- Responsive design for various devices
- Daily performance feedback powered by AI
- Secure authentication and authorization

## Screenshots

### Home Page
![Home Page](https://raw.githubusercontent.com/valanikevin/KeenIeltsReact/main/src/assets/images/screenshots/Home.png)

### Books Page
![Books](https://raw.githubusercontent.com/valanikevin/KeenIeltsReact/main/src/assets/images/screenshots/Books.png)

### User Dashboard Page
![User Dashboard](https://raw.githubusercontent.com/valanikevin/KeenIeltsReact/main/src/assets/images/screenshots/Dashboard.png)

### Listening Test Page
![Listening Test](https://raw.githubusercontent.com/valanikevin/KeenIeltsReact/main/src/assets/images/screenshots/ListeningTest.png)

### Reading Test Page
![Reading Test](https://raw.githubusercontent.com/valanikevin/KeenIeltsReact/main/src/assets/images/screenshots/ReadingTest.png)

### Writing Test Page
![Writing Test](https://raw.githubusercontent.com/valanikevin/KeenIeltsReact/main/src/assets/images/screenshots/WritingTest.png)

### Speaking Test Page
![Speaking Test](https://raw.githubusercontent.com/valanikevin/KeenIeltsReact/main/src/assets/images/screenshots/SpeakingTest.png)

## Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite
- **Styling**: Bootstrap, Sass
- **State Management**: React Hooks
- **Routing**: React Router DOM
- **Charts**: Chart.js, React ApexCharts
- **Other Libraries**: 
  - `axios` for API requests
  - `formik` for form handling
  - `react-quill` for rich text editing
  - `react-toastify` for notifications
  - `uuid` for unique identifiers

## Installation

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/valanikevin/KeenIeltsReact.git
   cd KeenIeltsReact
   ```

2. **Install the required dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. **Build the project for production:**

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

5. **Preview the production build:**

   ```bash
   npm run preview
   ```

   or

   ```bash
   yarn preview
   ```

## Configuration

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```
VITE_API_URL=<Your Backend API URL>
VITE_REACT_APP_GOOGLE_ANALYTICS_ID=<Your Google Analytics ID>
```

## Usage

The React frontend serves as the user interface for the KeenIELTS platform. It communicates with the Django backend via REST APIs to handle user authentication, test management, performance tracking, and more.

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## URL

Visit our platform at [keenielts.com](https://keenielts.com)

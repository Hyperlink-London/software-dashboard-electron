# Hyperlink Dashboard

A modern desktop application built with Electron and React, providing a sleek dashboard interface to monitor data from the Hyperlink Pod

![Screenshot 2025-03-03 at 13 04 20](https://github.com/user-attachments/assets/23210543-2386-40bb-9b0c-86d66a71c70b)

![liveupdatinggraph](https://github.com/user-attachments/assets/fac031c0-8d04-47bc-84cc-3abb1bd9bc84)


## Features

- Cross-platform support (Windows, macOS, Linux)
- Modern React-based frontend
- Native desktop experience
- Built with Electron for optimal performance

## Prerequisites

- Node.js (v16 or higher)
- npm or pnpm (recommended)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hyperlink-London/software-dashboard-electron.git
   cd software-dashboard-electron
   ```

2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   ```

## Development

To start the application in development mode:

```bash
npm start
```

This will concurrently run both the React development server and the Electron application.

## Building

To create a production build:

```bash
npm run build
```

This will create platform-specific installers in the `dist` folder.

## Project Structure

- `/electron` - Electron main process code
- `/frontend` - React frontend application
- `/dist` - Production build output

```
software-dashboard-electron/
├── electron/                 # Electron main process
│   └── main.js              # Main entry point for Electron
├── frontend/                 # React frontend application
│   ├── src/                 # Source code
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
├── dist/                    # Production build output
├── node_modules/            # Main process dependencies
├── package.json             # Main process configuration
├── pnpm-lock.yaml          # Lock file for dependencies
└── README.md               # Project documentation
```

## Scripts

- `npm start` - Start the application in development mode
- `npm run build` - Create a production build
- `npm run electron` - Run only the Electron process
- `npm run react` - Run only the React development server

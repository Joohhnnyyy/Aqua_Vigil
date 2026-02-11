# AquaVigil

AquaVigil is an advanced water monitoring and environmental analytics platform designed to provide real-time insights into river health, flood risks, and erosion patterns. The system leverages data visualization and interactive mapping to assist environmental agencies and decision-makers in maintaining aquatic ecosystems and ensuring public safety.

## Overview

The platform serves as a centralized command center for monitoring water resources. It aggregates data from various sensors and satellite inputs to present a comprehensive view of hydrological conditions. AquaVigil enables users to track critical metrics, simulate flood scenarios, and manage alerts for environmental anomalies.

## Key Features

- **Dashboard**: A high-level overview of system status, active alerts, and key performance indicators.
- **River Health Monitoring**: Real-time tracking of water quality parameters such as pH, dissolved oxygen, turbidity, and temperature.
- **Flood Simulation**: Interactive 3D terrain visualization to model flood risks and assess potential impact zones.
- **Erosion Tracking**: LiDAR-based monitoring of riverbank shifts and soil erosion patterns over time.
- **Alert System**: Automated notifications for critical threshold breaches, enabling rapid response to environmental hazards.
- **Interactive Mapping**: Geographic information system (GIS) integration for visualizing sensor locations, flood zones, and terrain data.
- **Data Analytics**: Historical data trends and comparative analysis tools for long-term environmental study.

## Technology Stack

The project is built using a modern, scalable technology stack:

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI (Headless UI primitives)
- **Icons**: Phosphor Icons, Lucide React
- **Data Visualization**: Recharts
- **Mapping**: React Leaflet
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form, Zod
- **Language**: TypeScript

## Getting Started

Follow these instructions to set up the project locally for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aquavigil
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

- `src/app`: Contains the application routes and page logic (App Router).
- `src/components`: Reusable UI components and layout elements.
- `public`: Static assets such as images and fonts.

## Deployment

The application is optimized for deployment on Vercel or any platform supporting Next.js applications. Build the project for production using:

```bash
npm run build
npm start
```

## License

This project is proprietary software. All rights reserved.

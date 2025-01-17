# Bridge

Bridge is a social good app designed to connect homeless individuals with essential goods and services provided by local businesses and charities. It aims to build a bridge between those in need and those who can help, fostering a sense of community, renewal, and support.

This project is my submission for GitHub's [Copilot 1-Day Build Challenge](https://dev.to/challenges/github).

## Features

### For Homeless Individuals

- **Find Resources:** Locate nearby food, shelter beds, and free services.
- **Request Services:** Request assistance such as free haircuts or laundry services.
- **Notifications:** Receive real-time alerts about available goods and services in your area.

### For Charities

- **Manage Resources:** Post and update availability of shelter beds, meals, and other resources.
- **Promote Events:** Share details of upcoming events like soup kitchens or donation drives.
- **Invite Users:** Invite other charities to join the platform.

### For Businesses

- **Share Surplus Goods:** Post leftover food or unsold items to reduce waste and help those in need.
- **Sustainability Impact:** Track metrics on how your contributions are helping the community and reducing waste.
- **Invite Users:** Encourage other businesses to join the initiative.

## User Stories

1. **Hannah (Charity):** A homeless shelter manager who uses Bridge to alert nearby individuals about two available beds and mark them as unavailable once taken.
2. **Joseph (Homeless Individual):** Uses Bridge to request a free barber visit to prepare for a job interview.
3. **Maggie (Business):** A bakery owner who uses Bridge to notify local homeless individuals about surplus baked goods.
4. **Randall (Charity):** A minister who promotes his soup kitchen events through Bridge.

## Technology Stack

- **Frontend:** React (using Vite for project scaffolding)
- **Backend:** Node.js with Express
- **Database:** Mocked JSON data for MVP
- **UI Framework:** Tailwind CSS

## Getting Started

### Prerequisites

- Node.js and npm installed
- VS Code (recommended) with Git and Copilot extensions

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url/bridge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bridge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Running the App

- Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Contribution Guidelines

We welcome contributions to Bridge! To contribute:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your forked repository.
4. Submit a pull request with a detailed description of your changes.

## Mock Data Examples

### User Data

```json
{
  "id": "u1",
  "name": "Mary Smith",
  "role": "charity",
  "email": "mary@shelter.org",
  "verified": true,
  "location": {
    "lat": 40.7128,
    "lng": -74.0060
  }
}
```

### Resource Data

```json
{
  "id": "r1",
  "type": "shelter_bed",
  "title": "2 Available Beds",
  "description": "Two beds available tonight at Mary's Shelter.",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060
  },
  "available": true,
  "createdBy": "u1",
  "expiresAt": "2025-01-13T22:00:00Z"
}
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or suggestions, please reach out to [your email or GitHub profile].

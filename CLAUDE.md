# Asia Golf Specialists - Deployment Rules

## Build & Start
- Install: npm install
- Build: npm run build
- Start: node server.js

## Deployment Requirements (GoDaddy Node.js Beta)
- Port: Always use process.env.PORT || 3000
- Entries: Valid package.json with "name", "version", "main"
- Dependencies: List all in package.json; exclude node_modules from zip
- Environment: Use process.env for all MySQL and API keys
- File Limit: Total zip must be < 100MB

## Technical Standards
- Compliance: Decree 356 (Vietnam) / GDPR
- Analytics: GTM-5J9WTV2X, G-4QFYYD1XDF (Consent-gated)
- Notifications: Send submissions to sales@asiagolfspecialists.com and marcus.giles@asiagolfspecialists.com
- Aesthetic: "Old Money" / "Local Guardian" (Colonial Cream #F5F5DC, Ochre Gold #B8860B)

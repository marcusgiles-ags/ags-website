// Custom Node.js server for GoDaddy hosting
// Reads PORT from environment — GoDaddy sets this automatically.
// Usage: node server.js (after running: npm run build)

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev  = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT || '3000', 10);
const app  = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Asia Golf Specialists ready on http://localhost:${port}`);
    console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
  });
});

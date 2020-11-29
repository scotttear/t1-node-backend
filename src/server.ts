import App from './config/app';
import routes from './routes';

const port = process.env.PORT || 8080;

// Create App instance
const app = new App().app;

// Init routes
routes(app);

// Start server
app.listen(port, () => {
  console.log(`⚡ Server is running on port ${port}.`);
});

import express from 'express';
import blogRoutes from './routes/blogRoutes.js';
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

// Handlebars setup


// Static files
app.use(express.static('public'));

// Routes
app.use('/api/v1/blogs', blogRoutes);

// Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
app.get("/", (req, res) => {
  res.send("Server Running");
});
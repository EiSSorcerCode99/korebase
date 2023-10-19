import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Define a route for the root URL ("/")
app.get('/', (req: Request, res: Response) => {
  // Serve an HTML file as your default webpage.
  // Make sure you have an "index.html" file in a "public" directory.
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

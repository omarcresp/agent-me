import express from "express";
import agents from './agents.json';

const app = express();

app.get("/", (req, res) => {
  res.send("Agent me API")
})

app.get("/api/v1/agents", (req, res) => {
  res.send(agents)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})

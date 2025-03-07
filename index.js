import app from "./src/routes/app.js";

const port = process.env.APP_PORT || 3002;

app.listen(port, () => {
  console.log(`chatting app server listening on port ${port}`);
});

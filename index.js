import express from "express";

const app = express();
// const PORT = process.env.PORT ?? 3000
const PORT = 3000;

app.get('/', (req, res) => {
   
})

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}!`);
});

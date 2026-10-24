import express from 'express';
import cors from 'cors'
const app = express();
const port = process.env.PORT || 5000 ;


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('simple crud running ');
});

app.listen(port, () => {
  console.log(`simple crud  running on port${port}`);
});
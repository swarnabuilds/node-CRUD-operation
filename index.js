import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import 'dotenv/config' 

const app = express();
const port = process.env.PORT || 5000 ;


app.use(cors());
app.use(express.json());

const client = new MongoClient(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-7idjxmv-shard-00-00.r1mauz8.mongodb.net:27017,ac-7idjxmv-shard-00-01.r1mauz8.mongodb.net:27017,ac-7idjxmv-shard-00-02.r1mauz8.mongodb.net:27017/?ssl=true&replicaSet=atlas-t7xq7g-shard-0&authSource=admin`);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  } 
}
await connectToMongoDB();


app.get('/', (req, res) => {
  res.send('simple crud running ');
});

app.listen(port, () => {
  console.log(`simple crud  running on port${port}`);
});
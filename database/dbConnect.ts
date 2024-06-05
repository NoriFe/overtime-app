import { MongoClient } from "mongodb";

const url = "mongodb+srv://norbertfedev:5KEGOAEGYXt7j5wC@cluster0.hrsfgbz.mongodb.net/";
const client = new MongoClient(url);

client.connect()
    .then(() => {
        console.log("Connected successfully to server");

        // Perform a simple operation on the database
        return client.db('cluster0').collection('cluster0').find().toArray();
    })
    .then(docs => {
        console.log('Successfully fetched documents:', docs);
    })
    .catch(error => {
        console.log("Error: ", error);
    });

export default client;
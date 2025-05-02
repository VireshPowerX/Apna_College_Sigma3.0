import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // MongoDB connection string from .env.local
const options = { useNewUrlParser: true, useUnifiedTopology: true };

if (!uri) {
  throw new Error("❌ Please add your MongoDB URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().catch((error) => {
      console.error("🚨 MongoDB connection failed:", error);
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect().catch((error) => {
    console.error("🚨 MongoDB connection failed:", error);
  });
}

export default clientPromise;
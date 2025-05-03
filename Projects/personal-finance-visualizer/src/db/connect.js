import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // MongoDB connection string from .env.local

if (!uri) {
  throw new Error("❌ Please add your MongoDB URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Use global._mongoClientPromise for caching in development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // No caching in production for stability
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Handle errors gracefully
clientPromise.catch((error) => {
  console.error("🚨 MongoDB connection failed:", error);
});

export default clientPromise;
import clientPromise from "../../lib/db";
import { ObjectId } from "mongodb"; // Ensure this is imported

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("personal_finance");
    const transactionsCollection = db.collection("transactions");

    if (req.method === "GET") {
      const transactions = await transactionsCollection.find({}).toArray();
      res.status(200).json(transactions);

    } else if (req.method === "POST") {
      const { amount, date, description, category } = req.body;

      if (!amount || !date || !description || !category) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }

      const result = await transactionsCollection.insertOne({
        amount,
        date,
        description,
        category,
      });

      res.status(201).json({
        message: "Transaction added successfully",
        transaction: { _id: result.insertedId, amount, date, description, category },
      });

    } else if (req.method === "PUT") {
      const { id, amount, date, description, category } = req.body;

      if (!id || !amount || !date || !description || !category) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }
      
      const result = await transactionsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { amount, date, description, category } }
      );

      if (result.matchedCount === 0) {
        res.status(404).json({ message: "No transaction found with the given ID" });
      } else {
        res.status(200).json({
          message: "Transaction updated successfully",
          transaction: { _id: id, amount, date, description, category },
        });
      }

    } else if (req.method === "DELETE") {
      const { id } = req.body; // Ensure this is passed in the request body

      if (!id) {
        res.status(400).json({ message: "ID is required" });
        return;
      }

      // Perform the deletion
      const result = await transactionsCollection.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        res.status(404).json({ message: "No transaction found with the given ID" });
      } else {
        res.status(200).json({ message: "Transaction deleted successfully" });
      }

    } else {
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error handling transactions API:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
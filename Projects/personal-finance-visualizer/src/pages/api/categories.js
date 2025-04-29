import clientPromise from "../../lib/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  try {
    // Connect to the database
    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    if (req.method === "GET") {
      // Fetch all categories
      const categories = await categoriesCollection.find({}).toArray();
      res.status(200).json(categories);

    } else if (req.method === "POST") {
      // Add a new category
      const { name } = req.body;

      if (!name) {
        res.status(400).json({ message: "Category name is required" });
        return;
      }

      const result = await categoriesCollection.insertOne({ name });
      res.status(201).json({
        message: "Category added successfully",
        category: { _id: result.insertedId, name },
      });

    } else if (req.method === "PUT") {
      // Update an existing category
      const { id, name } = req.body;

      if (!id || !name) {
        res.status(400).json({ message: "ID and category name are required" });
        return;
      }

      const result = await categoriesCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { name } }
      );

      if (result.matchedCount === 0) {
        res.status(404).json({ message: "No category found with the given ID" });
      } else {
        res.status(200).json({
          message: "Category updated successfully",
          category: { _id: id, name },
        });
      }

    } else if (req.method === "DELETE") {
      // Delete a category
      const { id } = req.body;

      if (!id) {
        res.status(400).json({ message: "ID is required" });
        return;
      }

      const result = await categoriesCollection.deleteOne({
        _id: new ObjectId(id),
      });

      if (result.deletedCount === 0) {
        res.status(404).json({ message: "No category found with the given ID" });
      } else {
        res.status(200).json({ message: "Category deleted successfully" });
      }

    } else {
      // Unsupported HTTP method
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error handling categories API:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
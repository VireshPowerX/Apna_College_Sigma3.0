import clientPromise from "../../../db/connect";
import { ObjectId } from "mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const categories = await categoriesCollection.find({}).toArray();
    return Response.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name) {
      return Response.json({ message: "Category name is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const result = await categoriesCollection.insertOne({ name });
    return Response.json({
      message: "Category added successfully",
      category: { _id: result.insertedId, name },
    }, { status: 201 });

  } catch (error) {
    console.error("Error adding category:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { id, name } = await req.json();

    if (!id || !name) {
      return Response.json({ message: "ID and category name are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const result = await categoriesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { name } }
    );

    if (result.matchedCount === 0) {
      return Response.json({ message: "No category found with the given ID" }, { status: 404 });
    }

    return Response.json({
      message: "Category updated successfully",
      category: { _id: id, name },
    }, { status: 200 });

  } catch (error) {
    console.error("Error updating category:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return Response.json({ message: "ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const result = await categoriesCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return Response.json({ message: "No category found with the given ID" }, { status: 404 });
    }

    return Response.json({ message: "Category deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting category:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
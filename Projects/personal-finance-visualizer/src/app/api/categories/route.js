import clientPromise from "../../../db/connect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const categories = await categoriesCollection.find({}).toArray();
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("🚨 Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Invalid category name" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const result = await categoriesCollection.insertOne({ name });
    return NextResponse.json({
      message: "Category added successfully",
      category: { _id: result.insertedId, name },
    }, { status: 201 });

  } catch (error) {
    console.error("🚨 Error adding category:", error);
    return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { id, name } = await req.json();

    if (!id || !name || typeof name !== "string") {
      return NextResponse.json({ error: "Invalid ID or category name" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const result = await categoriesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { name } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Category updated successfully",
      category: { _id: id, name },
    }, { status: 200 });

  } catch (error) {
    console.error("🚨 Error updating category:", error);
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const categoriesCollection = db.collection("categories");

    const result = await categoriesCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Category deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("🚨 Error deleting category:", error);
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}
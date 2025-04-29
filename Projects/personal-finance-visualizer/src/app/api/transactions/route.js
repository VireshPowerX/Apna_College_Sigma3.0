import clientPromise from "../../../db/connect";
import { ObjectId } from "mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("personal_finance");
    const transactionsCollection = db.collection("transactions");

    const transactions = await transactionsCollection.find({}).toArray();
    return Response.json(transactions, { status: 200 });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { amount, date, description, category } = await req.json();

    if (!amount || !date || !description || !category) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const transactionsCollection = db.collection("transactions");

    const result = await transactionsCollection.insertOne({
      amount,
      date,
      description,
      category,
    });

    return Response.json({
      message: "Transaction added successfully",
      transaction: { _id: result.insertedId, amount, date, description, category },
    }, { status: 201 });
  } catch (error) {
    console.error("Error adding transaction:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { id, amount, date, description, category } = await req.json();

    if (!id || !amount || !date || !description || !category) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const transactionsCollection = db.collection("transactions");

    const result = await transactionsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { amount, date, description, category } }
    );

    if (result.matchedCount === 0) {
      return Response.json({ message: "Transaction not found" }, { status: 404 });
    }

    return Response.json({ message: "Transaction updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating transaction:", error);
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
    const transactionsCollection = db.collection("transactions");

    const result = await transactionsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return Response.json({ message: "Transaction not found" }, { status: 404 });
    }

    return Response.json({ message: "Transaction deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
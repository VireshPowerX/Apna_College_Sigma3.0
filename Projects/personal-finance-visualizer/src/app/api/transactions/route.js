import clientPromise from "../../../db/connect";
import { NextResponse } from "next/server";

// GET Transactions
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("personal_finance");
    const transactionsCollection = db.collection("transactions");

    const transactions = await transactionsCollection.find({}).toArray();
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    console.error("🚨 Error fetching transactions:", error);
    return NextResponse.json({ error: error.message || "Failed to retrieve transactions" }, { status: 500 });
  }
}

// POST (Add Transaction)
export async function POST(req) {
  try {
    const { amount, date, description, category } = await req.json();

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }
    if (!date || typeof date !== "string") {
      return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
    }
    if (!description || typeof description !== "string" || description.trim() === "") {
      return NextResponse.json({ error: "Description is required" }, { status: 400 });
    }
    if (!category || typeof category !== "string" || category.trim() === "") {
      return NextResponse.json({ error: "Category is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const transactionsCollection = db.collection("transactions");

    const result = await transactionsCollection.insertOne({ amount, date, description, category });

    return NextResponse.json({
      message: "Transaction added successfully",
      transaction: { _id: result.insertedId, amount, date, description, category },
    }, { status: 201 });
  } catch (error) {
    console.error("🚨 Error adding transaction:", error);
    return NextResponse.json({ error: error.message || "Failed to add transaction" }, { status: 500 });
  }
}

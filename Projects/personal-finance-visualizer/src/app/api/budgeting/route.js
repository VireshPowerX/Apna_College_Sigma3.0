import clientPromise from "@/db/connect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET budgets from MongoDB
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("personalFinanceDB"); 
    const budgets = await db.collection("budgets").find().toArray();

    return NextResponse.json(budgets, { status: 200 });
  } catch (error) {
    console.error("🚨 Error fetching budgets:", error);
    return NextResponse.json({ error: "Failed to retrieve budgets" }, { status: 500 });
  }
}

// POST new budget
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("personalFinanceDB");

    const { category, amount } = await req.json();

    if (!category || typeof category !== "string" || category.trim() === "") {
      return NextResponse.json({ error: "Invalid category name" }, { status: 400 });
    }

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Amount must be a positive number" }, { status: 400 });
    }

    const newBudget = { category, amount, _id: new ObjectId() };
    await db.collection("budgets").insertOne(newBudget);

    return NextResponse.json(newBudget, { status: 201 });
  } catch (error) {
    console.error("🚨 Error adding budget:", error);
    return NextResponse.json({ error: "Failed to create budget" }, { status: 500 });
  }
}
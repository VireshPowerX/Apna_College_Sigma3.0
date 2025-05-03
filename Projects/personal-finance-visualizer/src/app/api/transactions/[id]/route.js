import clientPromise from "../../../../db/connect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// PUT (Update Transaction)
export async function PUT(req, context) {
  const { id } = await context.params;

  const { amount, date, description, category } = await req.json();

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid transaction ID" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("personal_finance");
  const transactionsCollection = db.collection("transactions");

  const result = await transactionsCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { amount, date, description, category } }
  );

  if (result.matchedCount === 0) {
    return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Transaction updated successfully" }, { status: 200 });
}

// DELETE (Remove Transaction)
export async function DELETE(req, context) {
  const { id } = await context.params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid transaction ID format" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("personal_finance");
  const transactionsCollection = db.collection("transactions");

  const result = await transactionsCollection.deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Transaction deleted successfully" }, { status: 200 });
}

import clientPromise from "../../../../db/connect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// PUT (Update Transaction)
export async function PUT(req, { params }) {
  try {
    const { id } = params;
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
  } catch (error) {
    console.error("🚨 Error updating transaction:", error);
    return NextResponse.json({ error: error.message || "Failed to update transaction" }, { status: 500 });
  }
}

// DELETE (Remove Transaction)
export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid transaction ID format" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("personal_finance");
    const transactionsCollection = db.collection("transactions");

    const result = await transactionsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      console.warn(`Transaction ID ${id} not found`);
      return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
    }

    console.log(`Transaction ${id} deleted successfully`);
    return NextResponse.json({ message: "Transaction deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("🚨 Error deleting transaction:", error);
    return NextResponse.json({ error: error.message || "Failed to delete transaction" }, { status: 500 });
  }
}

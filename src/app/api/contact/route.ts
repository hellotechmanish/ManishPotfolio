import { NextRequest, NextResponse } from "next/server";
import { connectionToDb } from "@/lib/db";
import Contact from "@/model/contact";
import { ContactInputs } from "@/lib/vakidContact";

const MESSAGE_LIMIT = 3; // max 3 messages
const TIME_WINDOW = 10 * 60 * 1000; // 10 minutes in ms

export async function POST(request: NextRequest) {
  try {
    await connectionToDb();

    // Get IP address from headers or fallback
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

    const body = await request.json();

    if (!body) {
      return NextResponse.json({ error: "No body received" }, { status: 400 });
    }

    // Validate body with Zod
    const validation = ContactInputs.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.issues.map((e) => e.message).join(", ");
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    // Count messages from this IP in the last 5 minutes
    const since = new Date(Date.now() - TIME_WINDOW);
    const messageCount = await Contact.countDocuments({
      ip,
      createdAt: { $gte: since },
    });

    if (messageCount >= MESSAGE_LIMIT) {
      return NextResponse.json(
        { error: "Message limit exceeded. Try again later." },
        { status: 429 }
      );
    }

    // Save contact with IP
    const { name, email, phone, message } = validation.data;
    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
      ip,
    });

    return NextResponse.json(
      { message: "Message send saved successfully", contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json(
      { error: error || "Internal Server Error" },
      { status: 500 }
    );
  }
}

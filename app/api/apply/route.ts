import { NextResponse } from "next/server";
import { applicationSchema } from "@/lib/schema";

// POST /api/apply — receives a coaching application from the quiz.
// Validates at the boundary; on success persist/forward the lead.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { data: null, error: { message: "Invalid request body", code: "BAD_JSON" } },
      { status: 400 },
    );
  }

  const parsed = applicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        data: null,
        error: {
          message: "Some answers need attention.",
          code: "VALIDATION_ERROR",
          fields: parsed.error.flatten().fieldErrors,
        },
      },
      { status: 422 },
    );
  }

  const application = parsed.data;

  // --- Lead handling --------------------------------------------------------
  // In production, forward this to a CRM / email / Google Sheet / WhatsApp API.
  // For now we log it server-side so nothing is lost during integration.
  console.log("[coaching-application]", {
    receivedAt: new Date().toISOString(),
    ...application,
  });

  // Simple goal-based plan recommendation returned to the client.
  const recommendation = recommendPlan(application);

  return NextResponse.json(
    { data: { recommendation }, error: null },
    { status: 201 },
  );
}

function recommendPlan(app: { goal: string; experience: string }): string {
  if (app.goal === "Contest Prep") return "Elite Contest Prep Coaching";
  if (app.experience.startsWith("Complete")) return "Foundation Transformation Plan";
  if (app.goal === "Build Muscle") return "Lean Muscle Builder Plan";
  if (app.goal === "Lose Fat") return "Shred & Sustain Plan";
  return "1-on-1 Premium Coaching";
}

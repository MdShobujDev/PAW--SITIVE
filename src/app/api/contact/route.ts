import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Get credentials from environment variables
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;
    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

    if (!portalId || !formGuid || !accessToken) {
      return NextResponse.json(
        { error: "Missing HubSpot credentials" },
        { status: 500 }
      );
    }

    // HubSpot API endpoint for form submission
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    // Prepare the payload for HubSpot
    const payload = {
      fields: [
        { name: "firstname", value: formData.firstName },
        { name: "lastname", value: formData.lastName },
        { name: "email", value: formData.email },
        { name: "telephone", value: formData.telephone },
        { name: "animal_name", value: formData.animalName },
        { name: "animal_age", value: formData.animalAge },
      ],
    };

    // Send data to HubSpot
    const response = await axios.post(hubspotUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      console.error(
        "Error submitting to HubSpot:",
        error.response?.data || error.message
      );
      return NextResponse.json(
        { error: "Failed to submit to HubSpot", details: error.response?.data },
        { status: 500 }
      );
    }

    // Handle other unexpected errors
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

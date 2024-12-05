import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telephone, animalName, age } = body;

    // Validate the required fields
    if (!name || !email || !animalName || !age) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail address
        pass: process.env.APP_PASSWORD, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Your email to receive the message
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nTelephone: ${telephone}\nAnimal Name: ${animalName}\nAnimal Age: ${age}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telephone:</strong> ${telephone}</p>
        <p><strong>Animal Name:</strong> ${animalName}</p>
        <p><strong>Animal Age:</strong> ${age}</p>
      `,
    };

    // Send email via Nodemailer
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}

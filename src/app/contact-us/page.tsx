"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    animalName: "",
    age: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          telephone: "",
          animalName: "",
          age: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto relative">
      <div className="bg-primary">
        <Link href="/" className="group absolute top-5 left-10">
          <div className="text-4xl text-amber-700">
            <IoMdReturnLeft />
          </div>
          <span className="hidden group-hover:block transition-all ease-linear duration-300 absolute text-sm bg-amber-500 w-24 py-1 rounded-md px-2 top-1 left-10">
            Return Home
          </span>
        </Link>
        <h1 className="text-3xl text-amber-700 pt-10 font-bold text-center">
          Contact With Us
        </h1>
        <div className="flex items-center justify-center py-14 w-full">
          <form
            className="flex items-center flex-col gap-5 w-[60%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1 w-full">
              <label
                className="text-amber-700 font-medium text-lg"
                htmlFor="name"
              >
                Full Name :
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="email"
                className="text-amber-700 font-medium text-lg"
              >
                Your Email :
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="telephone"
                className="text-amber-700 font-medium text-lg"
              >
                Telephone Number :
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="telephone"
                id="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="animalName"
                className="text-amber-700 font-medium text-lg"
              >
                Your Animal Name :
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="animalName"
                id="animalName"
                value={formData.animalName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="age"
                className="text-amber-700 font-medium text-lg"
              >
                Your Animal Age:
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <button
                className="bg-amber-600 text-white px-20 py-3 rounded-md text-lg font-medium hover:bg-amber-500 transition-all ease-linear duration-150"
                type="submit"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
        {status && <p className="text-center mt-4 font-semibold">{status}</p>}
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;

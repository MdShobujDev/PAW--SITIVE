"use client";

import Footer from "@/components/Footer";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdReturnLeft } from "react-icons/io";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    animalName: "",
    animalAge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          animalName: "",
          animalAge: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
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
            Heimkehr
          </span>
        </Link>
        <h1 className="text-3xl text-amber-700 pt-10 font-bold text-center">
          Kontakt mit uns
        </h1>
        <div className="flex items-center justify-center py-14 w-full">
          <form
            className="flex items-center flex-col gap-5 w-[60%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1 w-full">
              <label
                className="text-amber-700 font-medium text-lg"
                htmlFor="firstName"
              >
                Vorname :
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                className="text-amber-700 font-medium text-lg"
                htmlFor="lastName"
              >
                Nachname :
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="email"
                className="text-amber-700 font-medium text-lg"
              >
                Ihre E-Mail :
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
                Telefonnummer :
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
                Ihr Tiername :
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
                htmlFor="animalAge"
                className="text-amber-700 font-medium text-lg"
              >
                Ihr Tieralter :
              </label>
              <input
                className="border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="number"
                name="animalAge"
                id="animalAge"
                value={formData.animalAge}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-1">
              <button
                className="bg-amber-600 text-white px-20 py-3 rounded-md text-lg font-medium hover:bg-amber-500 transition-all ease-linear duration-150"
                type="submit"
              >
                SCHICKEN
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;

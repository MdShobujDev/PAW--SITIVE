import Footer from "@/components/Footer";

// Name, email, telefon, animal, age of animal
function ContactUs() {
  return (
    <div className=" max-w-5xl mx-auto">
      <div className="bg-primary">
        <h1 className=" text-3xl text-amber-700 pt-10 font-bold text-center">
          Contact With Us
        </h1>
        <div className=" flex items-center justify-center py-14 w-full ">
          <form action="" className=" flex items-center flex-col gap-5 w-[60%]">
            <div className="flex flex-col gap-1 w-full">
              <label
                className=" text-amber-700 font-medium text-lg"
                htmlFor="name"
              >
                Full Name :
              </label>
              <input
                className=" border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="email"
                className=" text-amber-700 font-medium text-lg"
              >
                Your Email :
              </label>
              <input
                className=" border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="telephone"
                className=" text-amber-700 font-medium text-lg"
              >
                Telephone Number :
              </label>
              <input
                className=" border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="telephone"
                id="telephone"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="age"
                className=" text-amber-700 font-medium text-lg"
              >
                Your animal Age:
              </label>
              <input
                className=" border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="number"
                name="age"
                id="age"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="animalName"
                className=" text-amber-700 font-medium text-lg"
              >
                Your animal name :
              </label>
              <input
                className=" border-2 rounded border-amber-500 bg-transparent outline-none px-2 py-2"
                type="text"
                name="animalName"
                id="animalName"
              />
            </div>
            <div className="flex flex-col gap-1">
              <button
                className=" bg-amber-600 text-white px-20 py-3 rounded-md text-lg font-medium hover:bg-amber-500 transition-all ease-linear duration-150"
                type="submit"
              >
                SEND
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

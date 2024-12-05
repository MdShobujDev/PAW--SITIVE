import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" bg-secondary min-h-screen w-full flex items-center justify-center">
      <div>
        <h2>404 Not Found!</h2>
        <p>Could not find requested resources</p>
        <Link href="/" className=" text-amber-700 ">
          Return Home
        </Link>
      </div>
    </div>
  );
}

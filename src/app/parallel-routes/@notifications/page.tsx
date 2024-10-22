import Link from "next/link";

export default function Notifications() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Notifications</h1>
      <Link className="mt-4" href="/parallel-routes/archived">
        Go to Achived
      </Link>
    </div>
  );
}

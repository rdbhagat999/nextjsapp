import Link from "next/link";

export default function Archived() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Archived</h1>
      <Link className="mt-4" href="/parallel-routes">
        Go to Notifications
      </Link>
    </div>
  );
}

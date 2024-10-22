export default function Analytics() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);

  if (randomNumber % 2 == 0) {
    throw new Error("Error loading analytics");
  }

  return (
    <>
      <h1 className="text-3xl">Analytics</h1>
    </>
  );
}

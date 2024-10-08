function SlotWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-20 flex justify-center items-center border shadow-md">
        {children}
      </div>
    </>
  );
}

export default function ParallelRoutesLayout({
  children,
  analytics,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto container mt-8">
        <h1 className="text-3xl">Parallel Routes Layout</h1>

        <div className="mt-10">{children}</div>

        <div className="mt-10 flex gap-2 flex-grow">
          <div className="flex flex-col gap-2">
            <SlotWrapper>{analytics}</SlotWrapper>
            <SlotWrapper>{revenue}</SlotWrapper>
          </div>
          <SlotWrapper>{notifications}</SlotWrapper>
        </div>
      </div>
    </>
  );
}

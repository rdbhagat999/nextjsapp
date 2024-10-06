export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params?.slug?.length) {
    return (
      <>
        <h1>Docs page {params?.slug}</h1>
        <h2>Params length is {params?.slug?.length}</h2>
        {params?.slug?.map((p, i) => (
          <p key={p}>
            Param {i + 1} is {p}
          </p>
        ))}
      </>
    );
  }

  return (
    <>
      <h1>DocList page</h1>
    </>
  );
}

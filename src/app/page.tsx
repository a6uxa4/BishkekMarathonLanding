import clsx from "clsx";

function Image({ id }: { id: number }) {
  return (
    <section
      className={clsx(
        "w-[100vw] h-[100vh] flex justify-center items-center relative snap-center"
      )}
    >
      <div>HELLO {id}</div>
    </section>
  );
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} key={image} />
      ))}
    </main>
  );
}

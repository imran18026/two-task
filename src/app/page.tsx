import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">A Two Tasks App </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <Link href={"/recursive-partitioning"}>
            <button className=" px-4 py-2 bg-gray-600 rounded text-white">
              Recursive Partitioning
            </button>
          </Link>
          <Link href={"/alphabet-tile-interaction"}>
            <button className=" px-4 py-2 bg-gray-600 rounded text-white">
              Alphabet Tile Interaction
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

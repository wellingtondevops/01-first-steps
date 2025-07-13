import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Root Page</span>
      <Link href={'/about'}>About Page</Link>
    </main>
  )
}

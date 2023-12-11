import Link from "next/link";
export default function HomePage() {
  return (
    <section className="mainSection">
      <Link href="/volumes" className="mainLink">All Volumes</Link>
    </section>
  );
}

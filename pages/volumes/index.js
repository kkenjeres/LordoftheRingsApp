import React from "react";
import { introduction } from "../../resources/lib/data";
import Link from "next/link";
import BackButton from "@/components/BackButton";

const index = () => {
  return (
    <section>
      <BackButton />
      <header>
        <h1>Lord of the Rings</h1>
        <p className="intro">{introduction}</p>
      </header>
      <div className="nav">
        <h2>All Volumes</h2>
        <ul>
          <li className="link">
            <Link href="/volumes/theFellowshipOfTheRing">
              The Fellowship of the Ring
            </Link>
          </li>
          <li className="link">
            <Link href="/volumes/theTwoTowers">The Two Towers</Link>
          </li>
          <li className="link">
            <Link href="/volumes/theReturnofTheKing">The Return of the King</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default index;

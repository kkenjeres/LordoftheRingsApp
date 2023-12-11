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
              theFellowshipOfTheRing
            </Link>
          </li>
          <li className="link">
            <Link href="/volumes/theTwoTowers">theTwoTowers</Link>
          </li>
          <li className="link">
            <Link href="/volumes/theReturnofTheKing">theReturnofTheKing</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default index;

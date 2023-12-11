import React from "react";
import { introduction } from "../../resources/lib/data";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/router";
import { movies } from "../../resources/lib/data";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import Head from "next/head";

const index = () => {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const handleRandomMovie = () => {
    const randomMovie = getRandomElement(movies);
    router.push(`/volumes/${randomMovie.slug}`);
  };

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <BackButton />
      <header>
        <h1>Lord of the Rings</h1>
        <p className="intro">{introduction}</p>
      </header>
      <div className="nav">
        <h2>All Volumes</h2>
        <ul>
          {movies.map(({ slug, title }) => (
            <li key={slug} className="link">
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <button onClick={handleRandomMovie} className="randomBtn">
          <GiPerspectiveDiceSixFacesRandom className="icon" />
          Go to Random Movie
        </button>
      </div>
    </>
  );
};

export default index;

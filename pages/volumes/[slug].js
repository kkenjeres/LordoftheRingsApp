import Head from "next/head";
import { useRouter } from "next/router";
import { movies } from "../../resources/lib/data";
import BackButton from "@/components/BackButton";
import Image from "next/image";
const VolumeDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const currentMovie = movies.find((movie) => movie.slug === slug);

  if (!currentMovie) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentMovie.title}</title>
      </Head>
      <BackButton />
      <header>
        <h1>{currentMovie.title}</h1>
        <Image
          src={currentMovie.cover}
          height={300}
          width={300}
          alt={currentMovie.title}
        />
        <div className="content">
          <p>{currentMovie.description}</p>
          <ul>
            {currentMovie.books.map((book, index) => (
              <li key={index}>
                {index + 1}. {book.title}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default VolumeDetail;

import BackButton from "@/components/BackButton";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";
const TheFellowshipOfTheRing = () => {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <BackButton />
      <header>
        <h1>{volume.title}</h1>
        <Image src={volume.cover} height={300} width={300} alt={volume.title} />
        <div className="content">
          <p>{volume.description}</p>
          <ul>
            {volume.books.map((book, index) => (
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

export default TheFellowshipOfTheRing;

import Link from "next/link";

interface ElementCardTypes {
  image: string;
  name: string;
  type: string;
}
const ElementCard = ({ image, name, type }: ElementCardTypes) => {
  const linkElement = name.toLowerCase().split(" ").join("-")
  return (
    <Link href={type==="stand" ? "/stands/"+linkElement : "/characters/" + linkElement}>
      <a className="card">
        <img className="card-image" src={image} />
        <h1 className="card-text">{name}</h1>
      </a>
    </Link>
  );
};

export default ElementCard;

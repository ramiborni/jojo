import Nav from "../../components/Nav";
import MainContainer from "../../components/MainContainer";
import { GetServerSideProps } from "next/types";
import CharacterStand from "../../models/CharacterStand";
import Footer from "../../components/Footer";
import Error from 'next/error'

const Character = ({ character,error }: { character: CharacterStand,error:string }) => {
  const InfoCard = ({ title, info }: { title: string; info: string }) => (
    <div className="flex flex-col justify-center text-center gap-y-3">
      <h2 className="tracking-widest">{title.toUpperCase()}</h2>
      <div className="bg-[#F8F9F6] px-5 py-2 font-bold rounded-2xl">{info}</div>
    </div>
  );
  if (error) {
    return <Error statusCode={404} />;
  }
  return (
    <>
    
      <Nav />
      <MainContainer>
        <section className="card-info">
          <div className="col-span-2">
            <img className="m-auto" src={character.user_image} />
          </div>
          <div className="col-span-4 flex flex-col">
            <h1 className="title">{character.user}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-start gap-6">
              <InfoCard title="Stand" info={character.Stand} />
              <InfoCard title="Gender" info={character.gender} />
              <InfoCard title="Hair color" info={character.hair_color} />
              <InfoCard title="Eyes color" info={character.eye_color} />
            </div>
          </div>
        </section>
      </MainContainer>
      <Footer />
    </>
  );
};
export default Character;

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  const response = await fetch("https://jojoapi.herokuapp.com/");
  const data = await response.json();
  const characters = [
    ...data.StardustCrusaders,
    ...data.DiamondIsUnbreakable,
    ...data.GoldenWind,
  ];
  const result = characters.find(
    (character) =>
      character.user.toLowerCase() ===
      params?.character?.toString().split("-").join(" ")
  );
  if (!result) {
    console.log('ERROR MOTHERFUCKER')
    res.statusCode = 404;
    return {
      props: {
        error: 404,
      },
    };
  }
  return {
    props: { character: result },
  };
};

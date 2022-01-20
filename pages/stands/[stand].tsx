import Nav from "../../components/Nav";
import MainContainer from "../../components/MainContainer";
import { GetServerSideProps } from "next/types";
import CharacterStand from "../../models/CharacterStand";
import Footer from "../../components/Footer";
const Stand = ({ stand }: { stand: CharacterStand }) => {
  const InfoCard = ({ title, info }: { title: string; info: string }) => (
    <div className="flex flex-col justify-center text-center gap-y-3">
      <h2 className="tracking-widest">{title.toUpperCase()}</h2>
      <div className="bg-[#F8F9F6] px-5 py-2 font-bold rounded-2xl">
          {info}
      </div>
      
    </div>
  );

  return (
    <>
      <Nav />
      <MainContainer>
        <section className="card-info">
          <div className="col-span-2">
            <img className="m-auto" src={stand.stand_image} />
          </div>
          <div className="col-span-4 flex flex-col">
            <h1 className="title">{stand.Stand}</h1>
            <div className="grid grid-cols-2 justify-start gap-6">
              <InfoCard title="Stand User" info={stand.user} />
              <InfoCard title="Stand Type" info={stand.stand_type.join(', ')} />

            </div>
          </div>
        </section>
      </MainContainer>
      <Footer/>

    </>
  );
};
export default Stand;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch("https://jojoapi.herokuapp.com/");
  const data = await res.json();
  const stands = [
    ...data.StardustCrusaders,
    ...data.DiamondIsUnbreakable,
    ...data.GoldenWind,
  ];
  console.log(params);
  const result = stands.find(
    (stand) =>
      stand.Stand.toLowerCase() ===
      params?.stand?.toString().split("-").join(" ")
  );
  return {
    props: { stand: result },
  };
};

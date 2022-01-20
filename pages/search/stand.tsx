import ElementCard from "../../components/ElementCard";
import Loading from "../../components/Loading";
import MainContainer from "../../components/MainContainer";
import Nav from "../../components/Nav";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetServerSideProps } from "next/types";
import Footer from "../../components/Footer";
const StandSearch = ({s} : {s:string}) => {
  const router = useRouter();
  const searchStand = async () => {
    const response = await fetch("https://jojoapi.herokuapp.com/");
    const data = await response.json();
    const c_data = [
      ...data.StardustCrusaders,
      ...data.DiamondIsUnbreakable,
      ...data.GoldenWind,
    ];
    const stands = c_data.map(c => c.Stand)
    const filtered = c_data.filter(({Stand}, index) => !stands.includes(Stand, index + 1))
    const result = filtered.filter((c) =>
      c.Stand.toLowerCase().includes(s)
    );
    return result;
  };
  const { data, status } = useQuery("stand_search", searchStand);
  const Result = () => (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((character, i) => (
        <ElementCard
          key={character.Stand + "_" + i}
          image={character.stand_image}
          name={character.Stand}
          type="stand"
        />
      ))}
    </section>
  );
  return (
    <>
      <Nav />
      <MainContainer>
        <>
          <section className="flex flex-row">
            <h1 className="title">Search Stand ( {s} )</h1>
            <div className="flex-1"></div>
            <Link href="/">
              <a className="hidden lg:block">Search</a>
            </Link>
          </section>
          {status === "loading" ? <Loading /> : <Result />}
        </>
      </MainContainer>
      <Footer/>

    </>
  );
};

export default StandSearch;


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: { s: query?.s?.toString().toLowerCase() || null },
  };
};

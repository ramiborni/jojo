import Loading from "../../components/Loading";
import MainContainer from "../../components/MainContainer";
import Nav from "../../components/Nav";
import { useQuery } from "react-query";
import ElementCard from "../../components/ElementCard";
import Stand from "../../models/Stand";
import Footer from "../../components/Footer";


const Index = () => {
  const fetchStands = async () => {
    const response = await fetch("https://jojoapi.herokuapp.com/");
    const data = await response.json();
    const s_data : Stand[]= [ ...data.StardustCrusaders,
      ...data.DiamondIsUnbreakable,
      ...data.GoldenWind,]   
    return s_data;
  };
  const { data, status } = useQuery("stands", fetchStands);

  const Result = () => {
    console.log({data,status})
    return <section className="grid grid-cols-4">
      {data?.map((stand, i) => (
        <ElementCard
          key={stand.Stand + "_" + i}
          image={stand.stand_image}
          name={stand.Stand}
          type="stand"
        />
      ))}
    </section>
  };

  return (
    <>
      <Nav />
      <MainContainer>
        <>
          <section>
            <h1 className="title">Jojo's stands</h1>
          </section>
          {status === "loading" ? <Loading /> : <Result />}
        </>
      </MainContainer>
      <Footer/>

    </>
  );
};

export default Index;

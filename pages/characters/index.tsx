import ElementCard from "../../components/ElementCard";
import MainContainer from "../../components/MainContainer";
import Nav from "../../components/Nav";
import { useQuery} from "react-query";
import Loading from "../../components/Loading";
import Character from "../../models/Character";
import Footer from "../../components/Footer";


const Index = () => {
  const fetchCharacters = async () => {
    const response = await fetch("https://jojoapi.herokuapp.com/");
    const data = await response.json();
    const c_data: Character[] = [
      ...data.StardustCrusaders,
      ...data.DiamondIsUnbreakable,
      ...data.GoldenWind,
    ];
    return c_data;
  };

  const {data, status} = useQuery("characters", fetchCharacters);

 
  const Result  = () => <section className="grid grid-cols-4">
  {data?.map((character, i) => (
    <ElementCard
      key={character.user + "_" + i}
      image={character.user_image}
      name={character.user}
      type="character"
    />
  ))}
</section>

  return (
    <>

      <Nav />
      <MainContainer>
        <>
          <section>
            <h1 className="title">Jojo's Characters</h1>
          </section>
          {
            status==="loading"? <Loading/> : <Result/>
          }
        </>
      </MainContainer>
      <Footer/>
    </>
  );
};

export default Index;

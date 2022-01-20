import { useState } from "react";
import { useRouter } from "next/router";

const SearchHome = () => {
  const router = useRouter();
  const [isSearchCharacter, setIsSearchCharacter] = useState(true);
  const [searchText, setSearchText] = useState("");
  const Search = (e:any) => {
    e.preventDefault();
    if (searchText != "") {
      if (isSearchCharacter) {
        router.push("/search/character?s=" + searchText.trim().toLowerCase());
      } else {
        router.push("/search/stand?s=" + searchText.trim().toLowerCase());
      }
    }
  };
  const handleKeypress = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      alert("Done");
      Search(e);
    }
  };

  return (
    <section>
      <form className="search-container">
        <div className="relative">
          <input
            placeholder={
              "Search for Jojo's " + (isSearchCharacter ? "character" : "stand")
            }
            className="search-home"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeypress}
          />
          <div className={isSearchCharacter ? "it-was-me-dio":"hidden"}>
            <img width="80" src="https://i.imgflip.com/376hra.png" />
          </div>
          <div className={!isSearchCharacter ? "ZAWARUDO":"hidden"}>
            <img width="30" src="/ZAWARUDO.png"/>
          </div>
        </div>
        <div className="ml-4 flex flex-row gap-x-5">
          <label className="inline-flex items-center mt-3">
            <input
              type="radio"
              className="search-radio form-checkbox"
              checked={isSearchCharacter}
              onChange={() => setIsSearchCharacter(true)}
            />
            <span className="ml-2">Characters</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="radio"
              className="search-radio form-checkbox"
              checked={!isSearchCharacter}
              onChange={() => setIsSearchCharacter(false)}
            />
            <span className="ml-2">Stands</span>
          </label>
        </div>
        <button onClick={Search} className="search-button">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchHome;

import React from "react";
import "./App.css";
import axios from "axios";
import UploadVideo from "./UploadVideo";

function App() {
  // const [dbList, setDbList] = React.useState([]);
  // React.useEffect(() => {
  //   const getDBList = async () => {
  //     const dbList = await axios.get(
  //       "https://duybao1302.azurewebsites.net/user"
  //     );
  //     await console.log(dbList.data);
      // dbList.data.results.forEach(async (pokemonUrl: PokemonUrl) => {
      //   const pokemon = await axois.get(`${pokemonUrl.url}`);
      //   setPokemons((pokes) => [...pokes, pokemon.data]);
      // });
  //   };
  //   getDBList();
  // }, []);

  // const string = {
  //   name: "Nam",
  //   id: "1",
  // };

  // const dbCommeOn = () => {
  //   const submit = axios
  //     .post("https://duybao1302.azurewebsites.net/user", string)
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

  return (
    <div className="App">
    {/* <button onClick={dbCommeOn}>DB Common</button> */}
      {/* <form>
        <div className="form-header">
          <div className="form-title">Đăng bán</div>
          <div className="exit-btn">&times;</div>
        </div>
        <label className="fillInputBtn" htmlFor="fileInput">
          Thêm ảnh/video
        </label>
        <input type="file" id="fileInput" />
      </form> */}
      <UploadVideo/>
    </div>
  );
}

export default App;

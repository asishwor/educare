import Banner from "./Components/Banner/Banner";
import { BannerHeaderContainer } from "./Components/Banner/Banner.style";
import Header from "./Components/Header/Header";

function App(): JSX.Element {
  return (
    <div className="App">
      <BannerHeaderContainer>
        <Header />
        <Banner />
      </BannerHeaderContainer>
    </div>
  );
}

export default App;

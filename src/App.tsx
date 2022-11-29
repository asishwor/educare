import Banner from "./Components/Banner/Banner";
import { BannerHeaderContainer } from "./Components/Banner/Banner.style";
import Goals from "./Components/Goals/Goals";
import Header from "./Components/Header/Header";

function App(): JSX.Element {
  return (
    <>
      <BannerHeaderContainer>
        <Header />
        <Banner />
      </BannerHeaderContainer>
      <Goals />
    </>
  );
}

export default App;

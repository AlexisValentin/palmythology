import HomePageSection from "../navigation/HomePageSection";
import { HomePageMainContainer } from "./HomePage.styled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageMainContainer>
      <HomePageSection />
    </HomePageMainContainer>
  );
};

export default HomePage;

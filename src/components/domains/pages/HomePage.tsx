import HomePageSubSection from "../navigation/HomePageSection";
import { HomePageMainContainer } from "./HomePage.styled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageMainContainer>
      <HomePageSubSection />
    </HomePageMainContainer>
  );
};

export default HomePage;

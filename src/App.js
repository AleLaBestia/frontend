import styled from "styled-components";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import Footer from "./components/Footer";
import FQASection from "./components/FQASection";
import Header from "./components/Header";
import MessagingSection from "./components/MessagingSection";
import PaymentSection from "./components/PaymentSection";
import { OuterLayout } from "./styles/Layouts";
import { Fade } from "react-reveal";

const MainStyled = styled.main``;

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <Fade left>
            <CardSection />
          </Fade>
          <Fade right>
            <ChartSection />
          </Fade>
          <Fade bottom>
            <MessagingSection />
          </Fade>
          <Fade bottom>
            <PaymentSection />
          </Fade>
          <Fade right>
            <FQASection />
          </Fade>
        </MainStyled>
      </OuterLayout>
      <Fade bottom>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;

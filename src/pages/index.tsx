import React from "react";

import { Container, Background, Content } from "../styles/login";
import Form from "../components/Form";

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Background />
        <Content>
          <Form />
        </Content>
      </Container>

      <footer></footer>
    </div>
  );
};

export default Home;

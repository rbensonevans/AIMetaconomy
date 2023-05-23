import React from "react";
import "./index.css";
import {
  AppContainer,
  Container,
  Card,
  HeaderDiv,
  Subtitle,
  Title,
  Footer,
  TextLink,
} from "./theme";
import { ToDoForm } from "./ToDoForm";
import { useMUD } from "./MUDContext";
import { useEntityQuery } from "@latticexyz/react";
import { getComponentValueStrict, Has } from "@latticexyz/recs";
import { ToDoItem } from "./ToDoItem";
import { Timer } from "./Timer";

export const App = () => {

  const {
    components: {
      ToDo,
    },
  } = useMUD();

  const todoIds = useEntityQuery([Has(ToDo)]);

  return (
    <Container>
      <AppContainer>
        <HeaderDiv>
          <Title>AIMetaconomy</Title>
          <Subtitle>Simulating Gold-backed Economies</Subtitle>
        </HeaderDiv>


        <Card>
          {/* 
          {todoIds}
          {[...todoIds].map(id => {
            const todoData = getComponentValueStrict(ToDo, id);
            return <ToDoItem key={id} id={id} {...todoData} />
          })}
       
          <ToDoForm />
  */} 

           <Timer maxValue={10}/>
        </Card>

        <Footer>
          <TextLink href="https://v2.mud.dev">MUD docs</TextLink>
        </Footer>
      </AppContainer>
    </Container>
  );
};

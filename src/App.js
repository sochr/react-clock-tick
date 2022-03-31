import * as React from "react";
import Container from "@mui/material/Container";
import Clock from "./clock";
import Toggle, { LoginButton } from "./components/toggle";

export default function App() {
  return (
    <Container maxWidth="sm">
      <h1>Clock Test</h1>
      <hr></hr>
      <Clock />
      <Clock />
      <Clock />
      <hr></hr>
      <Toggle />
      <hr></hr>
      <LoginButton />
    </Container>
  );
}

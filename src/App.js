import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import FormikSearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <FormikSearchForm />
      <Route exact path='/' render={props => <CharacterList {...props} />} />
      <Route
        path='/character/:id'
        render={props => <CharacterCard {...props} />}
      />
    </main>
  );
}

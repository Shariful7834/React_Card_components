import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <Header />
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        phone={contacts[3].phone}
        email={contacts[3].email}
      />
      <Card
        name={contacts[4].name}
        img={contacts[4].imgURL}
        phone={contacts[4].phone}
        email={contacts[4].email}
      />
      <Footer />
    </div>
  );
}
export default App;

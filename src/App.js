import "bootstrap/dist/css/bootstrap.min.css";
import { MyNavbar } from "./Components/MyNavbar";
import { AddContact } from "./Components/AddContact";
import { ContactCard } from "./Components/ContactCard";
import { Container } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import { uuid } from "uuidv4";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const clearAll = () => {
    localStorage.getItem("contacts");
    setContacts([]);
  };

  return (
    <Fragment>
      <MyNavbar clearAll={clearAll} />
      <hr className="dropdown-divider" />
      <Container>
        <AddContact addContact={addContact} />
        <hr className="dropdown-divider" />
        <div className="">
          {contacts.map((contact) => (
            <ContactCard
              data={contact}
              key={contact.id}
              delete={removeContact}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
}

export default App;

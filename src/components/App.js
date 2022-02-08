import React from "react";
import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import { getContacts } from "../utils/contacts";
import { useState, useEffect } from "react";

// import Context 
import contactsContext from "../context/contactsContext";

const mockContacts = [
  {
    "id": 1,
    "firstName": "Culley",
    "lastName": "Snelman",
    "profilePic": "https://i.pravatar.cc/300?u=1",
    "phoneNumber": "351-346-6140",
    "email": "csnelman0@blog.com",
    "address": "09 Eggendart Parkway"
  }, 
  {
    "id": 2,
    "firstName": "Tammara",
    "lastName": "Allcorn",
    "profilePic": "https://i.pravatar.cc/300?u=2",
    "phoneNumber": "676-783-9239",
    "email": "tallcorn1@senate.gov",
    "address": "78145 Brentwood Court"
  }, 
  {
    "id": 3,
    "firstName": "Cassandry",
    "lastName": "Roze",
    "profilePic": "https://i.pravatar.cc/300?u=3",
    "phoneNumber": "223-879-6692",
    "email": "croze2@w3.org",
    "address": "2079 Morrow Parkway"
  }, 
  {
    "id": 4,
    "firstName": "Koressa",
    "lastName": "Galey",
    "profilePic": "https://i.pravatar.cc/300?u=4",
    "phoneNumber": "761-858-5580",
    "email": "kgaley3@economist.com",
    "address": "5 Hanover Alley"
  }
];

////////////////////////// app component //////////////////////////

function App(props) {

  const [contacts, setContacts] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedContacts = getContacts();

    setContacts(storedContacts.length ? storedContacts : mockContacts);
  }, []);

    

    return (
      //  Context Provider with the contacts value 
      <contactsContext.Provider value = {{
        contacts: contacts, 
        theme,
        toggleTheme: ()=> { setTheme (theme === 'light'?'dark': 'light'); }
        }} >
        <div>
          {/* <LoginPage />
          <RegisterPage /> */}
          <ContactsPage/>
          {/* <ContactDetailsPage contact={this.state.contacts[0]} />
          <ContactCreatePage /> */}
        </div>        
      </contactsContext.Provider>

    );
  }


export default App;

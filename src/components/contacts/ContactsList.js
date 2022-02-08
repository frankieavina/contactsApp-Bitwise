import { useContext } from "react";
import ContactCard from "./ContactCard"
// import context location 
import contactsContext from "../../context/contactsContext";

const ContactList = () => {


    // Context Consumer. Using useContext for pass the info from contacts 
    const {contacts,theme, toggleTheme} = useContext(contactsContext); 

    
    return (
        <div style={
            theme === "light" ? { background: "#ddfaa2" } : { background: "#222" }
          }>
            {contacts.map((contact) => (
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            ))}

            <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    )
}

export default ContactList;
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact => {
    const name = contact.name.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return name.includes(searchTermLower);
  });

  return (
    <div className="App">
      <header>
        <h1>Contacts</h1>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name"
        />
      </header>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
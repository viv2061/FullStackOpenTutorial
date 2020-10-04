import React, { useState } from 'react';
import PersonComp from "./components/PersonComp";
import AddContacts from "./components/AddContacts";
import SearchField from "./components/SearchField";

class Person {
    constructor (id = 0, name = "", phoneNumber = "") {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
}

const App = () => {
    const [people, setPeople] = useState([
        new Person(1, 'Arto Hellas', '040-123456'),
        new Person(2, 'Ada Lovelace', '39-44-5323523'),
        new Person(3, 'Dan Abramov', '12-43-234345' ),
        new Person(4, 'Mary Poppendieck', '39-23-6423122')
    ]);
    const [newPerson, setNewPerson] = useState(new Person());
    const [filteredPeople, setFiltered] = useState(people);

    const handleInputName = (e) => {
        setNewPerson({...newPerson, id: people.length + 1, name: e.target.value});
    }

    const handleInputPhoneNumber = (e) => {
        setNewPerson({...newPerson, phoneNumber: e.target.value});

    }

    const handleSubmitPerson = (e) => {
        e.preventDefault();
        if (people.find(person => person.name === newPerson.name)) {
            // utilizing the "cool and professional" template literal strings format
            alert(`${newPerson} already exists in phonebook!`);
            return;
        }
        if (newPerson.name === "" || newPerson.phoneNumber === "") {
            alert("Please fill out all fields!");
            return;
        }
        setPeople(people.concat(newPerson));
        setFiltered(filteredPeople.concat(newPerson));
        setNewPerson(new Person());
        
    }

    const filterPeople = (e) => {
        setFiltered(people.filter(person => person.name.toLowerCase().search(e.target.value.toLowerCase()) > -1));
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <AddContacts values = {newPerson} handleName = {handleInputName} handleNumber = {handleInputPhoneNumber} handleSubmit = {handleSubmitPerson}/>
            <SearchField handleFiltering = {filterPeople}/>
            <h2>Contacts</h2>
            <ul>
                {filteredPeople.map(person => <PersonComp key = {person.id} person = {person}/>)}
            </ul>
        </div>
    );
}

export default App;

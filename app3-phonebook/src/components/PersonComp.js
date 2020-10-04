import React from "react";

const Person = ({person}) => {
    return (
        <li>{person.name}: {person.phoneNumber}</li>
    )
}

export default Person;
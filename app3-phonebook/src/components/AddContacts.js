import React from "react";
import InputField from "./InputField";

const AddContacts = ({values, handleName, handleNumber, handleSubmit}) => {
    return (
        <div>
            <h2>Add New</h2>
            <form>
                <InputField label = "Name" value = {values.name} onChange = {handleName}/>
                <InputField label = "Phone Number" value = {values.phoneNumber} onChange = {handleNumber}/>
                <button type = "submit" onClick = {handleSubmit}>Add Person</button>
            </form>
        </div>
    )
}

export default AddContacts;
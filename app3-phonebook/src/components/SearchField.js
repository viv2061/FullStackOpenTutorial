import React from "react";
import InputField from "./InputField";

const SearchField = ({handleFiltering}) => {
    return (
        <div>
            <h2>Filter</h2>
            <InputField label = "Search Name" onChange = {handleFiltering}/>
        </div>
    )
}

export default SearchField;
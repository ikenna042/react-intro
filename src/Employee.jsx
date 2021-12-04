import React from "react";

const Employee = (props) => {
    const {firstName, lastName, age} = props;

    return (
        <div>
            <p>Employee {firstName} {' '} {lastName} of age {age}</p>
        </div>
    );
}

export default Employee;
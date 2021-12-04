import React from "react";

const Employee = (props) => {
    const {id, firstName, lastName, age} = props;

    return (
        <div>
            <p>{`${id}. ${firstName} ${lastName} (${age})`}</p>
        </div>
    );
}

export default Employee;
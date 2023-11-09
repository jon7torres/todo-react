import React from "react";

function InputField(props) {
    return (
        <div>
            <input type="text" placeholder="Add to list..." onChange={props.onChange} value={props.value} />
        </div>
    );
}

export default InputField;
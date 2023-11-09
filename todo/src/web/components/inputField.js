import React from "react";

function InputField(props) {
    return (
        <div>
            <input type="text" onChange={props.onChange} value={props.value}/>
        </div>
    );
}

export default InputField;
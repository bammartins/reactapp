import React from 'react';

const Input = ({name, label, id, type, value, handleChange}) => {
    return(
        <div className="pure-control-group">
            <label htmlFor={name}>{label}</label> 
            <input name={name} id={id} type={type} value={value} onChange={handleChange} />
        </div>
    );
}
export default Input;
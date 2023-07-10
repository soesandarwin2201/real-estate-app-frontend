import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
     name,type,onInput,value,isValid
}) => {
     return ( 
          <label htmlFor={name}>
               {name.charAt(0).toUpperCase() + name.slice(1)} : {
                    type === 'textarea' ? (<textarea id={name} name={name} value={value} onChange={(e) => onInput(e)} className={!isValid && isValid != null ? 'error' : ''} />) 
                    : (<input type={type} onChange={(e) => onInput(e)} id={name} name={name} value={value} className={!isValid && isValid != null ? 'error' : ''} />)
               }
          </label>
      );
}
 
export default Input;
import React, {useReducer, useEffect} from 'react';
import Info from './Info';
import Experience from './Experience';


function Form() {




    return (
        <form>
            <Info />
            <h1 className="form-header"> Experience </h1>
            <Experience />




        </form>
    )
}

export default Form

import React, {useReducer, useEffect} from 'react';
import Info from './Info';
import ExperienceContainer from './ExperienceContainer';
import Experience from './Experience';


function Form() {




    return (
        <form>
            <Info />
            <h1 className="form-header"> Experience </h1>
            <ExperienceContainer>

            </ExperienceContainer>




        </form>
    )
}

export default Form

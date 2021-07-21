import React,{useState} from 'react';
import Info from './Info';
import ExperienceContainer from './ExperienceContainer';
import EducationContainer from './EducationContainer';

export const SubmitContext = React.createContext();

export const SubmitContext2 = React.createContext();



function Form() {
    const [submitted, setSubmitted]= useState(false);
    let info = [];

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const giveToParent = (array) => {
        info.push(array);
        if(info.length === 3){
            console.log(info)
        }
    }



    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <SubmitContext.Provider value={[submitted,giveToParent]}>
                <Info />
            </SubmitContext.Provider>
            <h1 className="form-header"> Experience </h1>
            <SubmitContext.Provider value={[submitted,giveToParent]}>
                <ExperienceContainer />
            </SubmitContext.Provider>

            <SubmitContext2.Provider value={[submitted,giveToParent]}>
                <h2 className="form-header"> Education </h2>
                <EducationContainer />
            </SubmitContext2.Provider>

            <button type="submit"> Submit</button>




        </form>
    )
}
export default Form

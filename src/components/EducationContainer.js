import React,{useState, useEffect, useContext} from 'react'
import uniqid from 'uniqid';
import Education from './Education';
import {SubmitContext2 } from './Form';

let sent = false;

function EducationContainer() {

    const [educations, setEducations] = useState([]);
    const [educationObjectsArray, setEducationObjectsArray] = useState([]);


    const [submitted,giveToParent] = useContext(SubmitContext2);

    if(submitted && !sent){
        giveToParent(educationObjectsArray);
        sent = true;
    }



    useEffect( () => {
        setEducations(prevEducations => {
            
        const id = uniqid();
        return [...prevEducations, 
        <React.Fragment key={id}> 
            <Education handler = {setEducationObjectsArray} prevValue={educationObjectsArray} id={id}/>
            <button onClick={e => {
                e.preventDefault();
                deleteButtonClickHandler(e.target.value);
             }} value={id}> Delete </button>
        </React.Fragment>]})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);




    const addClickHandler = (e) => {
        e.preventDefault();
        setEducations(prevEducations => {
            const id = uniqid();
            return [...prevEducations, 
                <React.Fragment key={id}> 
                    <Education handler = {setEducationObjectsArray} prevValue={educationObjectsArray} id={id}/>
                    <button onClick={e => {
                e.preventDefault();
                deleteButtonClickHandler(e.target.value);
             }} value={id}> Delete </button>
                </React.Fragment>] 
        });
    }

    const deleteButtonClickHandler = (id) => {
        setEducationObjectsArray(array => array.filter(value => value.id !== id));
        setEducations(prevEducations => prevEducations.filter(ed => ed.key !== id ));
    }

    return (
        <div>
            {educations}
            <button onClick={addClickHandler}> Add </button>
        </div>
    )
}

export default EducationContainer

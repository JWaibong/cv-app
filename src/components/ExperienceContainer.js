import React, { useContext, useEffect, useState } from 'react'
import Experience from './Experience';
import uniqid from 'uniqid';
import { SubmitContext } from './Form';

let sent = false;
function ExperienceContainer() {
    const [experiences, setExperiences] = useState([]);

    const [experiencesObjectArray, setExperiencesObjectArray] = useState([]);

    const [submitted,giveToParent] = useContext(SubmitContext)

    if(submitted && !sent){
        giveToParent(experiencesObjectArray);
        sent = true;
    }

    useEffect( () => {
        setExperiences(prevExperiences => {
        const id = uniqid();

        return [...prevExperiences, 
        <React.Fragment key={id}> 
            <Experience handler={setExperiencesObjectArray} prevValue={experiencesObjectArray} id={id}/>
            <button onClick={e => {
                e.preventDefault();
                deleteButtonClickHandler(e.target.value);
             }} value={id}> Delete </button>
        </React.Fragment>]})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



    const addClickHandler = (e) => {
        e.preventDefault();
        setExperiences(prevExperiences => {
            const id = uniqid();
            return [...prevExperiences, 
                <React.Fragment key={id}> 
                    <Experience handler={setExperiencesObjectArray} prevValue={experiencesObjectArray} id={id}/>
                    <button onClick={e => {
                e.preventDefault();
                deleteButtonClickHandler(e.target.value);
             }} value={id}> Delete </button>
                </React.Fragment>] 
        });
    }

    const deleteButtonClickHandler = (id) => {
        setExperiencesObjectArray(array => array.filter(value => value.id !== id));
        setExperiences(prevExperiences => prevExperiences.filter(exp => exp.key !== id ));
    }

    return (
        <div>
            {experiences}
            <button onClick={addClickHandler}> Add </button>
        </div>
    )
}

export default ExperienceContainer

import React, { useEffect, useState } from 'react'

function GenerateCV(props) {
    const[personalInfo, experienceInfo, educationInfo] = props.value;
    const [personalInfoState, setPersonalInfoState] = useState(personalInfo);
    const [experienceInfoState, setExperienceInfoState] = useState(experienceInfo);
    const [educationInfoState, setEducationInfoState] = useState(educationInfo);

    const [personalInfoJSX, setPersonalInfoJSX] = useState(null);
    const [experienceInfoJSX, setExperienceInfoJSX] = useState(null);
    const [educationInfoJSX, setEducationInfoJSX] = useState(null);

    useEffect(() => {
        const[personalInfo, experienceInfo, educationInfo] = props.value;
        setPersonalInfoState(personalInfo);
        setExperienceInfoState(experienceInfo);
        setEducationInfoState(educationInfo);
    },[props.value]);



    useEffect( () => {
        function parsePersonalInfo(info){
            const header = <h4 key="1">
                <div className="cv-name">
                {info.firstName} {info.lastName}
                </div>
                <div className="cv-title">
                {info.title}
                </div>
            </h4>
            const description = <div key="2">
                <h5 className="cv-label">
                    Description
                </h5>
                <p>
                    {info.description}
                </p>
            </div>
            const details = <div key="3">
                <h6 className="cv-label" >
                    Personal Details
                </h6>
                <p className="bold-text"> 
                    Address
                </p>
                <p>
                    {info.address}
                </p>
                <p className="bold-text"> 
                    Phone Number
                </p>
                <p>
                    {info.phoneNumber}
                </p>
                <p className="bold-text"> 
                    Email
                </p>
                <p>
                    {info.email}
                </p>
            </div>
            return [header,description,details]
        }
        function parseExperienceInfo(info){
            const years = info.map( exp => {
                return <React.Fragment key={exp.id}>
                    <p className="bold-text"> From - To </p>
                    <p> {exp.fromYear} - {exp.toYear}</p>
                </React.Fragment>
            });
            const positions = info.map( exp => {
                return <React.Fragment key={exp.id}>
                    <p className="bold-text"> {exp.position} </p>
                    <p> {exp.company} , {exp.city} </p>
                </React.Fragment>
            })


            return <React.Fragment>
                <h5 className="cv-label"> Experience </h5>
                <div className="year-container"> 
                    {years}
                </div>
                <div className="position-company-container">
                    {positions}
                </div>

            </React.Fragment>
        }
        function parseEducationInfo(info){
            const years = info.map( ed => {
                return <React.Fragment key={ed.id}>
                    <p className="bold-text"> From - To </p>
                    <p> {ed.fromYear} - {ed.toYear}</p>
                </React.Fragment>
            });
            const universities = info.map( ed => {
                return <React.Fragment key={ed.id}>
                    <p className="bold-text"> {ed.university} </p>
                    <p> Degree: {ed.degree} </p>
                    <p> Subject: {ed.subject}</p>
                </React.Fragment>
            })


            return <React.Fragment>
                <h5 className="cv-label"> Experience </h5>
                <div className="year-container"> 
                    {years}
                </div>
                <div className="universities-container">
                    {universities}
                </div>
            </React.Fragment>

        }
        if(personalInfoState !== null && experienceInfoState !== null && educationInfoState !== null){
            console.log([personalInfoState, experienceInfoState, educationInfoState ]);
            setPersonalInfoJSX(parsePersonalInfo(personalInfoState));
            setExperienceInfoJSX(parseExperienceInfo(experienceInfoState));
            setEducationInfoJSX( parseEducationInfo(educationInfoState));
        }
    },[personalInfoState, experienceInfoState, educationInfoState])





    return (
        <div className="CV-container">
            {personalInfoJSX}
            {experienceInfoJSX}
            {educationInfoJSX}
        </div>
    )
}

export default GenerateCV

import React, { useEffect } from 'react'

function GenerateCV(props) {


    let cvJSX = null;
    useEffect(() => {
        console.log(props.value);
        if(props.value.length === 3){
            const [personalInfo, experienceInfo, educationInfo] = props.value;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            cvJSX = <React.Fragment>
                <h4>
                 {`${personalInfo.firstName} ${personalInfo.lastName}`}
                 <div>
                     {personalInfo.title}
                 </div>
                </h4>
                <div>
                </div>
            </React.Fragment>
        }
    },[props.value])



    return (
        <div className="CV-container">
            {cvJSX}
        </div>
    )
}

export default GenerateCV

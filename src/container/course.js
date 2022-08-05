import React ,{useState} from 'react';
function course(props){
    const[courseName,setcourseName] = Usestate('REACT');

    const Changecourse = () => {
        SetcourseName('NODE')
    }
}
return (
    <div>
        {
            props.coursename === 'REACT' ? <p></p> : <p>'NODE'</p>
        }
        <p>{courseName}</p>
        <button onClick={() => Changecourse()}>Change course</button>  
        <city course_name = {courseName}/>       
    </div>
)

export default course
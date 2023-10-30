import CustomInput from './CustomInput'
import { v4 as uuid } from 'uuid'

export function EducationDisplay({ educations }) {
    return (
        <ul className='display__education'>
            {educations.map(education => (
                <li key={education.id}> 
                    {education.name} {education.major} {education.start} {education.finish} 
                </li>
            ))}
        </ul>
    );
}

export function EducationEntry({educations, setEducations}) {
    function handleKeyChange(key, newValue, id) {
        const newEducations = educations.map(e => {
            if (e.id === id) {
                return { ...e, [key]: newValue};
            } else {
                return e;
            }
        });
        setEducations(newEducations);
    }

    function addEmptyEducation() {
        setEducations([...educations, EmptyEducation()]);
    }
    
    return (
        <>
        <h2>Education</h2>
        <ul className='entry__education'>
            {educations.map(education => (
                <li key={education.id}>
                    <CustomInput value={education.name} inputName={"School Name"} setValue={(value) => handleKeyChange("name", value, education.id)}/>
                    <CustomInput value={education.major} inputName={"Major"} setValue={(value) => handleKeyChange("major", value, education.id)}/>
                    <CustomInput value={education.start} inputName={"Start Date"} setValue={(value) => handleKeyChange("start", value, education.id)}/>
                    <CustomInput value={education.finish} inputName={"Finish Date"} setValue={(value) => handleKeyChange("finish", value, education.id)}/>
                </li>
            ))}
            <button className='addButt' onClick={addEmptyEducation}>Add</button>
        </ul>
        </>
    );
}

type EducationExperience = {
    id: string,
    name: string,
    major: string,
    start: string,
    finish: string,
}

export function EmptyEducation(): EducationExperience {
    return {
        id: uuid(),
        name: "",
        major: "",
        start: "",
        finish: "",
    };
}


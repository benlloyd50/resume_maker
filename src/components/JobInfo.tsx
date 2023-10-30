import CustomInput from './CustomInput'
import { v4 as uuid } from 'uuid'

interface JobDisplayProps {
    jobs: JobExperience[];
}

export function JobDisplay({ jobs }: JobDisplayProps) {
    return (
        <ul className='display__job'>
            {jobs.map(job => (
                <li key={job.id}> 
                    {job.company} {job.position} {job.description} {job.start} {job.finish} 
                </li>
            ))}
        </ul>
    );
}

interface JobEntryProps {
    jobs: JobExperience[];
    setJobs: React.Dispatch<React.SetStateAction<JobExperience[]>>;
}

export function JobEntry({jobs, setJobs}: JobEntryProps) {
    function handleKeyChange(key: keyof JobExperience, newValue: string, id: string) {
        const newJobs = jobs.map(e => {
            if (e.id === id) {
                return { ...e, [key]: newValue};
            } else {
                return e;
            }
        });
        setJobs(newJobs);
    }

    function addEmptyJob() {
        setJobs([...jobs, EmptyJob()]);
    }
    
    return (
    <>
        <h2>Job Info</h2>
        <ul className='entry__job'>
            {jobs.map(job => (
                <li key={job.id}>
                    <CustomInput value={job.company} inputName={"Company"} setValue={(value) => handleKeyChange("company", value, job.id)}/>
                    <CustomInput value={job.position} inputName={"Position"} setValue={(value) => handleKeyChange("position", value, job.id)}/>
                    <CustomInput value={job.description} inputName={"Description"} setValue={(value) => handleKeyChange("description", value, job.id)}/>
                    <CustomInput value={job.start} inputName={"Start Date"} setValue={(value) => handleKeyChange("start", value, job.id)}/>
                    <CustomInput value={job.finish} inputName={"Finish Date"} setValue={(value) => handleKeyChange("finish", value, job.id)}/>
                </li>
            ))}
            <button className='addButt' onClick={addEmptyJob}>Add</button>
        </ul>
    </>
    );
}

interface JobExperience {
    id: string,
    company: string,
    position: string,
    description: string,
    start: string,
    finish: string,
}

export function EmptyJob(): JobExperience {
    return {
        id: uuid(),
        company: "",
        position: "",
        description: "",
        start: "",
        finish: "",
    };
}


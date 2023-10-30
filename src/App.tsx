import { useState } from 'react'
import { EducationEntry, EducationDisplay, EmptyEducation } from './components/EducationInfo'
import { GeneralInfoEntry, GeneralInfoDisplay } from './components/GeneralInfo'
import { JobDisplay, JobEntry, EmptyJob } from './components/JobInfo'
import './styles/app.css'

function App() {
   const [personalInfo, setPersonalInfo] = useState({name: '', email: '', phoneNumber: ''});
   const [educations, setEducations] = useState([EmptyEducation()]);
   const [jobs, setJobs] = useState([EmptyJob()]);

  return (
    <>
        <h1>Resume Maker</h1>
        <div className="resume">
            <div className="resume__entry">
                <GeneralInfoEntry personal={personalInfo} setPersonal={setPersonalInfo}/>
                <br/>
                <EducationEntry educations={educations} setEducations={setEducations}/>
                <br/>
                <JobEntry jobs={jobs} setJobs={setJobs}/>
            </div>

            <div className="resume__display">
                <GeneralInfoDisplay personal={personalInfo}/>
                <EducationDisplay educations={educations}/>
                <JobDisplay jobs={jobs}/>
            </div>
        </div>
    </>
  )
}

export default App

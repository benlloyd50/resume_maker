import EducationInfo from './components/EducationInfo'
import GeneralInfo from './components/GeneralInfo'
import JobInfo from './components/JobInfo'

function App() {
  // TODO: elevate state outside of infos so that there is display and editor
  return (
    <>
        <h1>Resume Maker</h1>
        <GeneralInfo/>
        <EducationInfo/>
        <JobInfo/>
    </>
  )
}

export default App

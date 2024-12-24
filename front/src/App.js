import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import PatientSignUp from "./pages/SignUp/Patient";
import DoctorSignUp from "./pages/SignUp/Doctor";
import PatientLogIn from "./pages/Login/Patient";
import DoctorLogIn from "./pages/Login/Doctor";
import Profilext from "./pages/Profilext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetDoctorId } from "./uIddoctor";
import { useGetPatientId } from "./uIdpatient";
import { useGetUserType } from "./userType";
import { useGetUserMail } from "./userMail";
import { createContext,useState } from "react";
import Doctorprofile from "./pages/Profile/Doctor";
import Patientprofile from "./pages/Profile/Patient";
import SearchQn from "./pages/ProfileExt/SearchQn";
import RefAnsws from "./pages/ProfileExt/RefAnsSearch";
import AskQues from "./pages/ProfileExt/AskQues";
import RespAns from "./pages/ProfileExt/RespAns";
export const Appcontext = createContext();

function App() {
  let patientId = useGetPatientId();
  let doctorId = useGetDoctorId();

  let userType = useGetUserType();
  let userMail = useGetUserMail();

  const [ques, setQues] = useState([]);
  const [refId, setRefId] = useState([]);
  
  return (
    <div className="App">
      <Appcontext.Provider
        value={{
          userType,
          userMail,
          patientId,
          doctorId,

          ques,
          setQues,
          setRefId,
          refId
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patientSignUp" element={<PatientSignUp />} />
            <Route path="/doctorSignUp" element={<DoctorSignUp />} />
            <Route path="/patientLogin" element={<PatientLogIn />} />
            <Route path="/doctorLogin" element={<DoctorLogIn />} />
            <Route path="/myHome" element={<Profilext />} />
            <Route path="/myHome/Myprofiledoctor" element={<Doctorprofile />} />
            <Route path="/myHome/Myprofilepatient" element={<Patientprofile/>} />
            <Route path="/myHome/search" element={<SearchQn />} />
            <Route path="/myHome/referenceAnswer" element={<RefAnsws />} />
            <Route path="/myHome/responseAnswer" element={<RespAns />} />
            <Route path="/myHome/askQuestion" element={<AskQues />} />
          </Routes>
        </Router>
      </Appcontext.Provider>
    </div>
  );
}

export default App;

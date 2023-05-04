
  
  
   import style from "./Dashboard.module.css";

   import {useState  , useEffect} from "react";
   import { useHistory } from "react-router-dom";
   import axios from "axios";

   import baseUrl from "../../../baseUrl";

     function Dashboard()
     {

          const [exam , setExam] = useState("Updating...");
          const [question , setQuestion] = useState("Updating...");
          const [user , setUser] = useState("Updating...");
          const [module, setModule] =useState("Updating...");

            useEffect(() => {

                async function getAllModule(){
                    let value  = await axios.get(`${baseUrl}/subject`);
                    setModule("We have total " +value.data.length + " Modules");
                }
                getAllModule();


                async function getAllExam(){
                    let value  = await axios.get(`${baseUrl}/exam`);
                    setExam("We have total " +value.data.length + " quiz");
                }
                getAllExam();


                async function getAllQuestions(){
                    let value  = await axios.get(`${baseUrl}/question`);
                    setQuestion("We have total " +value.data.length + " question");
                }
                getAllQuestions();


                async function getAllUsers(){
                    let value  = await axios.get(`${baseUrl}/user`);
                    setUser("We have total " +value.data.length + " user");
                }
                getAllUsers();
            })

 
             let history = useHistory();

             function showModule(){
                history.push("/AdminDashboard/Module");
           }

            function showExam(){
                 history.push("/AdminDashboard/Exam");
            }

            function showQuestions(){
                history.push("/AdminDashboard/Question");
            }

            function showUsers(){
                history.push("/AdminDashboard/StudentList");
            }


         return(
             <>
                           <div id={style.displayHeadingBox}> 
                               <h1>Dashboard</h1>     
                           </div>

                           
                           <div id={style.box1}>
                               <p id={style.countOfSubject}>{module}</p>
                                   <button onClick={showModule}>View Details of Modules</button>
                            </div>

                            <div id={style.box2}>
                               <p id={style.countOfExam}>{exam}</p>
                                   <button onClick={showExam}>View Details of Quiz</button>
                            </div>

                              <div id={style.box3}>
                                  <p  id={style.countOfQuestion}>{question}</p>
                                   <button onClick={showQuestions}>View Details of question</button> 
                              </div>
                             
                              <div id={style.box4}>
                                  <p id={style.countOfUser}>{user}</p>
                                    <button onClick={showUsers} >View Details of Users</button>
                              </div>

                             
                             
             </>
         );
     }

     export default Dashboard;
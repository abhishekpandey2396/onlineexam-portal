

  import style from "./StudentLogin.module.css";

  import {NavLink , useHistory} from "react-router-dom";

   import {useState} from "react" ;
   import axios from "axios";
   import baseUrl from "../../baseUrl";


     function StudentLogin(){

        const [user , setUser] = useState({
            email:"",
            password:""
        });

        function onTextFieldChange(e){
            setUser({
                ...user ,
                [e.target.name] : e.target.value
            });
        }


          let history = useHistory();


      async function handleLogin()
       {
          let value  = await axios.get(`${baseUrl}/user/${user.email}`);

          //console.log(value.data.email);
          //console.log(user.email);

          //console.log(value.data.password);
          //console.log(user.password);

                if( value.data.email === user.email &&
                   value.data.password === user.password)
                {
                   alert("success");
                   sessionStorage.setItem("user" , user.email);
                   history.push("/StudentDashboard");
                }
                else alert(" Wrong User Email or password");
             
        }
        



         return(
            <div id={style.container}>

                <div id={style.containerHeadingBox}>
                    <h1>Student Login</h1>
                </div>

               <div id={style.emailBox}>
                   <label htmlFor="email"> Email
                       <input name="email" 
                       onChange={(e) => onTextFieldChange(e)} type="text" id={style.email} />
                   </label>
               </div>


               <div id={style.passwordBox}>
                   <label htmlFor="password"> Password
                     <input name="password" 
                      onChange={(e) => onTextFieldChange(e)} type="password" id={style.password} />
                   </label>
               </div>


               <button id={style.login} onClick={handleLogin}>Login</button>


              <div id={style.signup}>
                 New to Portal?  <NavLink exact to="/StudentSignup"> Register</NavLink> 
                 <NavLink id={style.goBackLink} exact to="/"> Go Back</NavLink> 
              </div>


               </div>
         ); 
     }

     export default StudentLogin;


// import { useState } from "react";
// import { Form, Button, Checkbox, DatePicker, Input, Select, Space, message } from "antd";
// import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
// import Base from "../components/Base";
// import {toast} from 'react-toastify';
// import { loginUser } from "../services/user-service";
// import { doLogin } from "../auth";
// import { useContext } from "react";
// import { useNavigate } from "react-router";
// import userContext from "../context/userContext";

//  const Login = ()=>{

//   const navigate=useNavigate();

//   const userContxtData = useContext(userContext);

//   const [loginDetails,setLoginDetails] = useState ({
//     username:"",
//     password:""
//   })

//   const handleChange=(event,property)=>{
//     let actualValues = event.target.value
//     setLoginDetails({...loginDetails,[property]:actualValues});
//   }

//   const handleSubmit = (event)=>{
//     console.log(event)
//     let payload = {
//       username:event.userName,
//       password:event.password,
//     }
  
//     //submit data to server
//     loginUser(payload).then((data)=>{
//       console.log("user login : ")
//       console.log(data);

     
//       doLogin(data,()=>{
//         console.log("Login details is stored to Localstorage")
//       })
//       userContxtData.setUser({
//         data: data.user,
//         login: true,
//       });
//       console.log(data)
//       toast.success("Login Success")
//       console.log(payload.username)
//       if(payload.username==="Abhishek@23"){
//         navigate("/admin-dashbord")
//       }else{
//         navigate("/Userdashbord")
//       }
      
//     }).catch(error=>{
//       console.log(error)
//       if(error.response.status==400 || error.response.status==404){
//         toast.error(error.response.data.message)
//       }else{
//         toast.error("Something went wrong !!");
//       }
//     })
    
//   }

//   const handleReset=(event)=>{
//     setLoginDetails({
//       username:"",
//       password:""
//     })
//   }

//     return(
//         <Base>
//         <Container>
//           <Row className="mt-4">
//             <Col sm={{size:6,offset:3}}>
//               <Card color="dark" inverse>
//                   <CardHeader>
//                     <h2 className="text-center">Login here!!</h2>
//                      <CardBody >
//                      <Form
//                         autoComplete="off"
//                         labelCol={{ span: 24 }}
//                         wrapperCol={{ span: 24 }}
//                         onFinish={handleSubmit}
//                         onFinishFailed={(error) => {
//                         console.log({ error });
//                         }}
//                         >
//           <Form.Item
//             name="userName"
//             className="form-item"
//             label="UserName"
//             rules={[
//               {
//                 required: true,
//                 message: "Please enter your username",
//               },
//               { whitespace: true },
//               { min: 3 },
//             ]}
//             hasFeedback
           
//             onChange={(e)=>handleChange(e,'username')}
            
//           >
//           <Input placeholder="Type your username" />
//           </Form.Item>

//           {/* First Name */ }
//           <Form.Item
//             name="password"
//             className="form-item"
//             label="Password"
//             rules={[
//               {
//                 required: true,
//                 // pattern : new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
              
//               },
              
//               {
//                 validator: (_, value) =>
//                   value && value.includes(value)
//                     ? Promise.resolve()
//                     : Promise.reject("Password does not match criteria."),
//               },
//             ]}
//             hasFeedback
            
//             onChange={(e)=>handleChange(e,'password')}
           
//           >
//             <Input.Password placeholder="Type your password" />
//           </Form.Item>

         
//           <Form.Item   >
//            <Button className="mb-3" style={{backgroundColor:"#08D9D6 ",width:"100%",border:0,color:"white"}} htmlType="submit">
//               Login
//             </Button>
            
//           </Form.Item>
         
//         </Form>
//           </CardBody>

//       </CardHeader>

//     </Card>
    
//     </Col>
// </Row>


//         </Container>

//         </Base>
//     );
// };

// export default Login
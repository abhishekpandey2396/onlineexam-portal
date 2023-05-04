
//  import { NavLink , useHistory } from "react-router-dom";
// import { Form, Input } from "antd";
// import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
//  import axios from "axios";
//  import { useState } from "react";
// //  import isEmail from 'validator/lib/isEmail';
//   import style from "./StudentSignup.module.css";
//   import baseUrl from "../../baseUrl";
// import React from "react";
// import validator from "validator";


// function StudentSignup() {

        

//      const [userData , setUserData] = useState({
//         name: "",
//         email: "",
//         password: ""
//      });

//      function onTextFieldChange(e){

        
//             setUserData({
//                 ...userData,
//                 [e.target.name] : e.target.value
//             });
//         }
         
//             const [message, setMessage] = useState("");
//             const validateEmail = (e) => {
//              // var email = e.target.value;
//               setUserData({
//                 ...userData,
//                 [e.target.email] : e.target.value
//             });
//             //   if (validator.isEmail(email)) {
               
//             //   } else {
//             //     setMessage("Please, enter valid Email!");
//             //   }
//             };


    


//      //=====


//       const [password , setPassword] = useState("");

//       function handlePassword(e){
//         setPassword(e.target.value);
//     }
    

//     let history = useHistory();
    
//    async function handleSignup(){
//         // console.log(userData);
//         // console.log(password);
   

//         if(userData.password === password)
//         {
//             await axios.post('/user' , userData);
//             alert("Your account has created");
//             alert("Please Login");
//             history.push("/StudentLogin");
//         }
        
//         // else alert("password did not match");
//         if (validator.isEmail(userData.email)) {
               
//         } else {
//           setMessage("Please, enter valid Email!");
//         }
//     }

//     //-------------onChange={(e)=>handleChange(e,'mobile')}
// //               value={formdata.mobile}
// //               validations={[required, vmobile]}


//     return (
//         <div id={style.container}>
//             <form>
//             <div id={style.formHeading}>
//                 <h1>Student Signup</h1>
//                 <p>Please complete the form below to register with us</p>
//             </div>

//             <div id={style.nameBox}>
//                 <label htmlFor="name">Name 
//                     <input  type="text" name="name"  required 
                    
//                     onChange={(e) => onTextFieldChange(e)}
                     
 
//                    />
//                 </label>
//             </div>


//             <div id={style.emailBox}>
//                 <label htmlFor="email"> Email
//                     <input type="text" name="email" required
//                      value={userData.email}
//                     onChange={(e) =>onTextFieldChange(e)}  
//                     // validations={[ vemail, required]}
//                          />
//                 </label>
//             </div>

//             <div id={style.passwordBox}>
//                 <label htmlFor="password"> Password
//                     <input onChange={(e) => onTextFieldChange(e)} 
//                     type="password" name="password" required />
//                 </label>
//             </div>


//             <div id={style.confirmPasswordBox}  
//             >
//                 <label htmlFor="confirmPassword">Confirm Password
//                     <input  onChange={(e) => handlePassword(e)}
//                      type="password" name="confirmPassword" required />
//                 </label>
//             </div>


//             {/* <button id={style.signup} onclick="signup()">Sign Up</button> */}
//             <button id={style.signup} onClick={handleSignup} >Sign Up</button>


//             <div id={style.login}>
//                 Have a Account?  <NavLink exact to="/StudentLogin"> Log in</NavLink>
//             </div>

//             </form>
//         </div>
//     );
// }

// export default StudentSignup;


//new



import { Card, CardBody, CardHeader, Col, Container,Row } from "reactstrap";
import { Form, Button,  Input } from "antd";
import { useState } from "react";
// import {toast} from 'react-toastify';
import { useHistory } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Base from "../../PageComponent/Base";
//import Image from "react-bootstrap/Image";
import pic6 from "../../../images/6.jpg";




function StudentSignup() {
    
      const history=useHistory();
    
      const [formdata,setFormData] = useState({
            name:"",
            email:"",
            password:""
          
          })
    
      const [error,setError]=useState({
            errors:{},
            isError:false
          })
          
      // const [isSubmit,setIsSubmit]=useState(false);
    
      function handleChange(event,property){
            // Dynamically setting the value
            setFormData({...formdata,[property]:event.target.value})
          }    
    
         
      async function submitForm(event) {
        let payload = {
            name: event.name,
            email:event.email,
            password:event.password 
        }

        
        await axios.post('/user' , payload);
        alert("Your account has created");
        alert("Please Login");
        history.push("/StudentLogin");
           
            //call server api to sent data
            // signUp(payload).then((resp)=>{
            //   console.log("hi")
            //   console.log(resp)
              
            //   console.log("Success log")
            //   toast.success("User Registered Successfully!!")
            //   navigate("/Login")
            //   // setIsSubmit(true);
            //   // if(isSubmit){
            //   // toast.success("User Registered Successfully!!")
            //   // }
             
            // }).catch((error)=>{
            //   console.log(error)
            //   console.log("Error log")
            //   toast.error("please provide the valid fields")
            // })

          }
    
      return (

        <Base>
        
        < div className="container-fluid p-0 m-0">  
        <Container >
          <Row className="mt-4 mb-4">
            <Col sm={{size:6 }} >
             <div>
              <img src={pic6} alt="registration_img" />
            </div>
            </Col>
          
           <Col sm={{size:6 }}>
           <Card  >
           <CardHeader>
            <h2 className="text-center">Register here !!</h2>
           </CardHeader>
            <CardBody>
            <Form
              autoComplete="off"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              onFinish={submitForm}
              onFinishFailed={(error) => {
              console.log({ error });
              }}
            >
              {/* First Name */ }
              <Form.Item
                name="name"
                label={ <p style={{fontSize:"23px",color:"#2e6da4" }}>Name</p> }
                rules={[
                  {
                    required: true,
                    message: "Please enter your  name",
                  },
                  { whitespace: true },
                  { min: 3 },
                ]}
                hasFeedback
              onChange={(e)=>handleChange(e,'name')}
              value={formdata.name}
              >
              <Input placeholder="Type your  name" /> 
              </Form.Item>
    
          
              <Form.Item
               
                name="email"
                label={ <p style={{fontSize:"23px",color:"#2e6da4" }}>Email</p> }
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                hasFeedback
               
                onChange={(e)=>handleChange(e,'email')}
                value={formdata.email}
              >
                <Input placeholder="Type your email" />
              </Form.Item>
    
              <Form.Item
                style={{fontsize:"23px"}}
                name="password"
                className="form-item"
                label={ <p style={{fontSize:"23px",color:"#2e6da4" }}>Password</p> }
                rules={[
                  {
                    required: true,
                    // pattern : new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
                  
                  },
                  
                  {
                    validator: (_, value) =>
                      value && value.includes(value)
                        ? Promise.resolve()
                        : Promise.reject("Password does not match criteria."),
                  },
                ]}
                hasFeedback
                
                onChange={(e)=>handleChange(e,'password')}
                value={formdata.password}
              >
                <Input.Password placeholder="Type your password" />
              </Form.Item>
    
              <Form.Item
                style={{fontsize:"23px"}}
                name="confirmPassword"
                className="form-item"
                label={ <p style={{fontSize:"23px",color:"#2e6da4" }}>Confirm Password</p> }
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered does not match."
                      );
                    },
                  }),
                ]}
                hasFeedback
               
                onChange={(e)=>handleChange(e,'confirmpassword')}
                value={formdata.confirmpassword}
              >
                <Input.Password placeholder="Confirm your password" />
              </Form.Item>
  
              <Form.Item   >
               <Button className="mb-3"
               style={
               { 
                margintop: "10px",
                marginleft: "10%",
                fontsize: "x-large",
                textalign: "center",
                width: "100%",
                height: "40px",           
                backgroundColor:"#2e6da4ee ",
                border:0,
                color:"white"
              }
              } 
               htmlType="submit" 
               onSubmit={submitForm}>
                  SignUp
                </Button>
                
              <div style={{
                fontsize: "20px",
                align:'center',
                justifyContent: 'center'
              }}>
                 Have a Account?  <NavLink exact to="/StudentLogin"> Log in</NavLink>
              </div>

                {/* <Button style={{backgroundColor:"#FF2E63 ",width:"100%",border:0,color:"white"}} htmlType="reset">
                  Reset
                </Button> */}
              </Form.Item>
            </Form>
            
            </CardBody>
           </Card>
           </Col>
          </Row>
        </Container>
        </div>
        </Base>   
      );
    }
  
export default StudentSignup;




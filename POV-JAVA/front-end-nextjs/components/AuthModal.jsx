import React, { useEffect, useState } from "react";
import swal from 'sweetalert2'
import axios from 'axios'
import { setCookie,getCookie, deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import USER_URL from "./global"


// Now you can use BASE_URL anywhere in this file


/*
import { setCookie,getCookie } from 'cookies-next';*/


export default function AuthModal() {

    // useEffect(()=>{
    //     if(getCookie('login') ==  true && session != null)
    //     {
    //         loginSocials()
    //         deleteCookie('login')
    //     }
    //     if(session == null)
    //     {
    //         deleteCookie('login')
    //     }
    // },[getCookie('login')])
    
    const router = useRouter();

    const [registerInput,setRegister] = useState({
        userName:'',
        password:'',
        email:'',
        confirm:'',
        error_list:[],
    });

    const loginSocials = async () => {
        const nameParts = session.user.name.split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts[1];

        const data ={
            first_name: firstName,
            last_name : lastName,
            email : session.user.email,
            profile_pic : session.user.image
        }
        console.log("🚀 ~ file: AuthModal.jsx:48 ~ loginSocials ~ data:", data)

        axios.post(`${BASE_URL}/api/googleAuth/`,data).then(res => {
                      
            if(res.data.status === 200){
                setCookie('jwt',res.data.jwt);
                setCookie('first_name',res.data.user.first_name);
                setCookie('last_name',res.data.user.last_name);
                setCookie('email',res.data.user.email);
                setCookie('id',res.data.user.id);
                setCookie('role',res.data.user.role);
                setCookie('image',res.data.user.profile_pic)
                
                /*
                setCookie('public_id',res.data.public_id);
                setCookie('token',res.data.token);
                setCookie('name',res.data.name);
                setCookie('adress',res.data.adresse);
                setCookie('tel',res.data.tel);
                setCookie('image',res.data.image);
                if(res.data.admin){
                    setCookie('admin',res.data.admin);
                }*/
                swal.fire("Bienvenue","","success");
                const currentUrl = router.asPath;
                router.push(currentUrl)
            }
            else
            {
                swal.fire("Echec !!",res.data.message,"warning");
            }
        })
        
    }

    const [isChecked, setIsChecked] = useState(false);
    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
        
      }
    const [loginInput,setLogin] = useState({
        email:'',
        password:'',
        error_list:[],
    });

    const loginForm = () =>{
        const login= document.querySelector('.login')
        const register = document.querySelector('.register')
        login.classList.remove('hidden')
        login.classList.add('flex')
        register.classList.remove('flex')
        register.classList.add('hidden')
    }
    const registerForm = () =>{
        const login= document.querySelector('.login')
        const register = document.querySelector('.register')
        login.classList.remove('flex')
        login.classList.add('hidden')
        register.classList.remove('hidden')
        register.classList.add('flex')
        console.log("Hi")
    }

    
    const handleRegisterInput =(e) =>{
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value});
    }
    const handleInput =(e) =>{
        e.persist();
        setLogin({...loginInput,[e.target.name]:e.target.value});
    }
    //const router = useRouter();
    
   
    const loginSubmit=(e)=>
    {
        e.preventDefault();
        if (loginInput.email=="" || loginInput.password=="")
        {
            setLogin({...loginInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
        }
        else
        {
            const data ={
                email:loginInput.email,
                password:loginInput.password,
            }

            console.log(data)
           
            axios.post(`${USER_URL}/login`,data).then(res => {
                      
                if(res.data.status === 200){
                    setCookie('jwt',res.data.jwt);
                    setCookie('username',res.data.username);
                    setCookie('userId',res.data.userId)
                    swal.fire("Bienvenue",res.data.username,"success");
                    ModalAuth()
                    const currentUrl = router.asPath;
                    
                    // if (currentUrl.includes("destination")) {
                    //     router.reload();
                    //   } else {
                        
                    //   }
                      router.push(currentUrl)
                }
                else
                {
                    swal.fire("Echec !!","","warning");
                }
            })
        }
    }
    
   

    const registerSubmit=(e)=>
    {

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        e.preventDefault();
        if(registerInput.userName=="" ||registerInput.email=="" || registerInput.password=="" || registerInput.confirm=="")
        {
            setRegister({...registerInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
        }
        else if(registerInput.confirm!=registerInput.password)
        {
            setRegister({...registerInput,error_list:{'messageErr':"Confirmation invalide du mot de passe ",'error':true}})
        }
        else if(!registerInput.email.match(mailformat))
        {
               setRegister({...registerInput,error_list:{'messageErr':"Email Incorrecte",'error':true}})
        }
        else
        {
            const data ={
                username:registerInput.userName,
                password:registerInput.password,
                email:registerInput.email,
            }
            console.log("🚀 ~ file: AuthModal.jsx:131 ~ AuthModal ~ data:", data)
            
    
            axios.post(`${USER_URL}/register`,data).then(res => {
                if(res.data.status === 200){
                    swal.fire("Bienvenue","Veulliez se connectez","success");
                    loginForm();
                }
                else
                {
                    swal.fire("Echec !!","","warning");
                }
            })
        }
        
    }


    
    const ModalAuth =()=>{
        const modal= document.querySelector('.authmodal')
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }

  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden items-center justify-center bg-gray-900/70 authmodal fade">

        <div className="relative flex items-center justify-center z-5 w-full h-full md:w-[850px] md:h-[510px] bg-white  zoom-in">
            <div className="flex px-7 md:w-[55%] flex-col items-center space-y-5">
                <div className = "absolute left-0 p-4 top-0" >
                      <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main" onClick={ModalAuth}/>
                </div>
                {/* Register Modal */}
                <div className="w-full hidden flex-col space-y-4 register relative z-100">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Crée votre compte
                    </h2>
                    <form className = "flex w-full flex-col space-y-3">
                        <input name="userName" value={registerInput.userName} onChange={handleRegisterInput} placeholder = "Nom d'utilisateur" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="email" value={registerInput.email} onChange={handleRegisterInput} placeholder = "Email" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="password" value={registerInput.password} onChange={handleRegisterInput} placeholder = "Password" type="password" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="confirm" value={registerInput.confirm} onChange={handleRegisterInput} placeholder = "Confirmer votre Mot de passe" type="password" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />

                        <button onClick={registerSubmit} className = "bg-main text-white flex items-center justify-center py-2 rounded text-sm" >
                                <span>S'inscrire</span>
                        </button>
                    </form>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="cursor-pointer bg-red-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                             <i className='bx bxl-google-plus'></i>
                        </div>
                        <div className="cursor-pointer bg-blue-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-facebook' ></i>
                        </div>
                        <div className="cursor-pointer border border-blue-500 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-twitter text-blue-500' ></i>
                        </div>
                    </div>
                    <div className = "flex items-center w-full justify-between" >
                        <p onClick={loginForm} className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                           Se connectez!
                        </p>
                        <p className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                            Mot de passe oublier ?
                        </p>
                    </div>
                    {
                        (registerInput.error_list.error)
                        &&
                        <div className="flex text-xs text-red-500 absolute -bottom-10">
                            {
                                registerInput.error_list.messageErr
                            }
                        </div>
                    }
                </div>
                {/* Login Modal */}
                <div  className="w-full flex flex-col space-y-4 login relative">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Se connectez à votre compte
                    </h2>
                    <form method="post"  className = "flex w-full flex-col space-y-3">
                        <input name="email" onChange={handleInput} value={loginInput.email} placeholder = "Adresse Email" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="password" onChange={handleInput} value={loginInput.password} placeholder = "Mot de passe" type="password" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <button onClick={loginSubmit} className = "bg-main text-white flex items-center justify-center py-2 rounded text-sm" >
                                <span>Se connectez</span>
                        </button>
                    </form>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="cursor-pointer bg-red-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                             <i className='bx bxl-google-plus'></i>
                        </div>
                        <div  className="cursor-pointer bg-blue-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-facebook' ></i>
                        </div>
                        <div className="cursor-pointer border border-blue-500 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-twitter text-blue-500' ></i>
                        </div>
                    </div>
                    <div className = "flex items-center w-full justify-between" >
                        <p onClick={registerForm} className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                           Inscription içi!
                        </p>
                        <p className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                            Mot de passe oublier ?
                        </p>
                    </div>
                    {
                        (loginInput.error_list.error)
                        &&
                        <div className="flex text-xs text-red-500 absolute -bottom-10">
                            {
                                loginInput.error_list.messageErr
                            }
                        </div>
                    }
                </div>
            </div>
            <img alt="logo" src="/images/logo_event_white 1.png" className="absolute bottom-[46%] right-[10%] " />
            {/* <img alt="logo-a" src="images/logo-a.png" className="absolute top-5 right-[52%] w-24" /> */}
            <img src="/images/login.png" className="hidden md:flex w-[45%] object-right object-cover h-full "/>
        </div>
    </div>
  )
}
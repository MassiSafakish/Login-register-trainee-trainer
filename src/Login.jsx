import React,{useState} from "react";
export const Login =(props)=> {
   const [email,setEmail]=useState('');
   const [pass,setPass]=useState('');
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
     

   } 

    return(
            
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
             <label className="text3" htmlFor="text">!سلام به دنبل خوش اومدید</label>
             <label className="text4" htmlFor="text">!وارد شوید</label> 
             <label htmlFor="email">آدرس ایمیل</label>   
             <input className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="   abc@gmail.com" id="email" name="email" />

             <label htmlFor="password">گذرواژه</label>   
             <input className="login-input" value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="   ******" id="password" name="password" maxLength={6} minLength={-6} />
             
             <label className="text5" htmlFor="text">آیا رمز عبور خود را فراموش کرده اید؟</label> 
             
             <button className="btn-link"  type="submit">ورود</button>
            </form>
            <button  onClick={()=>props.onFormSwitch('register')}>!آیااکانت ندارید؟ یک حساب جدید بسازید</button>
        
        
        </div>
        
            
        
        
    )

    }   
    



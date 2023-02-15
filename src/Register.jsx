import React,{useState} from "react";
export const Register =(props)=> {
   const [email,setEmail]=useState('');
   const [pass,setPass]=useState('');
   const [name,setName]=useState('');
   const [phon,setPhon]=useState('');
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
   }
    return (
        < div className="auth-form-container">
             <form className="register-form" onSubmit={handleSubmit}>
              <label className="text1" htmlFor="text">ساخت حساب کاربری</label> 
              <label className="text2" htmlFor="text">لطفا مشخصات خود را وارد کنید</label> 
              <label  htmlFor="name">نام و نام خانوادگی</label>
              <input className="name-input" value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="مبینا غفوری   " id="name" name="name"/>
              <label htmlFor="phon">تلفن همراه</label>
              <input value={phon} onChange={(e)=>setPhon(e.target.value)} type="phon" placeholder="   09876543210" id="phon" name="phon"/> 
              <label htmlFor="email">آدرس ایمیل</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="   johnwelles@gmail.com" id="email" name="email" />
              <label htmlFor="password">گذرواژه</label>
              <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="   ******" id="password" name="password" maxLength={6} minLength={-6}/>
              
              <button className="link-btn" type="submit">ساخت حساب</button>
             </form>
             <button onClick={()=>props.onFormSwitch('login')}>!آیااکانت کاربری دارید؟  وارد شوید</button> 
        </div>
    
    )
}
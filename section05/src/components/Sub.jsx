 import "../css/Sub.css"
 
 const Sub = ()=>{
  const user ={name:'yjw',isLogin:true}
 if(user.isLogin === true){
return <><h1 id="login">  {user.name}로그아웃</h1></> 


  
 }else{
  return <><h1 id="logout">{user.name}로그인</h1></>

}
  
  
};

export default  Sub;


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private _router:Router
  ) {  
    
  }

  ngOnInit(): void {
   
  }
  changeInput(val:any){
    // console.log(val)
  }
  onSubmit(f:any){  
    const userJson = localStorage.getItem('user');
    const user = userJson !== null ? JSON.parse(userJson) : {};
    // let password=localStorage.getItem('password');
    let enteredUserName=f.value.username;
    let enteredPassword=f.value.password;
    console.log((enteredUserName == user.username && enteredPassword == user.password));
    if(enteredUserName == user.username && enteredPassword == user.password){
      alert('Credentials successfully validated');
      this._router.navigate(["/contents"]);
    }else{
      alert('You are not registered yet, Please register');
      this._router.navigate(["/register"]);
    }
  }
 }

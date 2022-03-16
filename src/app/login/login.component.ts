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
    let username=localStorage.getItem('username');
    let password=localStorage.getItem('password');
    let enteredUserName=f.value.username;
    let enteredPassword=f.value.password;
    console.log(enteredUserName);
    console.log(enteredPassword);
    console.log((enteredUserName == username && enteredPassword == password));
    if(enteredUserName == username && enteredPassword == password){
      alert('Credentials successfully validated');
      this._router.navigate(["/contents"]);
    }else{
      alert('You are not registered yet, Please register');
      this._router.navigate(["/register"]);
    }
  }
 }

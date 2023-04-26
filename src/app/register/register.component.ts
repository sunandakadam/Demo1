import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.getLocalStorageData();
  }
  getLocalStorageData(){

  }
  onSubmit(f:any){
    console.log('form value',JSON.stringify(f.value));
    let name=f.value.name;
    let username=f.value.username;
    let password=f.value.password;
    // localStorage.setItem('name',name);
    // localStorage.setItem('username',username);
    // localStorage.setItem('password',password);
    localStorage.setItem('user',JSON.stringify(f.value));
    this._router.navigate(['login'])
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm !:FormGroup
  constructor(private formbuilder:FormBuilder, private http: HttpClient, private router:Router){}

  ngOnInit():void
  {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })}

    login()
    {
      this.http.get<any>("http://localhost:3000/signupUsersList").subscribe(res=>{
        const user = res.find((details:any)=>
        {
          return details.email === this.loginForm.value.email && details.password === this.loginForm.value.password;
        });
        console.log(this.loginForm);
        
        if(user)
        {
          alert('Successfully Logged in');
          this.loginForm.reset();
          this.router.navigate(["/home"])
        }
        else
        {
          alert("User not found")
        }
      },err=>
      {
        alert("Something went wrong");
      })
    }}

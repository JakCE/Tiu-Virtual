import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      cod: ['',Validators.required],
    });
  }

  logIn(){
    if(this.loginForm.get("cod")?.value=="soy gay"){
      this.router.navigate(['tiu1']);
      console.log("gay 1")
      return;
    }
    if(this.loginForm.get("cod")?.value=="soy gay x2"){
      this.router.navigate(['tiu2']);
      console.log("gay 2")
      return;
    }
  }
}

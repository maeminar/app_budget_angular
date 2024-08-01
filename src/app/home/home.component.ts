import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

  email: string ="";
  password: string ="";
  loginError: boolean = false;

  constructor(private router: Router) {}


  onLogin() {
    if (this.email === 'admin@admin.com' && this.password === 'admin') {
      this.router.navigate(['/budget']);
    } else {
      this.loginError = true;
    }
  }

}

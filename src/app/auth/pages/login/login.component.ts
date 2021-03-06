import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login()
      .subscribe(resp => {
        if (resp.id) {
          this.router.navigate(['./heroes'])
        }

      })

  }
  ingresarSinLogin() {
    this.authService.logout()
    this.router.navigate(['./heroes'])
  }
}

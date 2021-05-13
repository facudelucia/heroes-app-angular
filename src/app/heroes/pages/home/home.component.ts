import { Auth } from './../../../auth/interfaces/auth.interface';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px
    }
  `
  ]
})
export class HomeComponent implements OnInit {
  get auth() {
    return this.authService.auth
  }
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }
  logout() {
    localStorage.removeItem('id')
    this.router.navigate(['./auth'])
  }
}

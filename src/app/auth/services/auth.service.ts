import { Auth } from './../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: Auth | undefined
  get auth() {
    return { ...this._auth }
  }
  constructor(private httpClient: HttpClient) { }
  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('id')) {
      return of(false)
    }
    return this.httpClient.get<Auth>('http://localhost:3000/usuarios/1')
      .pipe(
        map(auth => {
          this._auth = auth
          return true
        })
      )
  }
  login() {
    return this.httpClient.get<Auth>('http://localhost:3000/usuarios/1')
      .pipe(
        tap(resp => this._auth = resp),
        tap(auth => localStorage.setItem('id', auth.id))
      )
  }
  logout() {
    this._auth = undefined
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
        return localStorage.getItem('token');
  }

  isLoggedIn() {
      return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ userName, password }: any): Observable<any> {
    if (userName === 'admin123' && password === 'admin@11') {
alert('auth serv......    alert.......');
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Amruta Kasar', email: 'amu@gmail.com' });
    }
    //return throwError(new Error('Failed to login'));
    return throwError(() =>new Error('Failed to login'));
  }
}

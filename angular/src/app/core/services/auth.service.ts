import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  
  constructor(private router: Router) {}
  
  login(username: string, password: string): boolean {
    // Simple authentication check - in a real app, this would call an API
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }
  
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/auth/signin']);
  }
  
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  
  private hasToken(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  
  getCurrentUser(): any {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticated.asObservable();

  private readonly VALID_USERNAME = 'Tadiwa';
  private readonly VALID_PASSWORD = '1725';

  constructor() {
    // Check if user is already logged in (from localStorage)
    const savedAuth = localStorage.getItem('authenticated');
    if (savedAuth === 'true') {
      this.isAuthenticated.next(true);
    }
  }

  login(username: string, password: string): boolean {
    if (username === this.VALID_USERNAME && password === this.VALID_PASSWORD) {
      this.isAuthenticated.next(true);
      localStorage.setItem('authenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.next(false);
    localStorage.removeItem('authenticated');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }
}

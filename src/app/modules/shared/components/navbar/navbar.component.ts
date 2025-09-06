import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.apiService.isAuthenticated();
  }

  // Método de logout
  logout() {
    this.apiService.logout();
    this.router.navigate(['/login']);
  }

}
// angular import
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;
  isLoading = false;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['admin', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    // Mark all fields as touched to show validation errors
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });

    if (this.loginForm.valid) {
      this.isLoading = true;
      const { username, password } = this.loginForm.value;
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Simple authentication check
        if (username === 'admin' && password === 'admin') {
          // Store authentication state
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify({ username, role: 'admin' }));
          
          // Navigate to main application
          this.router.navigate(['/smartup']);
        } else {
          this.isLoading = false;
          this.showErrorMessage('Identifiant ou mot de passe incorrect');
        }
      }, 1000);
    }
  }

  private showErrorMessage(message: string): void {
    // You can replace this with a toast notification service
    alert(message);
  }
}

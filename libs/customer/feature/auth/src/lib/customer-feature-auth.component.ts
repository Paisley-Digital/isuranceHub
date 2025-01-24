import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isHandsetScreen } from '@insurance-shared-util-common';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { ErrorMessageComponent } from '@insurance-shared-ui-input-validation-message';
import { MatInput } from '@angular/material/input';
import {
  MatSidenavModule,
} from '@angular/material/sidenav';

@Component({
  selector: 'insurance-insurance-broker-admin-feature-auth',
  imports: [
    CommonModule,
    MatButton,
    MatCheckbox,
    MatAnchor,
    MatIcon,
    MatSuffix,
    MatIconButton,
    MatError,
    ErrorMessageComponent,
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatSidenavModule,
  ],
  templateUrl: './customer-feature-auth.component.html',
  styleUrl: './customer-feature-auth.component.scss',
})
export class customerFeatureAuthComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  isHandsetScreen$ = isHandsetScreen();

  showPassword = signal(false);

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  isShowPassword() {
    this.showPassword.update((current) => !current);
  }

  navigateToProduct() {
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/console']);
  }
}

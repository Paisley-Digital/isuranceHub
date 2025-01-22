import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { isHandsetScreen } from '@insurance-shared-util-common';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessageComponent } from '@insurance-shared-ui-input-validation-message';
@Component({
  selector: 'insurance-client-bridge-feature-auth',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatAnchor,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ErrorMessageComponent,
  ],
  templateUrl: './clientBridge-feature-auth.component.html',
  styleUrl: './clientBridge-feature-auth.component.scss',
})
export class ClientBridgeFeatureAuthComponent {
  private formBuilder = inject(FormBuilder);
  isHandsetScreen$ = isHandsetScreen();

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
}

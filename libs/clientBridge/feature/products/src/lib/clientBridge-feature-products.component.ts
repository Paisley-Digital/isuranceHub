import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCalendarHeader } from '@angular/material/datepicker';
import { MatCard, MatCardContent } from '@angular/material/card';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageComponent } from '@insurance-shared-ui-input-validation-message';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'insurance-client-bridge-feature-products',
  imports: [
    CommonModule,
    MatCalendarHeader,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    ErrorMessageComponent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatIconButton,
    MatSuffix,
  ],
  templateUrl: './clientBridge-feature-products.component.html',
  styleUrl: './clientBridge-feature-products.component.scss',
})
export class ClientBridgeFeatureProductsComponent {
  private formBuilder = inject(FormBuilder);
  uploadForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    nationalCode: ['', [Validators.required]],
    number: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });
}

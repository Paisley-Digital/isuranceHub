import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { CustomValidators } from './validators';

@Component({
  selector: 'insurance-error-message',
  imports: [CommonModule],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input() input: AbstractControl | undefined | null;
  @Input() additionalCases: Record<string, string> = {};

  constructor(@Inject(LOCALE_ID) private localeId: string) {}

  getErrorMessage(control: AbstractControl | null): string | undefined {
    return CustomValidators.getErrorMessage(
      control,
      this.localeId,
      (error: string) => this.additionalCases?.[error]
    );
  }
}

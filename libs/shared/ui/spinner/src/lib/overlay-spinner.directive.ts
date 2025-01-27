import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[insuranceOverlaySpinner]',
})
export class OverlaySpinnerDirective {
  readonly cssClasses = ['overlay-spinner', '!cursor-progress'];

  @HostBinding('disabled') disabled = false;
  @Input()
  set insuranceOverlaySpinner(value: boolean) {
    this.toggleSpinner(value);
  }

  constructor(private el: ElementRef<HTMLElement>) {}

  private toggleSpinner(value: boolean) {
    const { classList } = this.el.nativeElement;
    value
      ? classList.add(...this.cssClasses)
      : classList.remove(...this.cssClasses);
    this.disabled = value;
  }
}

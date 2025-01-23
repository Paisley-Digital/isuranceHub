import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'lib-header-desktop',
  imports: [CommonModule, MatToolbar, MatIcon, MatIconButton],
  templateUrl: './header-desktop.component.html',
  styleUrl: './header-desktop.component.scss',
})
export class HeaderDesktopComponent {}

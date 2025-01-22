import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'clientBridge';

  ngOnInit() {
    this.setInnerHeightCSSVariable();
  }

  private setInnerHeightCSSVariable() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight + 'px');
  }
}

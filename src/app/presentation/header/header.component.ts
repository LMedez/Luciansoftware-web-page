import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('hideShow', [
      state('show', style({opacity: 1})),
      state('hide', style({opacity: 0})),
      transition('show <=> hide', [animate('0.2s')]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  show = true;
  showBackground = false
  scroll$: Subscription | undefined;
  startPosition: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.startPosition = window.scrollY;
    this.scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      const currentPosition = window.scrollY;
      if (this.startPosition > currentPosition) {
        this.showBackground = this.startPosition > 5;
        this.show = true
      } else {
        this.show = false
      }
      this.startPosition = currentPosition
    });
  }
}

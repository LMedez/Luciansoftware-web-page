import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GetHomeDataUseCase} from "../../domain/usecases/get-home-data.usecase";
import {Home} from "../../models/model/home.model";
import {fromEvent, Subscription} from "rxjs";
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        query('h1, p, button', [
          style({opacity: 0, transform: 'translateX(-50px)'}),
          stagger(100, [
            animate('1200ms cubic-bezier(0.35, 0, 0.35, 1)',
              style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('image') container: ElementRef | undefined;
  home: Home = {
    section1: {title: "", subtitle: "", buttonTitle: ""},
    section2: {title: "", subtitle: "", }

  };
  scroll$: Subscription | undefined;

  constructor(private getHomeData: GetHomeDataUseCase) {
  }


  ngOnInit(): void {
    this.getHomeData.getData().subscribe((data: Home) => {
      this.home = data
    })

    this.scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      const currentPosition = window.scrollY;

    });
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    this.container?.nativeElement.style.transform = "scale(1)"
  }
}

import {Component, OnInit} from '@angular/core';
import {GetHomeDataUseCase} from "../../domain/usecases/get-home-data.usecase";
import {Home} from "../../models/model/home.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Home = {
    section1: {title: "", subtitle: "", buttonTitle: ""}
  };

  constructor(private getHomeData: GetHomeDataUseCase) {
  }

  ngOnInit(): void {
    this.getHomeData.getData().subscribe((data: Home) => {
      this.home = data
    })
  }
}

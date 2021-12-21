import {Injectable} from "@angular/core";
import {from, Observable} from "rxjs";
import {Home} from "../../models/model/home.model";

@Injectable({providedIn: 'root'})
export class LocalSource {
  home = [
    {
      section1: {
        title: "Android Application Software Development",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        buttonTitle: "See all"
      },
      section2: {
        title: "Using the most modern \n" +
          "apis and features for \n" +
          "development",
        subtitle: "All applications follow the official Android \n" +
          "development guides for more efficient \n" +
          "applications"
      }
    }
  ]

  getHomeData(): Observable<Home> {
    return from(this.home)
  }
}

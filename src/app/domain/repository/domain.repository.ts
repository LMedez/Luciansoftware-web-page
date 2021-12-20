import {Observable} from "rxjs";
import {Home} from "../../models/model/home.model";

export abstract class DomainRepository {
  abstract getHomeData(): Observable<Home>
}

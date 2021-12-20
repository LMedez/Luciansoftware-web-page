import {Injectable} from '@angular/core';
import {DomainRepository} from "../../domain/repository/domain.repository";
import {Observable} from "rxjs";
import {Home} from "../../models/model/home.model";
import {LocalSource} from "../local/local-source";

@Injectable({
  providedIn: 'root'
})
export class DataRepository extends DomainRepository {

  constructor(private localSource: LocalSource) {
    super()
  }

  getHomeData(): Observable<Home> {
    return this.localSource.getHomeData();
  }
}

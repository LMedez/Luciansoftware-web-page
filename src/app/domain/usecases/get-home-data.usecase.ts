import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Home} from "../../models/model/home.model";
import {DomainRepository} from "../repository/domain.repository";

@Injectable({
  providedIn: 'root'
})
export class GetHomeDataUseCase implements IGetHomeDataUseCase{

  constructor(private domainRepository: DomainRepository) { }

  getData(): Observable<Home> {
    return this.domainRepository.getHomeData();
  }
}

interface IGetHomeDataUseCase {
  getData(): Observable<Home>
}

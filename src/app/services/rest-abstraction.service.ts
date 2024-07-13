import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestAbstractionService {

  constructor(private rest:RestService) { }

  getCardList()
:Observable<any>{
  return this.rest.getCardList();
}
}

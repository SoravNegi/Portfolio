import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { RestAbstractionService } from '../services/rest-abstraction.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private rest_Home:RestAbstractionService) {
  }
  cardList:any;
  ngOnInit(): void {
      this.rest_Home.getCardList().subscribe((data)=>{
        this.cardList = data;
      })
  }

}
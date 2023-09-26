import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover:string=""
  constructor() { }
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string="XPT | PS4"
  @Input()
  gamePrice:string="R$ 399,90"
  @Input()
  videoUrl:string=""


  ngOnInit(): void {
  }

}

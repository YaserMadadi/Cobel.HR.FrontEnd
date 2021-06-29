import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output()
  public onClick : EventEmitter<void> = new EventEmitter<void>();

}

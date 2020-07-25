import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-on-push-strat',
  templateUrl: './on-push-strat.component.html',
  styleUrls: ['./on-push-strat.component.css']
})
export class OnPushStratComponent implements OnInit {

  @Input() data = '';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-review',
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.scss']
})
export class CardReviewComponent implements OnInit {
  @Input() avatar: string;
  @Input() name: string;
  @Input() rate: string;
  @Input() text: string;

  constructor() {}

  ngOnInit() {}

}

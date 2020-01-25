import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-appointment',
  templateUrl: './card-appointment.component.html',
  styleUrls: ['./card-appointment.component.scss'],
})
export class CardAppointmentComponent implements OnInit {

  @Input() avatar: string;
  @Input() text: string;
  @Input() name: string;
  @Input() date: string;
  @Input() amount: number;

  isOpen = false;

  constructor() { }

  ngOnInit() {}

}

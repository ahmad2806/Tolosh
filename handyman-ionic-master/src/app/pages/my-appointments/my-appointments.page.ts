import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

  isOpen:boolean = false;

  appointments = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.appointments = this.dataService.getAppointments();
  }

}

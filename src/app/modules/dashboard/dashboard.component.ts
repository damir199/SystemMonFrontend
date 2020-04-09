import { Component, OnInit } from '@angular/core';
import {  DashboardService } from "../dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards = [];
  bigChart = [];
  pieChart = [];
  constructor(private dashboardservice: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardservice.bigChart();
    this.cards = this.dashboardservice.cards();
    this.pieChart = this.dashboardservice.pieChart();
  }

}

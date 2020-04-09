import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total : string;
  @Input() percentage: string;
  @Input() data: [];

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit(){
    
    this.chartOptions = {
     
      title: {
        text: 'Data From MongoDB'
    },
    
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }],
    tooltip: {
        shared: true
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
   
    series: [{
       
        name: 'Temperature',
        type: 'spline',
        data: this.data,
        tooltip: {
            valueSuffix: '°C'
        }
    }]
    
    
  };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);

}}

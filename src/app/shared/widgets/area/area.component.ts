import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];
  @Input() title: string;
  @Input() subtitle: string;

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: this.title
      },
      subtitle: {
        text: this.subtitle
      },
      tooltip: {
        split: true
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      plotOptions:{
        series:{
            connectNulls:true
        }
      },
      
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
    
  }
  


}

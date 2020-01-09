import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iot-card',
  templateUrl: './iot-card.component.html',
  styleUrls: ['./iot-card.component.scss']
})
export class IotCardComponent implements OnInit {


  @Input() device;

  constructor() { }

  ngOnInit() {
  }

}

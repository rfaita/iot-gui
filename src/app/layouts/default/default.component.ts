import { Component, OnInit } from '@angular/core';
import { MediaObserver } from "@angular/flex-layout";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen = false;

  constructor(public media: MediaObserver) {
    
  }

  sidebarToogler(event) {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
  }

}

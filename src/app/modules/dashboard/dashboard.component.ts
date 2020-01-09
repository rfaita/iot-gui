import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/services/asset.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  assets: Observable<any>;

  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.assets = this.assetService.getAssets().pipe(
      map(data => data._embedded.assetList)
    );
  }

}

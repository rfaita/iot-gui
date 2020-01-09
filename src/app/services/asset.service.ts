import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private httpClient: HttpClient) { }


  public getAssets(): Observable<any> {
    return this.httpClient.get(`http://localhost/api/asset/asset`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackerserviceService {

  constructor(private http:HttpClient) { 
  }

  getTracker():Observable<any>{
     return this.http.get("https://webapp-190525185858.azurewebsites.net/tracker");
  }
}

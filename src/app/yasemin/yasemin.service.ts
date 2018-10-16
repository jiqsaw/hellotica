import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { GoogleAnalyticsEventsService } from '../google-analytics-events-service';
import { IWorkDetail, IWorkMain } from './models/works.models';


const SOURCE_URI = '/assets/public/yasemin-main.json';
const DETAIL_URI = '/assets/public/yasemin-detail.json';

@Injectable()
export class YaseminService {

  constructor(private http: Http, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

  getMainSource(): Observable<IWorkMain> {
    return this.http.get(SOURCE_URI)
      .map(response => response.json());

  }

  getDetailSource(): Observable<IWorkDetail> {
    return this.http.get(DETAIL_URI)
      .map(response => response.json());

  }

  triggerGa(action: string, label: string) {
    this.googleAnalyticsEventsService.emitEvent('yasemin', action, label, 10);
  }

}

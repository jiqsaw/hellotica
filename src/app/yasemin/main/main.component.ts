import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWorkMain } from '../models/works.models';
import { YaseminService } from '../yasemin.service';


const DEFAULT_TYPE: string = 'all';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  dataset: IWorkMain;
  selectedType: string = DEFAULT_TYPE;

  getItemUrl(item: string): string {
    return item.indexOf("__") !== -1 ? item.substring(0, item.indexOf("__")) : item;
  }

  constructor(private yaseminService: YaseminService, private route: ActivatedRoute, ) { }

  ngOnInit() {

    this.yaseminService.getMainSource()
      .subscribe(
      (res) => { this.dataset = res },
      err => console.error(err)
      )

    this.route.params.subscribe(params => {

      if (params['type'] !== undefined)
        {
          this.selectedType = params['type']
          this.yaseminService.triggerGa(this.selectedType, "menu")
        }
      else
        this.selectedType = DEFAULT_TYPE;

    });

  }

}
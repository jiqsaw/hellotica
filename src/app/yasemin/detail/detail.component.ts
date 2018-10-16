import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { IWorkDetail } from '../models/works.models';
import { YaseminService } from '../yasemin.service';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  workName: string;
  dataset: IWorkDetail;

  constructor( @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private yaseminService: YaseminService) { }

  getImageUrl(imageName: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(./assets/yasemin/works/${this.workName}/${imageName})`);
  }

  getVideoUrl(videoCode: string) {
    return 'https://www.youtube.com/embed/' + videoCode + '?rel=0&amp;showinfo=0'
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.workName = params['name']

      this.yaseminService.getDetailSource()
        .subscribe(
        (res) => this.dataset = res[this.workName],
        err => console.error(err)
        )

    });

  }

  lastScrollTop = 0;
  showBack: boolean = true;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    var st = this.document.body.scrollTop;
    (st > this.lastScrollTop) ? this.scrollDownHandler() : this.scrollUpHandler();
    this.lastScrollTop = st;
  }

  scrollDownHandler() {
    this.showBack = false;
  }
  scrollUpHandler() {
    this.showBack = true;
  }

  ngAfterViewInit() {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  }

}
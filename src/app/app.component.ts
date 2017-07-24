import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'vg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  constructor(
    private mdIconRegistry: MdIconRegistry,
    private domSanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService) {

    // Register svgs
    this.mdIconRegistry.addSvgIconInNamespace('assets', 'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'));
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }
}

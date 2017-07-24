import { NgModule } from '@angular/core';
import { CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';

const modules: any[] = [
  CovalentLayoutModule,
  CovalentMediaModule,
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: [],
})
export class CovalentModule {
}

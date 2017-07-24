import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MdListModule } from '@angular/material';

const modules: any[] = [
  MdIconModule,
  MdButtonModule,
  MdListModule,
];

@NgModule({
  imports: [
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  declarations: [],
})
export class MaterialModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const PUBLIC_COMPONENTS = [NavbarComponent, PageNotFoundComponent];
const PUBLIC_DIRECTIVES: never[] = [];
const PUBLIC_PIPES: never[] = [];

@NgModule({
  declarations: [
    ...PUBLIC_COMPONENTS,
    ...PUBLIC_DIRECTIVES,
    ...PUBLIC_PIPES,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...PUBLIC_COMPONENTS,
    ...PUBLIC_DIRECTIVES,
    ...PUBLIC_PIPES,
    RouterModule
  ],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

const PUBLIC_COMPONENTS = [NavbarComponent, PageNotFoundComponent, SearchbarComponent];
const PUBLIC_DIRECTIVES: never[] = [];
const PUBLIC_PIPES= [SearchFilterPipe];

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
    RouterModule,
  ],
})
export class SharedModule { }

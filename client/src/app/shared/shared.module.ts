import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { PriceRangePipe } from './pipes/price-range.pipe';
import { TagFilterPipe } from './pipes/tag-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PUBLIC_COMPONENTS = [NavbarComponent, PageNotFoundComponent];
const PUBLIC_DIRECTIVES: never[] = [];
const PUBLIC_PIPES= [SearchFilterPipe, PriceRangePipe, TagFilterPipe];

@NgModule({
  declarations: [
    ...PUBLIC_COMPONENTS,
    ...PUBLIC_DIRECTIVES,
    ...PUBLIC_PIPES,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ...PUBLIC_COMPONENTS,
    ...PUBLIC_DIRECTIVES,
    ...PUBLIC_PIPES,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule { }

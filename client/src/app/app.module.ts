import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SteamModule } from './features/steam/steam.module';
import { SharedModule } from './shared/shared.module';
import { authInterceptorProviders } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SteamModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

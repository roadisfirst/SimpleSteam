import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SteamModule } from './features/steam/steam.module';
import { SharedModule } from './shared/shared.module';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { headerInterceptorProviders } from './helpers/header.interceptor';
import { LoginModule } from './features/login/login.module';
import { FormsModule } from '@angular/forms';

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
    LoginModule,
    FormsModule,
  ],
  providers: [
    authInterceptorProviders,
    headerInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

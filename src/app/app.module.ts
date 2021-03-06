import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './pages/login-page/login.page.module';
import { HomeModule } from './pages/home-page/home.page.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IsUserGuard } from './core/guards/is-user.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    HomeModule,
    PageNotFoundModule,
    BrowserAnimationsModule
  ],
  providers: [IsUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

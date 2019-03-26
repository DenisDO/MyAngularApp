import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login-page/login.page.component';
import { HomeComponent } from './pages/home-page/home.page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.page.component';
import { IsUserGuard } from './core/guards/is-user.guard';
import { HomeUserProfileComponent } from './pages/home-page/home-page-user-profile/home-page-user-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsUserGuard],
    children: [{
      path: ':id',
      component: HomeUserProfileComponent
    }]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

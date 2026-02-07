import { Routes } from '@angular/router';
import { Landing } from './components/landing/landing';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Proposal } from './components/proposal/proposal';
import { Gallery } from './components/gallery/gallery';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'proposal', component: Proposal, canActivate: [AuthGuard] },
  { path: 'gallery', component: Gallery, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

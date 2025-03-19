import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaincontentareaComponent } from './maincontentarea/maincontentarea.component';

export const routes: Routes = [
    { path: 'hello/red', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SidebarComponent },
    { path: 'about', component: MaincontentareaComponent },
    { path: '**', component: MaincontentareaComponent } // Catch-all route
  ];

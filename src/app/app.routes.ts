import { Routes } from '@angular/router';
import { AppliedJobsComponent } from './pages/applied-jobs/applied-jobs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InterviewExperiencesComponent } from './pages/interview-experiences/interview-experiences.component';
import { ReferencesComponent } from './pages/references/references.component';


export const routes: Routes = [
    { path: '', component: AppliedJobsComponent },
    { path: 'interviews', component: InterviewExperiencesComponent },
    { path: 'references', component: ReferencesComponent },
    { path: 'dashboard', component: DashboardComponent },
  ];

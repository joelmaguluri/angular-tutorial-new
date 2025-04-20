import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import appliedJobs from '../applied-jobs/appliedJobs.json'
@Component({
  selector: 'app-company-info',
  standalone: true,
  imports: [],
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})
export class CompanyInfoComponent implements OnInit  {
  companyName: string = '';
  jobsApplied: number = 0;
  metrics = {
    interviewRate: '25%',
    offerRate: '10%',
    rejectionRate: '65%'
  };
  appliedJobs = appliedJobs

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log('CompanyInfoComponent initialized');
    this.route.paramMap.subscribe(params => {
      this.companyName = params.get('companyName') ?? '';
      //compute metrics for a specific company 

      this.jobsApplied = 0;
      this.metrics = {
        interviewRate: '0%',
        offerRate: '0%',
        rejectionRate: '100%'
      };
  

    });
  }
  
}





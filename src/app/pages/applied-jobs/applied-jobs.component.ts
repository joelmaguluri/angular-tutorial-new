import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import appliedJobsData from './appliedJobs.json'; // Adjust the path as necessary

@Component({
  selector: 'app-applied-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.css'
})
export class AppliedJobsComponent {
  selectedJobId = signal<number | null>(null);
  searchTerm: string = '';
  searchTriggered = false; 
  appliedJobs = appliedJobsData;

  highlightRow(id: number) {
    this.selectedJobId.set(id);
    this.searchTriggered = false; 
  }

  
  performSearch() {
    this.searchTriggered = true;
  }

  
  isHighlighted(job: any) {
    const term = this.searchTerm.toLowerCase();

    const matchesSearch = this.searchTriggered && (
      job.CompanyName.toLowerCase().includes(term) ||
      job.Role.toLowerCase().includes(term) ||
      job.ResumeAppliedWith.toLowerCase().includes(term) ||
      job.id.toString() === term
    );

    const isClicked = this.selectedJobId() === job.id;

    return matchesSearch || isClicked;
  }

 
  isFaded(job: any) {
    if (!this.searchTriggered) return false;

    const term = this.searchTerm.toLowerCase();
    const matches = (
      job.CompanyName.toLowerCase().includes(term) ||
      job.Role.toLowerCase().includes(term) ||
      job.ResumeAppliedWith.toLowerCase().includes(term) ||
      job.id.toString() === term
    );

    return !matches;
  }
  getStatusClass(job: any): string {
    if (!this.searchTriggered) return '';
  
    const status = job.Status.toLowerCase();
    switch (status) {
      case 'offered':
        return 'status-offered';
      case 'rejected':
        return 'status-rejected';
      case 'pending':
        return 'status-pending';
      case 'interview':
        return 'status-interview';
      default:
        return '';
    }
  }
  
}

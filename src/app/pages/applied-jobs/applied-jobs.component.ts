import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

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

  appliedJobs = [
    {
      id: 1,
      CompanyName: "Google",
      DateApplied: "2025-03-15",
      Role: "Software Engineer",
      ResumeAppliedWith: "Google_Resume_V1.pdf",
      Status: "Interview"
    },
    {
      id: 2,
      CompanyName: "Amazon",
      DateApplied: "2025-03-17",
      Role: "Front End Developer",
      ResumeAppliedWith: "Frontend_Resume_Amazon.pdf",
      Status: "Pending"
    },
    {
      id: 3,
      CompanyName: "Microsoft",
      DateApplied: "2025-03-19",
      Role: "Full Stack Developer",
      ResumeAppliedWith: "Fullstack_MS.pdf",
      Status: "Rejected"
    },
    {
      id: 4,
      CompanyName: "Netflix",
      DateApplied: "2025-03-20",
      Role: "UI Engineer",
      ResumeAppliedWith: "Netflix_UI_Version2.pdf",
      Status: "Interview"
    },
    {
      id: 5,
      CompanyName: "Facebook",
      DateApplied: "2025-03-21",
      Role: "React Developer",
      ResumeAppliedWith: "ReactMeta.pdf",
      Status: "Pending"
    },
    {
      id: 6,
      CompanyName: "Airbnb",
      DateApplied: "2025-03-22",
      Role: "Software Engineer II",
      ResumeAppliedWith: "Airbnb_Resume_V2.pdf",
      Status: "Rejected"
    },
    {
      id: 7,
      CompanyName: "Spotify",
      DateApplied: "2025-03-23",
      Role: "Product Engineer",
      ResumeAppliedWith: "Spotify_Product_Resume.pdf",
      Status: "Offered"
    },
    {
      id: 8,
      CompanyName: "Stripe",
      DateApplied: "2025-03-24",
      Role: "Backend Developer",
      ResumeAppliedWith: "Stripe_Backend_V1.pdf",
      Status: "Pending"
    },
    {
      id: 9,
      CompanyName: "Uber",
      DateApplied: "2025-03-25",
      Role: "Platform Engineer",
      ResumeAppliedWith: "Uber_Resume.pdf",
      Status: "Offered"
    },
    {
      id: 10,
      CompanyName: "Tesla",
      DateApplied: "2025-03-26",
      Role: "Software Developer",
      ResumeAppliedWith: "Tesla_Software_Resume.pdf",
      Status: "Interview"
    }
  ];

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

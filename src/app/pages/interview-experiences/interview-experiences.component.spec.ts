import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewExperiencesComponent } from './interview-experiences.component';

describe('InterviewExperiencesComponent', () => {
  let component: InterviewExperiencesComponent;
  let fixture: ComponentFixture<InterviewExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewExperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

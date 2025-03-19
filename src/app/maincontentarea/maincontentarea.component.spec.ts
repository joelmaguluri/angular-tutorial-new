import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentareaComponent } from './maincontentarea.component';

describe('MaincontentareaComponent', () => {
  let component: MaincontentareaComponent;
  let fixture: ComponentFixture<MaincontentareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaincontentareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincontentareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

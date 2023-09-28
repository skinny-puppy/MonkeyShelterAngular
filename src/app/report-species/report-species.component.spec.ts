import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSpeciesComponent } from './report-species.component';

describe('ReportSpeciesComponent', () => {
  let component: ReportSpeciesComponent;
  let fixture: ComponentFixture<ReportSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSpeciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMonkeyComponent } from './update-monkey.component';

describe('UpdateMonkeyComponent', () => {
  let component: UpdateMonkeyComponent;
  let fixture: ComponentFixture<UpdateMonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMonkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

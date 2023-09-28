import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMonkeyComponent } from './create-monkey.component';

describe('CreateMonkeyComponent', () => {
  let component: CreateMonkeyComponent;
  let fixture: ComponentFixture<CreateMonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMonkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMonkeyComponent } from './delete-monkey.component';

describe('DeleteMonkeyComponent', () => {
  let component: DeleteMonkeyComponent;
  let fixture: ComponentFixture<DeleteMonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMonkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

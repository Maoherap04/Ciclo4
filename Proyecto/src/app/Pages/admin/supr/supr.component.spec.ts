import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprComponent } from './supr.component';

describe('SuprComponent', () => {
  let component: SuprComponent;
  let fixture: ComponentFixture<SuprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

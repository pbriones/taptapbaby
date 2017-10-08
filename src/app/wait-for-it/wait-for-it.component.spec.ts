import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitForItComponent } from './wait-for-it.component';

describe('WaitForItComponent', () => {
  let component: WaitForItComponent;
  let fixture: ComponentFixture<WaitForItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitForItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitForItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

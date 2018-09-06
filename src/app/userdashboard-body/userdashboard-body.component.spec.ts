import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardBodyComponent } from './userdashboard-body.component';

describe('UserdashboardBodyComponent', () => {
  let component: UserdashboardBodyComponent;
  let fixture: ComponentFixture<UserdashboardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

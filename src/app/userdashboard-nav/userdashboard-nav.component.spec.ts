import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardNavComponent } from './userdashboard-nav.component';

describe('UserdashboardNavComponent', () => {
  let component: UserdashboardNavComponent;
  let fixture: ComponentFixture<UserdashboardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

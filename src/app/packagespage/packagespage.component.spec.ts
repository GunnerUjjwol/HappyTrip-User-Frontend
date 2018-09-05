import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagespageComponent } from './packagespage.component';

describe('PackagespageComponent', () => {
  let component: PackagespageComponent;
  let fixture: ComponentFixture<PackagespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

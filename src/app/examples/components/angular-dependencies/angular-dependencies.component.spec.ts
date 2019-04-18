import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDependenciesComponent } from './angular-dependencies.component';

describe('AngularDependenciesComponent', () => {
  let component: AngularDependenciesComponent;
  let fixture: ComponentFixture<AngularDependenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDependenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDependenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTsComponent } from './angular-ts.component';

describe('AngularTsComponent', () => {
  let component: AngularTsComponent;
  let fixture: ComponentFixture<AngularTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

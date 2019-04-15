import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreFormComponent } from './explore-form.component';

describe('ExploreFormComponent', () => {
  let component: ExploreFormComponent;
  let fixture: ComponentFixture<ExploreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

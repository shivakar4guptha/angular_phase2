import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSecondPhaseComponent } from './reactive-second-phase.component';

describe('ReactiveSecondPhaseComponent', () => {
  let component: ReactiveSecondPhaseComponent;
  let fixture: ComponentFixture<ReactiveSecondPhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveSecondPhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSecondPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

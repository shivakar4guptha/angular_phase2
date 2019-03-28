import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomengComponent } from './someng.component';

describe('SomengComponent', () => {
  let component: SomengComponent;
  let fixture: ComponentFixture<SomengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

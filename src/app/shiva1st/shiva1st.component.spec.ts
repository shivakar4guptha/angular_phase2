import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shiva1stComponent } from './shiva1st.component';

describe('Shiva1stComponent', () => {
  let component: Shiva1stComponent;
  let fixture: ComponentFixture<Shiva1stComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shiva1stComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shiva1stComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

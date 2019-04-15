import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingComponentComponent } from './creating-component.component';

describe('CreatingComponentComponent', () => {
  let component: CreatingComponentComponent;
  let fixture: ComponentFixture<CreatingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

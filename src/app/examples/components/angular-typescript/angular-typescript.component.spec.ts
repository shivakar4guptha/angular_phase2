import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTypescriptComponent } from './angular-typescript.component';

describe('AngularTypescriptComponent', () => {
  let component: AngularTypescriptComponent;
  let fixture: ComponentFixture<AngularTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TackOptisolComponent } from './tack-optisol.component';

describe('TackOptisolComponent', () => {
  let component: TackOptisolComponent;
  let fixture: ComponentFixture<TackOptisolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TackOptisolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TackOptisolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

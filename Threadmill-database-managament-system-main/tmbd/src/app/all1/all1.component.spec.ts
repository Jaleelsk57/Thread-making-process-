import { ComponentFixture, TestBed } from '@angular/core/testing';

import { All1Component } from './all1.component';

describe('All1Component', () => {
  let component: All1Component;
  let fixture: ComponentFixture<All1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [All1Component]
    });
    fixture = TestBed.createComponent(All1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page1.component';
import { ChildComponent } from '../../components/child/child.component';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page1Component, ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

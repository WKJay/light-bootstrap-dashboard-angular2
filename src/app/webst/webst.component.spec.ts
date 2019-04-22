import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstComponent } from './webst.component';

describe('WebstComponent', () => {
  let component: WebstComponent;
  let fixture: ComponentFixture<WebstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

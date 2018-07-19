import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchemployeeComponent } from './fetchemployee.component';

describe('FetchemployeeComponent', () => {
  let component: FetchemployeeComponent;
  let fixture: ComponentFixture<FetchemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

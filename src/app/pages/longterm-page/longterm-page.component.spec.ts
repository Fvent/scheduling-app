import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtermPageComponent } from './longterm-page.component';

describe('LongtermPageComponent', () => {
  let component: LongtermPageComponent;
  let fixture: ComponentFixture<LongtermPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongtermPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongtermPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

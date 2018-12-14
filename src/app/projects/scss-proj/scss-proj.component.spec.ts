import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssProjComponent } from './scss-proj.component';

describe('ScssProjComponent', () => {
  let component: ScssProjComponent;
  let fixture: ComponentFixture<ScssProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

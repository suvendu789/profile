import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssProjComponent } from './css-proj.component';

describe('CssProjComponent', () => {
  let component: CssProjComponent;
  let fixture: ComponentFixture<CssProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

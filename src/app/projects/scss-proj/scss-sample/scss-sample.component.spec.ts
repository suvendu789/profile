import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssSampleComponent } from './scss-sample.component';

describe('ScssSampleComponent', () => {
  let component: ScssSampleComponent;
  let fixture: ComponentFixture<ScssSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

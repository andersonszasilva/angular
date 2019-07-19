import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacaoFormComponent } from './transacao-form.component';

describe('TransacaoFormComponent', () => {
  let component: TransacaoFormComponent;
  let fixture: ComponentFixture<TransacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

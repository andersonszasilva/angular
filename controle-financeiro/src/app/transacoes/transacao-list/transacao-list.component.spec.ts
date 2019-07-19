import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacaoListComponent } from './transacao-list.component';

describe('TransacaoListComponent', () => {
  let component: TransacaoListComponent;
  let fixture: ComponentFixture<TransacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

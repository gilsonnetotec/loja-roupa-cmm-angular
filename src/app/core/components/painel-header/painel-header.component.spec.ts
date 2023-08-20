import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelHeaderComponent } from './painel-header.component';

describe('PainelHeaderComponent', () => {
  let component: PainelHeaderComponent;
  let fixture: ComponentFixture<PainelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelHeaderComponent]
    });
    fixture = TestBed.createComponent(PainelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratorCardComponent } from './colaborator-card.component';

describe('ColaboratorCardComponent', () => {
  let component: ColaboratorCardComponent;
  let fixture: ComponentFixture<ColaboratorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaboratorCardComponent]
    });
    fixture = TestBed.createComponent(ColaboratorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

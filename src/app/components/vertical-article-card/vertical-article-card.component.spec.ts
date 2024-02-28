import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalArticleCardComponent } from './vertical-article-card.component';

describe('VerticalArticleCardComponent', () => {
  let component: VerticalArticleCardComponent;
  let fixture: ComponentFixture<VerticalArticleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalArticleCardComponent]
    });
    fixture = TestBed.createComponent(VerticalArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

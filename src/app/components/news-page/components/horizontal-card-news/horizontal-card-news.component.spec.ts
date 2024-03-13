import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorizontalCardNewsComponent } from './horizontal-card-news.component';


describe('HorizontalCardNewsComponent', () => {
  let component: HorizontalCardNewsComponent;
  let fixture: ComponentFixture<HorizontalCardNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalCardNewsComponent]
    });
    fixture = TestBed.createComponent(HorizontalCardNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

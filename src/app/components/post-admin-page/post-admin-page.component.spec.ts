import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminPageComponent } from './post-admin-page.component';

describe('PostAdminPageComponent', () => {
  let component: PostAdminPageComponent;
  let fixture: ComponentFixture<PostAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAdminPageComponent]
    });
    fixture = TestBed.createComponent(PostAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

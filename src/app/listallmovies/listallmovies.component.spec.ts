import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallmoviesComponent } from './listallmovies.component';

describe('ListallmoviesComponent', () => {
  let component: ListallmoviesComponent;
  let fixture: ComponentFixture<ListallmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

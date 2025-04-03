import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComponent } from './add.edit.component';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from '../../services/state.service';
import { RepoService } from '../../services/repo.service';
import { ComponentRef } from '@angular/core';

describe('AddComponent', () => {
  let component: AddEditComponent;
  let fixture: ComponentFixture<AddEditComponent>;
  let componentRef: ComponentRef<AddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditComponent, HttpClientModule],
      providers: [StateService, RepoService],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('isAdding', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

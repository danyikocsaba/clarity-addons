/*
 * Copyright (c) 2018-2022 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { ClrCollapseExpandSection } from './collapse-expand-section';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CollapseExpandSectionComponent', () => {
  let component: ClrCollapseExpandSection;
  let fixture: ComponentFixture<ClrCollapseExpandSection>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ClrCollapseExpandSection],
        imports: [ClarityModule, FormsModule, BrowserAnimationsModule],
        teardown: { destroyAfterEach: false },
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrCollapseExpandSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be expanded then collapsed', () => {
    component.onCollapseExpand();
    expect(component.isCollapsed).toBeFalse();
    component.onCollapseExpand();
    expect(component.isCollapsed).toBeTrue();
  });

  it('should fire expand event', () => {
    spyOn(component.expanded, 'emit');
    component.onCollapseExpand();
    expect(component.expanded.emit).toHaveBeenCalledTimes(1);
  });

  it('should fire collapse event', () => {
    component.isCollapsed = false;
    spyOn(component.collapsed, 'emit');
    component.onCollapseExpand();
    expect(component.collapsed.emit).toHaveBeenCalledTimes(1);
  });
});

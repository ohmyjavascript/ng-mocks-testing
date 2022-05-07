import { NavigationListComponent } from './navigation-list.component';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import {AppModule} from "../../app.module";

describe('NavigationListComponent', () => {

  beforeEach(() => {
    return MockBuilder(NavigationListComponent, AppModule)
  });

  it('should be defined', () => {
    const fixture = MockRender(NavigationListComponent);
    expect(fixture.point.componentInstance).toBeDefined();
  })

  it('should get display the count', () => {
    // Arrange
    const fixture = MockRender(NavigationListComponent);
    const component = fixture.point.componentInstance;
    const iconEl = ngMocks.reveal(fixture, 'mat-icon'); // Tricky one
    // Act
    component.count = 2;
    fixture.detectChanges();
    //Assert
    expect(ngMocks.input(iconEl, 'matBadge')).toBe(component.count);
  })
})

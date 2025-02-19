import {RootStackParamList} from '@models/navigation';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

// Create a navigation reference to interact with navigation actions programmatically.
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// Function to navigate to a specific route, using its name and optional parameters.
export function navigate(name: keyof RootStackParamList, params?: any) {
  // Check if the navigation container is ready before navigating.
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// Function to go back to the previous screen in the stack.
export function goBack() {
  // Check if the navigation container is ready and can go back before performing the action.
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

// Function to push a new screen onto the stack.
export function push(name: keyof RootStackParamList, params?: any) {
  // Ensure the navigation container is ready before dispatching a push action.
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

// Function to pop the current screen from the stack (go to the previous screen).
export function pop() {
  // Ensure the navigation container is ready before dispatching a pop action.
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
  }
}

// Function to pop all screens except the first one, returning to the root of the stack.
export function popToTop() {
  // Check if the navigation container is ready before dispatching the pop-to-top action.
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}

// Function to replace the current screen with a new one, specified by its name and optional parameters.
export function replace(name: keyof RootStackParamList, params?: any) {
  // Ensure the navigation container is ready before dispatching the replace action.
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

// Function to get the current route's name, if the navigation container is ready.
export function getRouteName(): string | undefined {
  // Check if the navigation container is ready and if a current route exists, then return its name.
  if (navigationRef.isReady() && navigationRef.getCurrentRoute()) {
    return navigationRef.getCurrentRoute()?.name;
  }
  // If no current route or the container is not ready, return undefined.
  return undefined;
}

// Grouping all navigation-related actions into a single object for easy access.
const NavigationService = {
  navigate,
  push,
  goBack,
  replace,
  popToTop,
  pop,
  getRouteName,
};

export default NavigationService;

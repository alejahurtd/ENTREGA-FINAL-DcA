import { Actions, AppState, NavigationActions } from '../types/storeScreens';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;

	switch (action) {
		case NavigationActions.NAVIGATE:
			return {
				...currentState,
				screen: payload,
			};

		default:
			return currentState;
	}
};

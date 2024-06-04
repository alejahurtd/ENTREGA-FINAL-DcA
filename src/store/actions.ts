import { NavigateAction, NavigationActions, Screens } from '../types/storeScreens';

export const navigate = (screen: Screens): NavigateAction => {
	return {
		action: NavigationActions.NAVIGATE,
		payload: screen,
	};
};

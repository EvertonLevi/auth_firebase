import Page1 from './Page1';
import Page2 from './Page2';

import {
	createDrawerNavigator,
	createAppContainer,
	createStackNavigator,
	createSwitchNavigator
} from 'react-navigation';
import { Navigation } from 'react-navigation'
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

const MenuRoutes = createStackNavigator({
	Page1: {
		name: 'Page1',
		screen: Page1,
		navigationOptions: ({ Navigation }) => ({
			title: 'Página 1'
		}),
	},
	Page2: {
		name: 'Page2',
		screen: Page2,
		navigationOptions: ({ Navigation }) => ({
			title: 'Página 2'
		}),
	}
})

const MenuConfig = {
	initialRouteName: 'Page1',
	tabBarOptions: {
		labelStyle: {
			fontSize: 12,
		},
		tabStyle: {
			width: 100,
		},
		style: {
			backgroundColor: 'blue',
		}
	}

}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

//createBottomTabNavigator
//creacteStackNavigator
const MainRoutes = {
	Page1: {
		name: 'Page1',
		screen: MenuNavigator
	},
	Page2: {
		name: 'Page2',
		screen: Page2
	}
}

const MainNavigator = createAppContainer(
	createSwitchNavigator(MainRoutes,
		{ initialRouteName: 'Page1' })
)

export default MainNavigator;
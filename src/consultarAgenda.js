import React from 'react';
import { View, Button, Text } from 'react-native';

const consultarAgenda = ({ navigation }) => (
	<View style={{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}}>
		<Text>Consultar Agenda ;D</Text>
		<Button
			title="Ir para Fidelidade"
			onPress={() => navigation.navigate('fidelidade')}
		/>
	</View>
);

Page1.navigationOptions = {
	title: 'Consultar Agenda',
}

export default consultarAgenda;
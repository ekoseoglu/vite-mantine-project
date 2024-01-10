import '@mantine/core/styles.css';
import { Button, createTheme, MantineProvider, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import Ripple from 'material-ripple-effects';

function App() {
	const ripple = new Ripple();

	const theme = createTheme({
		primaryShade: 4,
		primaryColor: 'primary',
		scale: 1,
		autoContrast: false,
		other: {
			test: 'test',
		},
		colors: {
			'primary': ['#8a99e7', '#7788e3', '#6377df', '#5066db', '#3c55d7', '#364dc2', '#3044ac', '#2a3b97', '#243381'],
			'secondary': ['#b381ec', '#a66ce9', '#9957e6', '#8d42e3', '#802de0', '#7329ca', '#6624b3', '#5a1f9d', '#4d1b86'],
			'accent': ['#ff9a7a', '#ff8964', '#ff794e', '#ff6838', '#ff5722', '#e64e1f', '#cc461b', '#b33d18', '#993414'],
			'info': ['#7ac0f8', '#64b6f7', '#4dabf5', '#37a1f4', '#2196f3', '#1e87db', '#1a78c2', '#1769aa', '#145a92'],
			'success': ['#66cd99', '#4dc488', '#33bc77', '#1ab366', '#019147', '#009a4d', '#008944', '#00783b', '#006733'],
			'warning': ['#ffc166', '#ffb74d', '#ffad33', '#ffa21a', '#ff9800', '#e68900', '#cc7a00', '#b36a00', '#995b00'],
			'error': ['#f1979c', '#ee858c', '#ec747b', '#e9626b', '#e7515a', '#d04951', '#b94148', '#a2393f', '#8b3136'],
		},
		components: {
			Button: Button?.extend({
				classNames: (_theme, props) => {
					return ({
// eslint-disable-next-line react/prop-types
						root: `active:translate-y-0 ${props?.variant === 'outline' ? `hover:bg-${props?.color} hover:text-${props?.color}-content` : ''}`,
					})
				}
			}),
			TextInput: TextInput?.extend({
				classNames: {
				},
			}),
		},
	});

	const [themeMode, setThemeMode] = useState('light');
	const handleThemeChange = () => {
		setThemeMode((themeMode) => {
			document.body.setAttribute('data-theme', themeMode === 'dark' ? 'light' : 'dark');
			return themeMode === 'dark' ? 'light' : 'dark';
		});
	}
	useEffect(() => {
		document.body.setAttribute('data-theme', themeMode);
	}, []);

	return (
		<MantineProvider defaultColorScheme="light" theme={theme}>
			<div className="w-screen h-screen bg-base-body">

				<Button
					variant="outline"
					color="primary"
					onClick={handleThemeChange}
					size="sm"
					//					loading={true}
				>
					Theme Change
				</Button>
			</div>
		</MantineProvider>
	);
}

export default App;

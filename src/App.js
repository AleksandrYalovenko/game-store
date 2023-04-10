import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import GamePage from './pages/game-page/game-page';
import HomePage from './pages/home-page/home-page';
import OrderPage from './pages/order-page/order-page';
import { store } from './redux';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='App'>
					<Header />
					<Routes>
						<Route path='/game-store' element={<HomePage />} />
						<Route path='/app/:title' element={<GamePage />} />
						<Route path='order' element={<OrderPage />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;

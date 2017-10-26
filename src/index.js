import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route} from 'react-router-dom';
  import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Router = ()=> {
	return(
		<BrowserRouter>
			<App/>
		</BrowserRouter>
		)
}

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();

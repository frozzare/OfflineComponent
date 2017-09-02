import React from 'react';
import Offline from './Offline';

const App = () => (
	<Offline offlineComponent={() => <div>Whoops looks like we went offline!</div>}>
		<p>Hello offline world!</p>
	</Offline>
);

export default App;

import { useState, ReactElement } from 'react';
import Tabs from './Tabs';
import Sidebar from './Sidebar';
import Overview from './Overview';
import Topics from './Topics';
import Brokers from './Brokers';
import Producers from './Producers';
import Consumers from './Consumers';

type AppProps = {};

const App: React.FC<AppProps> = (): ReactElement => {
	const [tab, setTab] = useState<string>('');
	const [server, setServer] = useState<string>('');
	console.log('app server', server)
	function changeTab(newTab: string) {
		if (newTab === 'overview') 				setTab('overview')
		else if (newTab === 'topics') 		setTab('topics')
		else if (newTab === 'brokers') 		setTab('brokers')
		// else if (newTab === 'producers') 	setTab('producers')
		// else if (newTab === 'consumers') 	setTab('consumers')
	}
	// function serverInput()
	const serverInput=(serverString: string)=>{
		if(!serverString) return console.error('Please input Port num');
		setServer(serverString);
	}
	return (
		<>
			<div className='flex h-screen w-auto'>
				<Sidebar serverInput={serverInput}/>
				<div className='w-screen'>
				<Tabs changeTab={changeTab} tab={tab} />
					{tab === 'overview' && <Overview server={server}/>}
					{tab === 'topics' && <Topics />}
					{tab === 'brokers' && <Brokers />}
					{/* {tab === 'producers' && <Producers />}
					{tab === 'consumers' && <Consumers />} */}
				</div>
			</div>
		</>
	);
}

export default App;

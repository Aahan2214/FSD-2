import { Provider } from 'react-redux';
import { store } from './store/store';
import { CounterContextProvider } from './components/context/CounterGlobalContextApi';
import LocalStateCounter from './components/CounterLocalState';
import CounterContextParent from './components/context/CounterGlobalContextParent';
import CounterReduxParent from './components/context/CounterGlobalReduxParent';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <CounterContextProvider>
        <div style={{ padding: '20px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
          <h1 style={{ color: '#333' }}>State Management Examples</h1>
          
          <h2 style={{ color: '#333', marginTop: '30px' }}>Local State Counters</h2>
          <LocalStateCounter cno={1} />
          <LocalStateCounter cno={2} />
          
          <h2 style={{ color: '#333', marginTop: '30px' }}>Context API Counters</h2>
          <div style={{ backgroundColor: '#e8d4b0', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
            <CounterContextParent cno={1} />
          </div>
          <div style={{ backgroundColor: '#e8d4b0', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
            <CounterContextParent cno={2} />
          </div>
          
          <h2 style={{ color: '#333', marginTop: '30px' }}>Redux Counters</h2>
          <div style={{ backgroundColor: '#c8e6c9', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
            <CounterReduxParent cno={1} />
          </div>
          <div style={{ backgroundColor: '#c8e6c9', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
            <CounterReduxParent cno={2} />
          </div>
        </div>
      </CounterContextProvider>
    </Provider>
  );
}

export default App;
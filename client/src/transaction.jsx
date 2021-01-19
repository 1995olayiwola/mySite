import React from 'react';
import App3 from './App3'
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const index2 = () => {
    const store = createStore(reducer);
    return (
        <div>
            <Provider store={store}><App3 />
</Provider>,
        </div>
    )
}

export default index2

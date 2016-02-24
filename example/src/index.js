import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// import examples
import App from './App';
import Basic from './basic';
import BasicGroup from './basic_group';
import BasicSequence from './basic_sequence';

render(<Router history={browserHistory}>
    <Route path='/' component={App}>
        <Route path='/basic' component={Basic}/>
        <Route path='/basic-group' component={BasicGroup}/>
        <Route path='/basic-sequence' component={BasicSequence}/>
        <Route path='*' component={App}/>
    </Route>
</Router>, document.getElementById('root'));

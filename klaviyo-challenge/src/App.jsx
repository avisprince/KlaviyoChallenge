import './App.css';
import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import TemplatePicker from 'views/pages/templatePicker/TemplatePicker';
import TemplateBuilder from 'views/pages/templateBuilder/TemplateBuilder';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={()=><TemplatePicker />} />
                    <Route exact path="/TemplateBuilder" render={()=><TemplateBuilder />} />
                    <Route component={()=><div>Sorry, that URL is not available</div>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

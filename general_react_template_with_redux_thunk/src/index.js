import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {incrementClicks} from "./redux/actions/items";
import {Provider} from "react-redux";
import configureStore from "./redux/store/configureStore";
import LikesGenerator from "./components/LikesGenerator";
import './styles/index.scss';

const store = configureStore();

class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            cliks:0,
        }
        store.subscribe(()=>{
//            store.dispatch(incrementClicks());
                this.setState({
                    cliks:store.getState().items.clicks,
                });
        })
    }
    render(){
        return (
            <Provider store={store}>
                <div>
                    <div>listen. this is the number of clicks {this.state.cliks}</div>
                    <LikesGenerator/>
                </div>
            </Provider>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));

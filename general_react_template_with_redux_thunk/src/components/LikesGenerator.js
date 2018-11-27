import React,{Component} from "react";
import {connect} from "react-redux";
import {incrementClicks,updateShowOff,exampleWithThunk} from "../redux/actions/items";

class LikesGenerator extends Component {
    constructor(props){
        super(props);
        this.incClicks=this.incClicks.bind(this);
    }
    render(){
        return (
            <div>
                <button onClick={this.incClicks}>pressMe</button>
                <div>this is the final result:{this.props.items.clicks}</div>
                <div>and the showoff is:{this.props.items.showOff}</div>
            </div>
        )
    }   
    incClicks(){
        this.props.exampleWithThunk("baby");
        /*
        this.props.updateShowOff("lalala");
        this.props.incrementClicks();
        */
    }
}
const mapStateToProps = (state) => {
    return {
        items:state.items,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        incrementClicks: ()=>dispatch(incrementClicks()),
        updateShowOff:(sText)=>dispatch(updateShowOff(sText)),
        exampleWithThunk:(sName)=>dispatch(exampleWithThunk(sName))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LikesGenerator);

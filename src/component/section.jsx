import React, {Component} from 'react';
import Products from './section/products';
import Details from './section/details';
import {Route} from "react-router-dom";

export class Section extends Component{
    render(){
        return(
            <div>
                <Route path="/product" component={Products} exact/>
                <Route path="/Product/:id" component={Details} />
            </div>
        )
    }
}
export default Section;
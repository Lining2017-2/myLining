import React ,{Component} from 'react'

export default class HomeHeader extends Component{
    render(){
        return(
            <div>
                {this.props.cityName}
            </div>
        )
    }
}

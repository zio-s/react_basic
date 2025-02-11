import React, { Component } from 'react'

export default class MyHeader extends Component {
    render(){
        console.log('MyHeader.js 실행됨');
        return(
            <header>
            <h1 className="logo">
                <a href=""
                    onClick = {function(e){
                        e.preventDefault();
                        this.props.onChangesPage();
                    }.bind(this)
                }

                >{this.props.title}</a>
            </h1>
            <p>{this.props.desc}</p>
            </header>
        )
    }
}

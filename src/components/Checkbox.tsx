import React, { Component, useRef } from "react";
import _uniqueId from 'lodash/uniqueId';

export interface ICheckboxProps {
    children: string | string[] | JSX.Element | JSX.Element[];
}

export interface ICheckboxState {
    checked: boolean;
}

export default class Checkbox extends Component<
    ICheckboxProps,
    ICheckboxState
> {
    id: string;
    /**
     *
     */
    constructor(props: ICheckboxProps) {
        super(props);

        this.id = _uniqueId("prefix-");
        
        this.state = {
            checked: false,
        };
    }

    render() {
        return (
            <div>
                <input id={this.id} type="checkbox" />
                <label htmlFor={this.id}>{this.props.children}</label>
            </div>
        );
    }
}

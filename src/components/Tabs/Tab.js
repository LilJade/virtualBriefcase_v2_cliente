import React from 'react'

export default function Tab() {
    if(this.props.isSelected) {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

    return null;
}

/**
 * Created by guozhen on 2017/4/16.
 */
import React from 'react';
import CheckList from './CheckList';
import PropTypes from 'prop-types';

let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value !== 'string' || value.length > 80) {
            return new Error(`${propName} in ${componentName} is longer than 80 characters`);
        }
    }
};

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: true
        }
    }

    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }
    render() {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks} />
                </div>
            );
        }

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        return (
            <div className="card">
                <div style={sideColor} />
                <div className={this.state.showDetails ? "card__title card__title--is-open": "card__title"} onClick={
                    this.toggleDetails.bind(this)
                }>{this.props.title}Haha</div>
                {cardDetails}
            </div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default Card;
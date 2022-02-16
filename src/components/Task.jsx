import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;
    this.state = {
      id: data.id,
      hasFinished: false,
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event) {
    const { onUpdate } = this.props;
    const currentState = this.state;
    this.setState({
      hasFinished: event.target.checked,
    });

    onUpdate({
      ...currentState,
      hasFinished: event.target.checek,
    });
  }

  render() {
    const { hasFinished } = this.state;
    const { data, onRemove } = this.props;
    const { id, title } = data;
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckbox} checked={hasFinished} />
        {title}
        <button type="button" onClick={() => onRemove(id)}>Remover</button>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
}.isRequired;
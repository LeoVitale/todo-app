import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {changeDescription, search, add, clear} from './todoActions.js';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.search();
  }

  keyHandler = (e) => {
    const {add, search, clear, description} = this.props;
    if (e.key === 'Enter') {
      e.shiftKey
        ? search(description)
        : add(description);
    } else if (e.key === 'Escape') {
      clear();
    }
  }

  render() {
    const {add, search, description, clear} = this.props;
    
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}></input>
        </Grid>
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={() => add(description)}/>
          <IconButton style="info" icon="search" onClick={() => search(description)}/>
          <IconButton style="default" icon="close" onClick={clear}/>
        </Grid>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {description: state.todo.description}
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    changeDescription,
    search,
    add,
    clear
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
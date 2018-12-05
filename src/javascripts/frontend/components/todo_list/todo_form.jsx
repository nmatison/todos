import React from 'react';
import { uniqueId } from '../../util/unique_id_util';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null, 
      title: "",
      body: "",
      done: false
    };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  };

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    };
  }

  submitForm(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()})
    this.props.receiveTodo(todo);
    this.setState = {
      id: null,
      title: "",
      body: "",
      done: false
    };
  }

  render() {
    return (
      <div className="form-div">
        <form className="todo-form" onSubmit={this.submitForm}>
          <label> Title
            <input type="text" onChange={this.updateField("title")} value={this.state.title}/>
          </label>
          <label> Description
            <input type="text" onChange={this.updateField("body")} value={this.state.body} />
          </label>
          <input type="submit" value="Submit Todo"/>
        </form>
      </div>
    );
  };
};

export default TodoForm;
import React from 'react';

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
  };

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    };
  }

  render() {
    return (
      <div className="todo-form">
        <label> Title
          <input type="text" onChange={this.updateField("title")} value={this.state.title}/>
        </label>
        <label> Description
          <input type="text" onChange={this.updateField("body")} value={this.state.body} />
        </label>
      </div>
    );
  };
};

export default TodoForm;
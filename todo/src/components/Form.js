import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {
  state = {
    content: '',
    dueDate: '',
    priority: false,
    contentError: ''
  }

  handleInputFocus = e => {
    if(this.state.contentError) {
      this.setState({contentError:''});
    }
  }

  handleInputChange = e => {
    const valueOrChecked = e.target.checked || e.target.value;
    this.setState({
      [e.target.name]: valueOrChecked
    })
  }

  handleDateChange = date => {
    this.setState({
      dueDate: date
    })
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let isValid = true;
    if(this.state.content.length < 3) {
      this.setState({contentError: "Wpisz conajmniej 3 znaki"})
      isValid = false;
    } else if(this.state.content.length >= 50) {
      this.setState({contentError: "Przekroczyłeś 50 znaków"})
      isValid = false;
    }

    if(isValid) {
      const newTask = {
        content: this.state.content,
        dueDate: Date.parse(this.state.dueDate) || 0,
        priority: this.state.priority,
      }
      this.props.addTask(newTask);
      this.setState({
        content: '',
        dueDate: '',
        priority: false,
        contentError: ''
      })
    }
  }

  render() {
    const {content, dueDate, priority, contentError} = this.state;
    return (
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <form className="form">
          <div className="form__textarea-container">
            <textarea className="form__textarea" name="content" placeholder="Treść zadania" value={content} onFocus={this.handleInputFocus} onChange={this.handleInputChange}/>
            {contentError && <span className="form__error">{contentError}</span>}
          </div>
          <div className="form__date-container">
            <DatePicker
              className="form__date"
              selected={dueDate}
              onChange={this.handleDateChange}
              placeholderText='Data'
              dateFormat="dd-MM-yyyy"
            />
          </div>
          <label htmlFor="priorityCheckbox" className="form__checkbox-label">
            <input id="priorityCheckbox" className="form__checkbox" name="priority" type="checkbox" value={priority} onChange={this.handleInputChange}/>
            Priorytet
          </label>
          <input className="form__submit" type="submit" value="Dodaj" onClick={this.handleFormSubmit}/>
        </form>
      </section>
    );
  }
}

export default Form;

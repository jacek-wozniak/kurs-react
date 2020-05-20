import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {
  state = {
    content: '',
    dueDate: '',
    priority: false
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
    const newTask = {
      id: 5,
      content: 'sasasWyrzucić śmieci',
      createDate: '13.05.2020',
      dueDate: '17.05.2020',
      doneDate: '',
      priority: false,
    }
    this.props.addTask(newTask);
  }

  render() {
    const {content, dueDate, priority} = this.state;
    return (
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <form className="form">
          <textarea className="form__textarea" name="content" placeholder="Treść zadania" value={content} onChange={this.handleInputChange}/>
          {/*<input name="dueDate" type="date" value={dueDate} onChange={this.handleInputChange}/>*/}
          <DatePicker
            className="form__date"
            selected={dueDate}
            onChange={this.handleDateChange}
            placeholderText='Data'
            dateFormat="dd-MM-yyyy"
          />
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

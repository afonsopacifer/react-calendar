import React, { Component } from 'react';
import DayCard from './components/DayCard';
import './assets/styles/CalendarApp.css';

class CalendarApp extends Component {

  constructor() {
    super();
    this.state = {
      allMonths: [],
      monthName: "",
      amountDays: 0,
      monthNumber: 0
    };
  }

  componentDidMount() {
    const allMonths = [
      {name:"January", days:31},
      {name:"February", days:28},
      {name:"March", days:31},
      {name:"April", days:28},
      {name:"May", days:31},
      {name:"June", days:30},
      {name:"July", days:31},
      {name:"August", days:31},
      {name:"September", days:29},
      {name:"October", days:31},
      {name:"November", days:30},
      {name:"December", days:29}
    ];

    const date = new Date();
    const monthNumber = date.getMonth();

    this.setState({
      monthName: allMonths[monthNumber].name,
      amountDays: allMonths[monthNumber].days,
      monthNumber: monthNumber,
      allMonths: allMonths
    })
  }

  chooseMonth() {
    const currentMonthNumber = this.refs.monthRange.value;

    const currentMonthName = this.state.allMonths[currentMonthNumber].name;
    const currentMonthDays = this.state.allMonths[currentMonthNumber].days;

    this.setState({
      monthName: currentMonthName,
      amountDays: currentMonthDays,
      monthNumber: currentMonthNumber
    })
  }

  render() {
    const allDays = [];
    const amount = this.state.amountDays;

    for (let i=1; i < amount+1; i++) {
        allDays.push(<DayCard key={i} dayNumber={i} />);
    }

    return (
      <div className="calendar-app">

        <header className="header">
          {this.state.monthName}
        </header>

        <main className="days-list">
          {allDays}
        </main>

        <footer className="footer">
          <input type="range" min="0" max="12" ref="monthRange" value={this.state.monthNumber} onChange={this.chooseMonth.bind(this)}/>
        </footer>

      </div>
    );

  }
}

export default CalendarApp;

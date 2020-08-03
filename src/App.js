import React from "react";
import Section from "./components/Section";
import Notification from "./components/Notification";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleClick = (e) => {
    let count = this.state[e.target.id];
    this.setState(
      {
        [e.target.id]: ++count,
      },
      this.countTotalFeedback
    );
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    this.setState(
      {
        total,
      },
      this.countPositiveFeedbackPercentage
    );
  }

  countPositiveFeedbackPercentage() {
    const { good, total } = this.state;
    const persentage = ((good / total) * 100).toFixed(2);
    this.setState({
      positiveFeedback: persentage + "%",
    });
  }

  render() {
    const options = [
      {
        name: "Good",
        id: "good",
        key: 0,
      },
      {
        name: "Neutral",
        id: "neutral",
        key: 1,
      },
      {
        name: "Bad",
        id: "bad",
        key: 2,
      },
    ];
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positiveFeedback={this.state.positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

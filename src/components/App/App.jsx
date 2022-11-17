import React from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends React.Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementFeddback = ({ target: { name } }) => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const objKey = Object.keys(this.state);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex-box',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={objKey}
              onLeaveFeedback={this.handleIncrementFeddback}
            />
          </Section>

          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            </Section>
          )}
        </>
      </div>
    );
  }
}

export default App;

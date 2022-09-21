import React from "react";
import Clock from 'react-live-clock';


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h4> Time, how much you used on this page: {this.state.seconds} seconds. </h4>
        <hr></hr>
      </div>
    );
  }
}

const Times = () => {
  return (
    <div>
        <div className="dashboard">
          <button id="button-back-2" type="button" class="btn btn-light"><a href="/home"><span class="bi bi-arrow-return-left"></span></a></button>
          <Timer/>
          <h1>Time in Ukraine 🇺🇦</h1>
          <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'UA/Pacific'} />
        </div>
    </div>
  );
};

export default Times;

import React, { Component } from "react";
import Timeline from "../components/Timeline";
import {
  checkIfMobile,
} from "../utils";

// const data = csv('./data/date_count.csv')

interface Props {
  timelineData: Array<object>;
  clusterCountData: Array<object>;
  clusterThemeData: Array<object>;
}

interface State {
  isMobile: boolean;
}

class App extends Component<Props> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isMobile: checkIfMobile(),
    };
    this.handleResize = this.handleResize.bind()
  }

  handleResize() {
    const isMobile = checkIfMobile();
    if (isMobile !== this.state.isMobile) this.setState({ isMobile });

    // iOS Height Fix: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize); // prevent memory leaks
  }

  render() {
    // console.log(data)
    return (
      <div className="App">
        {/* <Title />
        <Arrow />
        <Text /> */}
        <Timeline
          data={[]} />
        {/* <GraphScroll />
        <AllClusters />
        <Text />
        <ThemedCluster /> */}

      </div>
    );
  }
}

export default App;

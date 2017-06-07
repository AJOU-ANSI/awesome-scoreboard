import React, {Component} from 'react';

import './ScoreBoard.css';

export class ScoreBoard extends Component {
  constructor(props) {
    super(props);

    let cnt = 0;

    this.state = {arr: this.randomSort(5), before: []};

    const timer = setInterval(() => {
      this.setState({
        arr: this.randomSort(5)
      });

      // if( cnt++ === 10 ) clearInterval(timer);
    }, 2000);
  }

  randomSort(n) {
    let visited = [], cnt = 0;

    let arr = [];

    while(cnt < n) {
      let r = Math.floor(Math.random()*n);

      if(visited[r]) continue;

      visited[r] = true;

      cnt++;
      arr.push(r);
    }

    return arr;
  }

  render() {
    const pos = [5, 90, 175, 260, 345];
    const colors = ['red', 'orange', 'yellow', 'green', 'skyblue']
    const {arr} = this.state;

    const topPos = [];

    for(let i = 0 ; i < 5 ; i++) {
      topPos[i] = pos[arr.indexOf(i)];
    }

    return (
      <div className="container-fluid">
        <div className="header text-center">
          <h1 className="display-2 header-title">
            AWESOME-BOARD
          </h1>
        </div>

        <div className="board">
          {[0, 1, 2, 3, 4].map((val, index) => (
            <div className="rank-card" style={{top: topPos[index], zIndex: 10000-topPos[index], backgroundColor: colors[index]}} key={index}>
              <div>
                참가자 {index}
              </div>
            </div>
          ))}
        </div>

        <div className="footer">

        </div>
      </div>
    )
  }
}
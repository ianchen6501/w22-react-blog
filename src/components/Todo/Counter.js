import React from 'react'

class Test extends React.Component {
  componentDidMount() {
    console.log('Test mount')
  }

  componentWillUnmount() {
    console.log('Test unmount')
  }

  render() {
    return <div>123</div>
  }
}

export default class Counter extends React.PureComponent { //
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
    console.log('counstructor')
  }

  //componentWillMount() mount 之後 
  //componentDidCatch() 有錯誤的時候要怎麼處理

  // shouldComponentUpdate(nextProps, nextState) { 
  //   if(nextState.counter > 10) return false
  //   return true
  // }

  componentDidMount() {
    console.log('did mount', this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState:', prevState)
    console.log('update!')
  }

  componentWillUnmount() {
    console.log('unmount')
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log('render')
    const {counter} = this.state
    return (
      <div>
        <button onClick= {this.handleClick}>+1</button>
        counter: {counter}
        {counter === 1 && <Test>123</Test>}
      </div>
    )
  }
}
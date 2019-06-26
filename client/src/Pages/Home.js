import React from 'react'

class Home extends React.Component {
  componentDidMount() {
  }
  
  handleClick = () => {
    fetch('/api/carpools').then(res => res.json()).then(json => {
      if (json.ok) {
        // handle redirect
      } else {
        // probalby and error occurred
      }
    });
  };


  render() {
    return <div>Home</div>
  }
}

export default Home;
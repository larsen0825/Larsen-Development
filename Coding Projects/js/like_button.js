'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'This button was created using React js! click around to find other features on my page. :)';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Pssst....Click me'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

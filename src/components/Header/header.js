import { Component } from "react/cjs/react.production.min";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          It's not enough to be busy, so are the ants. The question is, what are
          we busy about?
          <br />
          Henry David Thoreau
        </p>
      </div>
    );
  }
}

export default Header;
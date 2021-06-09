import React from "react";
import "./listing.css";

class CommonList extends React.Component {
  render() {
    let retComp = null;
    const { listItems } = this.props;
    if (listItems instanceof Array && listItems.length > 0) {
      retComp = (
        <ul className="listingBlk">
          {listItems.map((item, index) => (
            <li key={`${item}_${index}`}>{item}</li>
          ))}
        </ul>
      );
    }
    return retComp;
  }
}
export default CommonList;

import React from "react";

const Sidebar = props => {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          {/* 3.0 3.1 when click the button it takes us to the authors list */}
          <button onClick={props.deselectAuthor}>AUTHORS</button>
        </h4>
      </section>
    </div>
  );
};

export default Sidebar;

import React from "react";

export default function SidebarLink(props) {
  return (
    <a className="sidebarLink" href={props.link}>
      <div className="sidebarLinkText">{props.text}</div>
    </a>
  );
}

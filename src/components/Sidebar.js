import React from "react";
import SidebarLink from "./SidebarLink";
export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebarHeader">
        <div>Ryan's React Zone</div>
      </div>
      <div className="sidebarContent">
        <SidebarLink link="/" text="Home"></SidebarLink>
        <SidebarLink link="/#/taco" text="Hungry?"></SidebarLink>
        <SidebarLink link="/#/about" text="About Me"></SidebarLink>
      </div>
    </section>
  );
}

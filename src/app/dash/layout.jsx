import React from "react";

export default function Layout({ children, users, revenue, notifications, login }) {
  const isLoggedIn = false
  return isLoggedIn ? (
    <div>
      <div >{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div >{users}</div>
          <div >{revenue}</div>
        </div>
        <div style={{ display: "flex", flexGrow: 1 }}>
          <div style={{ display: "flex", flexGrow: 1, width:"50px" }} >{notifications}</div>
        </div>
      </div>
    </div>
  ):(
    login
  );
}

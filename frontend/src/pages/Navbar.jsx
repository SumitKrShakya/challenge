import React from "react";
import { useNavigation, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "10vh",
        // backgroundColor: "grey",x
        color: "royalblue",
        padding: "10px 30px",
        alignItems: "center",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div
        className="options"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems: "center",
          width: "80%",
          flexDirection: "row",
        }}
      >
        <Link to="/add">
          <div className="add">Add A User</div>
        </Link>
        <Link to="/view">
          <div className="view">View Users</div>
        </Link>
      </div>
      <div className="me">
        <h2>ME</h2>
      </div>
    </div>
  );
};

export default Navbar;

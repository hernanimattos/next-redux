import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Store } from "./store";

const {
  storeHome: {
    mappers: { mapDispatchToProps, mapStateToProps }
  }
} = Store;

const Homepage = props => (
  <div>
    {console.log(props)}
    <h1>Homepage</h1>
    <h3>Current build: {props.teste}</h3>
    <p>
      <button onClick={e => props.testeFn(1, 4)}>Bump build!</button>
    </p>
    <Link href="/about">
      <a>About Us</a>
    </Link>
  </div>
);

Homepage.getInitialProps = async props => {
  await console.log(props, "llll");
  // props.
  // const res = await fetch('https://api.github.com/repos/developit/preact')
  // const json = await res.json() // better use it inside try .. catch
  // console.log(json, 'fggggg')
  // return { stars: json.stargazers_count }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

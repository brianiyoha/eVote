import React from 'react';

class Header extends React.Component{
  render () {
    return(
      <header className="top">
      <h1>eVote</h1>
		<nav id="menu">			
			<ul>
				<li className="active"><a href="#">Home</a></li>
				<li><a href="#">Updates</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Review</a></li>
			</ul>
		</nav>
      </header>
    )
  }
}

export default Header;

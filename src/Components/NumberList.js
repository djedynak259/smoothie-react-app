import React from 'react';

// Number List

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//     	{number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

class ListItem extends React.Component {
	render() {
	  // Correct! There is no need to specify the key here:
	  return <li>{this.props.value}</li>;
	}  
}

class NumberList extends React.Component {
	render () {
	  const numbers = this.props.numbers;
	  const listItems = numbers.map((number) =>
	    // Correct! Key should be specified inside the array.
	    <ListItem key={number.toString()}
	              value={number} />
	  );
	  return (
	    <ul>
	      {listItems}
	    </ul>
	  );
	}  
}

export default NumberList;
var React 	 = require('react'),
		ReactDom = require('react-dom');

var HellowOrld = React.createClass({
	render: function () {
		return (
			<div> Hellow Orld </div>
		)
	}
});

ReactDom.render(
	<HellowOrld />,
	document.getElementById('app')
);

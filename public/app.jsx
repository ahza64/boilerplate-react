
var Greeter = React.createClass({

  getDefaultProps: function () {
    return {
      name: "React's default prop for name",
      message: "React's default prop for message"
    };
  },

  onButtonClick: function (e) {
    e.preventDefault();
    var name = this.refs.name.value;
    alert(name);
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Justin'
var message;

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);

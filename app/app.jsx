import React from 'react';

class ReactForms extends React.Component{
constructor(props){
  super(props);

  this.state = {
    firstName:{
      'label':'First Name ',
      'placeHolder':'Enter your first name'
    },
    lastName:{
      'label':'Last Name ',
      'placeHolder':'Enter your last name'
    },
    gender:{
      'label':'Gender',
      'gender1':'Male',
      'gender2':'Female'
    }

  }
}

  render(){
    return(
      <form>
        <div className="form-group">
          <Label labelData = {this.state.firstName}/>
          <InputBox inputData = {this.state.firstName}/>
        </div>

        <div className="form-group">
          <Label labelData = {this.state.lastName}/>
          <InputBox inputData = {this.state.lastName}/>
        </div>

        <div className="form-group">
          <Label labelData = {this.state.gender}/>
          <RadioBtn genderType = {this.state.gender.gender1}/>
          <RadioBtn genderType = {this.state.gender.gender2}/>
        </div>
      </form>
    );

  }
}

class Label extends React.Component{
render(){
  return(
    <label>{this.props.labelData.label}</label>
  );
  }
}

class InputBox extends React.Component{
render(){
  return(
    <input type="text" placeholder={this.props.inputData.placeHolder}/>
  );
  }
}

class RadioBtn extends React.Component{
render(){
  return(
    <label><input type="radio"/>{this.props.genderType}</label>
  );
  }
}

export default ReactForms;

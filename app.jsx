import React from 'react';

class ReactForms extends React.Component{
constructor(props){
  super(props);

  this.state = {
    pageHeader:{
      'label':'Register with shopKart to start savings now..'
    },
    firstName:{
      'label':'First Name ',
      'placeHolder':'Enter your first name',
      'fieldType':'text'
    },
    lastName:{
      'label':'Last Name ',
      'placeHolder':'Enter your last name',
      'fieldType':'text'
    },
    email:{
      'label':'Email ID',
      'placeHolder':'Enter your email id',
      'fieldType':'email'
    },
    password:{
      'label':'Password ',
      'placeHolder':'Enter your password',
      'fieldType':'password'
    },
    confirmPassword:{
      'label':'Confirm Password ',
      'placeHolder':'Re enter password',
      'fieldType':'password'
    },
    gender:{
      'label':'Gender',
      'gender1':'Male',
      'gender2':'Female'
    },
    dropdownMenu:{
      'menuName':'Select Membership Level',
      dropdownValues : ['Ultimate','Platinum','Gold']
    },
    button:{
      'label':'Submit',
      'btnType':'Submit'
    },
  }
}

  render(){
    return(
    <div>
      <PageHeader pageHeader = {this.state.pageHeader}/>
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
      <DropdownMenu dropdownMenuProp = {this.state.dropdownMenu}/>

      <div className="form-group">
        <Label labelData = {this.state.email}/>
        <InputBox inputData = {this.state.email}/>
      </div>

      <div className="form-group">
        <Label labelData = {this.state.password}/>
        <InputBox inputData = {this.state.password}/>
      </div>

      <div className="form-group">
        <Label labelData = {this.state.confirmPassword}/>
        <InputBox inputData = {this.state.confirmPassword}/>
      </div>
      <Button btnProp = {this.state.button}/>
      </form>
    </div>
    );

  }
}

class PageHeader extends React.Component{
render(){
  return(
  <h2>{this.props.pageHeader.label}</h2>
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
    <input type={this.props.inputData.fieldType} placeholder={this.props.inputData.placeHolder}/>
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

class DropdownMenu extends React.Component{
render(){
  return(

    <div className="dropdown form-element">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.dropdownMenuProp.menuName}
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
      {this.props.dropdownMenuProp.dropdownValues.map(function(name, index){
                   return <li key={ index }><a href="#">{name}</a></li>;
                 })}
      </ul>
    </div>
  );
  }
}

class Button extends React.Component{
render(){
  return(
      <button type={this.props.btnProp.btnType} className="btn btn-default">{this.props.btnProp.label}</button>
  );
  }
}


export default ReactForms;

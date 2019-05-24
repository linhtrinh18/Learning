import React from 'react';
import { Field, reduxForm } from 'redux-form'


class StreamForm extends React.Component {
    renderError({error, touched}) {
        if(touched && error) {
            return (<div className="ui error message">
                        <div className="header">{error}</div>
                    </div>
            );
        }
    }
    
    renderInput = ({ input, label, meta}) => {
        //  console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>   
                {this.renderError(meta)}
            </div>
        );
    }
    
    
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }
    
    
    render(){
        // console.log(this.props)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}


//Validate our input
const validate = (formValues) => {
    const errors = {}
    if(!formValues.title){
        //Only ran if the user enter the title 
        errors.title = "you must enter the title";
    }
    if(!formValues.description) {
        //Only ran if the user enter the title 
        errors.description = "you must enter the description";
    }
    return errors
}


// export default reduxForm({
//     form: 'streamCreate',
//     validate: validate
// })(StreamCreate)

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

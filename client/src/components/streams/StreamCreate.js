import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

// Field = component
// reduxForm ~ connect()

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return <span className="ui orange tiny header"> * {error} </span>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    const showError = ` ${meta.error && meta.touched ? 'error' : ''}`;
    // input = Field Props
    return (
      <div className={['field', showError].join(' ')}>
        <label>
          {label}
          {this.renderError(meta)}
        </label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }
  if (!formValues.description) {
    errors.description = 'Please enter a description';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);

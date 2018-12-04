// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string } from "prop-types";
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
// Instruments
import { shapeComment } from '../shapes';
// Styles
import Styles from './styles.m.css';
// Actions
import { commentsActions } from '../../bus/comments/actions';

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...commentsActions }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class NewComment extends Component {
    static propTypes = {
        postId: string.isRequired,
    };

    static defaultProps = {
        postId: undefined,
    };

    _submitCommentForm = (comment) => {
        const { postId, actions } = this.props;

        comment.postId = postId;
        console.log(`comment ->`, comment);
        actions.createCommentAsync(comment);
    };

    render () {
        return (
            <section className = { Styles.comment }>
                <p>New comment</p>
                <div className = { Styles.body }>
                    <Formik
                        initialValues = { shapeComment.shape }
                        render = { (props) => {
                            const { isValid, touched, errors } = props;

                            const centeredWrapperStyle = cx(Styles.wrapper, Styles.centered, {
                                [Styles.disabledInput]: !isValid,
                            });
                            const bodyStyle = cx({
                                [Styles.invalidInput]: !isValid && touched.body && errors.body,
                            });
                            const buttonStyle = cx(Styles.signupSubmit, {
                                [Styles.disabledButton]: !isValid,
                            });

                            return (
                                <Form className = { Styles.form }>
                                    <div className = { centeredWrapperStyle }>
                                        <div className = { Styles.inputPlace }>
                                            <Field
                                                className = { bodyStyle }
                                                name = 'body'
                                                placeholder = 'comment'
                                                type = 'textarea'
                                            />
                                            <div className = { Styles.errorMessage }>
                                                {errors.body}
                                            </div>
                                            <div className = { Styles.submitButtonPlace }>
                                                <button className = { buttonStyle } disabled = { !isValid } type = 'submit'>
                                                Send comment
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            );
                        } }
                        validationSchema = { shapeComment.schema }
                        onSubmit = { this._submitCommentForm }
                    />

                </div>
            </section>
        );
    }
}

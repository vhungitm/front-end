import { FormControl } from 'react-bootstrap';

export const FieldFeedback = props => {
  const { message, ...feedbackProps } = props;

  return <FormControl.Feedback {...feedbackProps}>{message}</FormControl.Feedback>;
};

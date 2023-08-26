import { withProperties } from '@shared/utils/withProperties';

import ErrorMessage from './components/ErrorMessage';
import FieldError from './components/FieldError';
import FieldLabel from './components/FieldLabel';
import FormControl from './components/FormControl';
import FieldSubmit from './components/FieldSubmit';
import FormGroup from './components/FormGroup';
import FormProvider from './components/FormProvider';

const Form = withProperties(FormProvider, {
  FieldError,
  FieldLabel,
  ErrorMessage,
  FormControl,
  FieldSubmit,
  FormGroup,
});

export default Form;

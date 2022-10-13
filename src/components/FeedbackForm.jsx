import { useDispatch, useSelector } from 'react-redux'
import { setName, setEmail, setMessage } from '../redux/feedbackSlice'
import {
  Form,
  FormHeader,
  TextInput,
  MsgInput,
  SubmitBtn
} from './Components.styled'

// import { useAddFeedbackMutation } from '../redux/feedbackApi'

const FeedbackForm = () => {
  const feedback = useSelector(state => state.feedback)
  const dispatch = useDispatch();
  // const [addFeedback, {isLoading}] = useAddFeedbackMutation();
  const nameInputChangeHandler = (e) => {
    dispatch(setName(e.target.value))
  }
  const emailInputChangeHandler = (e) => {
    dispatch(setEmail(e.target.value))
  }
  const messageInputChangeHandler = (e) => {
    dispatch(setMessage(e.target.value))
  }
  console.log('feed', feedback);
  return (
    <Form>
      <FormHeader>Reach out to us!</FormHeader>
      <TextInput
        placeholder='Your name*'
        type='text'
        required
        value={feedback.name}
        onChange={nameInputChangeHandler}
      ></TextInput>
      <TextInput
        placeholder='Your e-mail*'
        type='email'
        required
        value={feedback.email}
        onChange={emailInputChangeHandler}
      ></TextInput>
      <MsgInput
        placeholder='Your message*'
        type='text'
        maxLength='255'
        required
        value={feedback.message}
        onChange={messageInputChangeHandler}
      ></MsgInput>
      <SubmitBtn>Send message</SubmitBtn>
  </Form>
  )
}

export default FeedbackForm
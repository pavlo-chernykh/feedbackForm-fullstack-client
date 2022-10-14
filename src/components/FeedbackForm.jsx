import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setMessage, setId } from '../redux/feedbackSlice';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Form,
  FormHeader,
  TextInput,
  MsgInput,
  SubmitBtn,
  LoaderDiv
} from './Components.styled'

import { useAddFeedbackMutation } from '../redux/feedbackApi'
import { useAddUserMutation } from '../redux/userApi'
import Loader from './loader/Loader';

const FeedbackForm = () => {
  const feedback = useSelector(state => state.feedback)
  const dispatch = useDispatch();
  const [addFeedback] = useAddFeedbackMutation();
  const [addUser, {isLoading}] = useAddUserMutation();
  const userName = feedback.name;
  const userEmail = feedback.email;
  const userMessage = feedback.message;
  const modal = () =>
    toast.success('Thanks for your feedback!', {
      position: 'top-center',
      autoClose: 3000,
      draggable: true,
      progress: undefined,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: 'colored',
  });
  const nameInputChangeHandler = (e) => {
    dispatch(setName(e.target.value))
  }
  const emailInputChangeHandler = (e) => {
    dispatch(setEmail(e.target.value))
  }
  const messageInputChangeHandler = (e) => {
    dispatch(setMessage(e.target.value))
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    const result = await addUser({'name': userName, 'email': userEmail})
    if (!result.error) {
      const userId = dispatch(setId(result.data.id)) ;
      addFeedback({'content': userMessage, 'userId': userId.payload.toString()});
      dispatch(setName(''));
      dispatch(setEmail(''));
      dispatch(setMessage(''));
      modal();
    } else {
      toast.error(result.error.data.message[0])
    }
  }
  return (
    <>
      {isLoading && <LoaderDiv><Loader/></LoaderDiv>}
      <Form onSubmit={submitHandler}>
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
          maxLength='600'
          required
          value={feedback.message}
          onChange={messageInputChangeHandler}
        ></MsgInput>
        <SubmitBtn type='submit'>Send message</SubmitBtn>
      </Form>
      <ToastContainer 
        position='top-center'
        autoClose={3000}
        draggable
        pauseOnHover
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme='colored'
      />
    </>

  )
}

export default FeedbackForm
import {
  Main,
  AppWrapper
} from './components/Components.styled'
import FeedbackFooter from './components/FeedbackFooter';
import FeedbackForm from './components/FeedbackForm';


function App() {
  return (
    <AppWrapper>
      <Main>
        <FeedbackForm/>
      </Main>
      <FeedbackFooter/>
    </AppWrapper>
  );
}

export default App;

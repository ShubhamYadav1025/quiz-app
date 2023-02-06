import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Questions from './components/Questions';


function App() {
  const questions = [
    {
      id: 1,
      ques: "1. What is React.js?",
      firstOption: "Server Side framework",
      secondOption: "User Interface Framework",
      thirdOption: "Free and open-source library",
      fourthOption: "None of the mentioned",
    },
    {
      id: 2,
      ques: "2. What is a state in React?",
      firstOption: "A permanent storage.",
      secondOption: "Internal storage of the component.",
      thirdOption: "External storage of the component.",
      fourthOption: "None of the above.",
    },
    {
      id: 3,
      ques: "3. What are the two ways to handle data in React?",
      firstOption: "State & Props",
      secondOption: "Services & Components",
      thirdOption: "State & Services",
      fourthOption: "State & Component",
    },
  ];
  return (
    <div>
      <Header counter={questions.length} />
      {questions.map((question) => {
        return <Questions key={question.id} question={question} />;
      })}
      <Footer />
      
    </div>
  );
}

export default App;

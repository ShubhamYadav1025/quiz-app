import React, { useState } from 'react'
import './Questions.css';
const Questions = (props) => {

  const question = props.question;
  const [selected, setSelected] = useState(false)
  const onOptionChange = e => {
    setSelected(e.target.value)
  }
  return (
    <div class="questions">
      <form>
        <p>{question.ques}</p>
        <input
          type="radio"
          id="firstOption"
          value={question.firstOption}
          checked={selected === question.firstOption}
          onChange={onOptionChange} />
        <label>{question.firstOption}</label>
        <br />

        <input
          type="radio"
          id="secondOption"
          value={question.secondOption}
          checked={selected === question.secondOption}
          onChange={onOptionChange} />
        <label>{question.secondOption}</label>
        <br />

        <input
          type="radio"
          id="thirdOption"
          value={question.thirdOption}
          checked={selected === question.thirdOption}
          onChange={onOptionChange} />
        <label>{question.thirdOption}</label>
        <br />

        <input
          type="radio"
          id="forthOption"
          value={question.fourthOption}
          checked={selected === question.fourthOption}
          onChange={onOptionChange} />
        <label>{question.fourthOption}</label>

        <hr />
      </form>
    </div>
  );
}

export default Questions

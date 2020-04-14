import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import accents from 'remove-accents';

function Word({ word, currentWord }) {
  return (
    <div className="wod-view-wrapper">
      <Highlighter
        highlightClassName="highlight"
        searchWords={[currentWord, accents.remove(currentWord)]}
        autoEscape
        textToHighlight={word.text}
      />
      <div className="underline" />
      <h4>{word.meaning}</h4>
      <div className="examples-list">
        {word.examples.map((example) => (
          <Highlighter
            key={example}
            highlightClassName="example-highlight"
            searchWords={[word.text.toLowerCase()]}
            autoEscape
            textToHighlight={example}
          />
        ))}
      </div>
    </div>
  );
}

Word.propTypes = {
  word: PropTypes.shape({
    text: PropTypes.string.isRequired,
    meaning: PropTypes.string.isRequired,
    examples: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  currentWord: PropTypes.string,
};

Word.defaultProps = {
  currentWord: null,
};

export default Word;

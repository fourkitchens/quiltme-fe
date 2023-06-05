import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SubmissionContext = React.createContext();

export function SubmissionContextProvider({ children }) {
  const [submission, setSubmission] = useState(null);

  const submissionContext = {
    setData(data) {
      setSubmission(data);
    },
    getData() {
      return submission;
    },
  };

  return (
    <SubmissionContext.Provider value={submissionContext}>
      {children}
    </SubmissionContext.Provider>
  );
}

SubmissionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubmissionContext;

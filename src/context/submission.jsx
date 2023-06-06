import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SubmissionContext = React.createContext();

export function SubmissionContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);

  const submissionContext = {
    setItems(data) {
      setItems(data)
    },
    getItems() {
      return items;
    },
    setFilter(data) {
      setFilter(data);
    },
    getFilter() {
      return filter;
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

import PropTypes from 'prop-types';
import PageHeader from '../ui/02-molecules/page-header';
import PageFooter from '../ui/02-molecules/page-footer';

export default function PageLayoutWrapper({ children }) {
  return (
    <div>
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  );
}

PageLayoutWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

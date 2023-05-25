import PropTypes from 'prop-types';
import PageHeader from '../ui/02-molecules/page-header';
import PageFooter from '../ui/02-molecules/page-footer';

export default function PageLayoutWrapper({ children }) {
  return (
    <div>
      <a href="#main-content">Skip to main content</a>
      <PageHeader />
      <main id="main-content">
        {children}
      </main>
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

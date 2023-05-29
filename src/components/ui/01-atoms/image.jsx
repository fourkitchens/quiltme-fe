import NextImage from 'next/image';
import PropTypes from 'prop-types';

export default function Image({ src, ...props }) {
  return <NextImage src={decodeURI(src)} {...props} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

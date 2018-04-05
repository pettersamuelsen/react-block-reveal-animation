import React from 'react';
import PropTypes from 'prop-types';

const BlockRevealAnimation = ({ delay, duration, className, children }) => (
  <span className={classNames('block-reveal-animation', className)}>
    <div
      className="block-reveal-animation__element"
      style={{
        animationDelay: `${delay + duration / 2}s`,
      }}>
      {props.children}
    </div>
    <span
      className="block-reveal-animation__block"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  </span>
);

BlockRevealAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

BlockRevealAnimation.defaultProps = {
  className: '',
  delay: 1,
  duration: 0.9,
};

export default BlockRevealAnimation;

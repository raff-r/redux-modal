import React from 'react';
import loremIpsum from 'lorem-ipsum';

const DemoModal = () => {
  return (
    <p>{loremIpsum({count: 100})}</p>
  )
};

export default DemoModal;
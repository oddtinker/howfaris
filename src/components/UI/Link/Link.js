import React from 'react';

const link = props => (
  <a href={props.urlAddress}
  target="_blank"
  rel="noopener noreferrer"
  title={props.urlTitle}>{props.urlText}</a>
)

export default link;
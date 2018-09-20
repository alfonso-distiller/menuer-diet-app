import React from 'react';

const withClass = (WrappedComponent, ClassName) => {
  return (props) => (
    <div className={ClassName}>
      <WrappedComponent />
    </div>
  )
}

export default withClass;
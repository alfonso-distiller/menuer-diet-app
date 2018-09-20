import React from 'react';

const withClass = (WrappedComponent, ClassName) => {
  return (props) => (
    <div className={ClassName}>
      <WrappedComponent ref={props.forwardedRef} {...props}/>
    </div>
  )
}

export default withClass;
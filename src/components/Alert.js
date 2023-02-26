//Creating dismissable Alert

import React from 'react' //short_hand:'rfce'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">  {/*'props.alert && ...'is like 'if...else statement' */}
        <strong>{props.alert.type}</strong>:{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert

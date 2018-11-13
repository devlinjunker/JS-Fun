import React from 'react'

class ListDisplay extends React.Component {
  render () {
    let listItems = this.props.items.map((item) =>{
      return <div key={item}>{item}</div>
    })

    return <div>
      {listItems}
    </div>
  }
}

export default ListDisplay;

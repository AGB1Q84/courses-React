function List(props) {
    console.log(props, "<<<<")
    return <ul>
      {props.arr.map(i => {
        return <li>{i}</li>
      })}
    </ul>
}

export default List
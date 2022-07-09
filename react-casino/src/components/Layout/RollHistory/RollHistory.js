function RollHistory(props) {
  return(
    <div>
      {
       props.rolls.map((item, index) => {
        return <div key={index}>{item}</div>
       }) 
      }
    </div>
  )
}
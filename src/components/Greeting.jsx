const Greeting = ({ timeOfDay }) => {
  return timeOfDay.toLowerCase() === 'morning' ? 'Good morning' : 'Good afternoon';
}

export default Greeting

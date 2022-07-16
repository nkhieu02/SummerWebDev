const Header = ({ course}) => {
    console.log(course);
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
const Part = (props) => {
    const part = props.part;
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div> 
    )
  }
const Content = ({parts}) => {
    console.log(parts);
    return (
      <div>
            {parts.map((element) => <Part part={element} key={ element.id} />)}
      </div>
    )
  }
const Total = ({ parts }) => {
    const sum = parts.map(y => y.exercises).reduce((previousValue, currentValue) => previousValue + currentValue);
    return (
      <>
        <h4>Total of {sum} exercises</h4>
      </>
    )
}
const Course = (props) => {
    const course = props.course;
    return (
        <>
          <Header course={course.name} />
          <Content parts={ course.parts} />
          <Total parts={ course.parts}/>
        </>
      )
}
export default Course;
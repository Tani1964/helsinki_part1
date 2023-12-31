import Content from "../components/Content"
import Header from "../components/Header"
import Total from "../components/Total"

const Exercises = () => {
    const course = 'Half Stack application development'
      const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
      }
      const part2 = {
        name: 'Using props to pass data',
        exercises: 7
      }
      const part3 = {
        name: 'State of a component',
        exercises: 14
      }
    
      return (
        <div>
          <Header course={course} />
          <Content exercises={[part1.exercises,part2.exercises, part3.exercises]} parts={[part1.name, part2.name, part3.name]} />
          <Total exercises={[part1.exercises,part2.exercises, part3.exercises]}/>
        </div>
      )
}

export default Exercises
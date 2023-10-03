import style from './app.module.css'
import exercises from './exercises.JSON'
import Exercise from './components/exercise'

function App () {
  return (
    <div className={style.app}>
      <h1>Ejercicios Javascript</h1>
      <p>Realizados durante la cursada de la materia Tecnicas de Programacion, si bien funcionan no son la unica manera de resolverlos y menos la mas optima en algunos ejercicios.</p>
      {exercises.exercises.map((exercise) => (
        <Exercise key={exercise.id} exercise={exercise} />
      ))}
    </div>
  )
}

export default App

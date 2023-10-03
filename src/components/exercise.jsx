import { useEffect, useState } from 'react'
import style from './exercise.module.css'

/* eslint-disable react/prop-types */
const Exercise = ({ exercise }) => {
  const { name, description, exampleOutput, code, verified } = exercise
  const [result, setResult] = useState(null)
  const [codeFromFile, setCodeFromFile] = useState(null)
  const [consoleOutput, setConsoleOutput] = useState('')
  const [showSolution, setShowSolution] = useState(false)

  const runCode = () => {
    try {
      setConsoleOutput('')
      const originalConsoleLog = console.log
      console.log = (message) => {
        setConsoleOutput((prevOutput) => prevOutput + `${message}\n`)
      }
      const result = eval(codeFromFile)
      console.log = originalConsoleLog

      setResult(result)
    } catch (error) {
      setResult(`Error: ${error}`)
    }
  }

  useEffect(() => {
    fetch(code)
      .then((response) => response.text())
      .then((code) => {
        setCodeFromFile(code)
      })
      .catch((error) => {
        setResult(`Error al cargar el archivo: ${error}`)
      })
  }, [code])

  return (
    <div className={verified ? `${style.exercise__verified} + ${style.exercise}` : `${style.exercise}`}>
      <div className={style.exercise__info}>
        <h2>{name}</h2>
        <h3>{verified ? 'Corregido' : ''}</h3>
        <p>{description}</p>
        <p>{exampleOutput}</p>
      </div>
      {showSolution
        ? (
          <div className={style.exercise__code}>
            <pre>{codeFromFile}</pre>
            <button onClick={runCode}>Ejecutar</button>
            {result !== null && (
              <div className={style.exercise__code_result}>
                <h3>Resultado:</h3>
                <p>{result}</p>
                <pre>{consoleOutput}</pre>
              </div>
            )}
          </div>
          )
        : (
          <div className={style.exercise__code}>
            <button onClick={() => setShowSolution(true)}>Mostrar Solucion</button>
          </div>
          )}
    </div>
  )
}

export default Exercise

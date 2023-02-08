import React, { useEffect, useRef, useState } from 'react'

const DummyComponent: React.FC = () => {
  const ref = useRef<HTMLInputElement | null>(null)
  const [value, setValue] = useState<any>('')

  const changeValues = (target: string): void => {
    setValue(target)
    localStorage.setItem('typed', target)
  }

  const cleanContent = (): void => {
    setValue('')
    localStorage.setItem('typed', '')
  }

  useEffect(() => {
    if (ref.current !== null) ref.current.focus()
  }, [])

  useEffect(() => {
    setValue(localStorage.getItem('typed'))
  }, [])

  return (
    <>
      <h1>Simple React Type and Read with Typescript</h1>
      <input
        type="text"
        ref={ref}
        value={value !== null ? value : ''}
        onChange={(e) => {
          changeValues(e.target.value)
        }}
        className="form-control"
      />
      <div className={String(value).length > 0 ? 'mt-5' : 'd-none'}>
        <div className="alert alert-info">
          <h2>You typed:</h2>
          <p>{value}</p>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            cleanContent()
          }}
        >
          Clear
        </button>
      </div>
    </>
  )
}

export default DummyComponent

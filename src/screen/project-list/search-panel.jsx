import { useState } from 'react'

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  return (
    <from>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </div>
    </from>
  )
}

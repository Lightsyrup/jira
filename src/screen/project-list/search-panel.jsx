import { useState } from 'react'

export const SearchPanel = ({param,setParam}) => {
  const [users, setUsers] = useState([]) //使用数组存放用户名称O

  return (
    <from>
      <div>
        {/* 
        作用：将里面的所有内容进行简直配对。下面内容等价于
        setParam(Object.assign({},param,{name:evt.target.value})) */}
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
      <select
        value={param.personId}
        onChange={(evt) => {
          setParam({ ...param, personId: evt.target.value })
        }}
      >
        <option value={''}>负责人</option>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </from>
  )
}

// Object.assign():合并在一起，并且以下面的为主

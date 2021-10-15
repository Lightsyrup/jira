import { useEffect, useState } from 'react'

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const [users, setUsers] = useState([]) //使用数组存放用户名称
  const [list, setList] = useState([])

  // 请求项目列表接口。当param 改变的时候进行获取
  useEffect(() => {
    fetch('').then(async (response) => {
      // 如果if里面的条件为真就执行
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

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

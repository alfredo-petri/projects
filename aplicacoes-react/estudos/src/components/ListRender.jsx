import { useState } from "react"

const ListRender = () => {
    const [list] = useState([
      {id: 1, name: "Mateus"},
      {id: 2, name: "Thobias"},
      {id: 3, name: "Ezequiel"},
    ]);

  return (
    <div>
      <h3>List Render</h3>
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender
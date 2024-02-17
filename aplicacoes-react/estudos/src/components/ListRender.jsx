import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Mateus", "Tobias", "Joaquim"]);

  return (
    <>
      <h3>List Render</h3>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </>
  )
}

export default ListRender
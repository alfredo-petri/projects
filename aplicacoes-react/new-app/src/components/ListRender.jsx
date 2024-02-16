import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Mateus", "Tobias", "Joaquim"]);

  return (
    <>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </>
  )
}

export default ListRender
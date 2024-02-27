import { Footer } from "./Footer"


interface Card {
    id: number,
    text: string,
    details: string
}


export const NewComponent = ({id, text, details}: Card) => {

  return (
    <>
        <h3>Titulo {id}</h3>
        <p>{text}</p>
        <p>{details}</p>   
        <Footer>
            #testeChildren
        </Footer>
    </>
  )
}

import { DetailTool, ListTool } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina'

export const DashBoard = () => {
  return (
    <LayoutBaseDePagina title='titulo da pagina' listTool={<DetailTool  />}>

        testando mais um pouco
    </LayoutBaseDePagina>
  )
}

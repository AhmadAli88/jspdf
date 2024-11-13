
import './App.css'
import BasicPdfGenerator from './components/Basic'
import HeaderFooterPdfGenerator from './components/PDF with Custom Header Footer'
import FormPdfGenerator from './components/PDF with Form Data'
import FormattedPdfGenerator from './components/PDF with Formatting and Multiple Pages'
import ImagePdfGenerator from './components/PDF with Image'
import TablePdfGenerator from './components/PDF with Table'

function App() {


  return (
   <div>
    <BasicPdfGenerator/>
    <FormattedPdfGenerator/>
    <TablePdfGenerator/>
    <ImagePdfGenerator/>
    <FormPdfGenerator/>
    <HeaderFooterPdfGenerator/>
   </div>
  )
}

export default App

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Svg,
  Path,
  Font,
  PDFViewer
} from '@react-pdf/renderer'
import { createTw } from 'react-pdf-tailwind'

import { Table, TR, TH, TD } from '@ag-media/react-pdf-table'
const tw = createTw({
  theme: {
    extend: {
      colors: {
        custom: 'cornflowerblue'
      }
    }
  }
})
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    color: 'white'
  },
  section: {
    margin: 10,
    padding: 10
  },
  viewer: {
    backgroundColor: 'white',
    width: '1249px',
    height: '800px'
  }
})
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
})

const Pdf = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={tw('bg-[#FFFFFF]')}></Page>
      </Document>
    </PDFViewer>
  )
}

export default Pdf

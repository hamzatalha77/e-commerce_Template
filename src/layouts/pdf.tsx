import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  Svg,
  Font
} from '@react-pdf/renderer'
import { createTw } from 'react-pdf-tailwind'
import logo from '../Logo.svg'
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
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
})

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  }
})
const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={tw('bg-[#FFFFFF]')}>
        <View style={tw('bg-[#2056FF] w-full py-6')}>
          <Text style={tw('text-[22px] font-bold text-white text-center ')}>
            Fiche d'Intervention de Maintenance
          </Text>
        </View>
        <View style={tw('bg-[#377DFF] w-full py-4 mt-1')}>
          <Text
            style={tw('text-[11.68px] font-normal text-white text-center ')}
          >
            Demandeur
          </Text>
        </View>
        <View style={tw(' w-full mt-1 px-2')}>
          <View style={tw(' bg-[#F3F4F8] w-full rounded-2xl py-4 px-1 mt-1')}>
            {/* <Image
            style={{ width: '100px' }}
            src={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/my-crud-f5100.appspot.com/o/Logo.png?alt=media&token=8edc25f1-8534-4f44-93c2-5a82b5e114ae',
              method: 'GET',

              headers: { 'Cache-Control': 'no-cache' },
              body: ''
            }}
            cache={false}
          /> */}
            <Table style={tw('bg-white rounded-2xl border-[#F3F4F8]')}>
              <TH style={tw('')}>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Propriété
                </TD>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Date d’intervention
                </TD>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Demandé par
                </TD>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Type de contrat
                </TD>
              </TH>

              <TR style={tw('')}>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-3 pl-3'
                  )}
                >
                  Unité 1243 Maarif, Casasablanca
                </TD>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-3 pl-3'
                  )}
                >
                  29/04/204
                </TD>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-3 pl-3'
                  )}
                >
                  Hamid Folan
                </TD>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-3 pl-3'
                  )}
                >
                  Commercial
                </TD>
              </TR>
            </Table>
          </View>
        </View>
        <View style={tw(' w-full  mt-1')}>
          <View
            style={tw(' bg-[#F3F4F8] w-full rounded-2xl py-4 px-2 mr-4 mt-1')}
          >
            <Text
              style={tw(
                'text-[8.7px] font-bold text-[#6B7280] text-center  mb-3'
              )}
            >
              Description du problème
            </Text>
            <View
              style={tw(
                'bg-white w-full py-14 rounded-lg border border-[#DFE4EA] mt-1'
              )}
            >
              <Text style={tw('text-[10.26px] font-normal text-[#9CA3AF]')}>
                Tapez le text ici
              </Text>
            </View>
          </View>
        </View>
        <View style={tw('bg-[#377DFF] w-full py-4 mt-1')}>
          <Text
            style={tw('text-[11.68px] font-normal text-white text-center ')}
          >
            Technicien
          </Text>
        </View>
        <View style={tw(' w-full mt-1 px-2')}>
          <View style={tw(' bg-[#F3F4F8] w-full rounded-2xl py-4 px-1 mt-1')}>
            {/* <Image
            style={{ width: '100px' }}
            src={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/my-crud-f5100.appspot.com/o/Logo.png?alt=media&token=8edc25f1-8534-4f44-93c2-5a82b5e114ae',
              method: 'GET',

              headers: { 'Cache-Control': 'no-cache' },
              body: ''
            }}
            cache={false}
          /> */}
            <Table style={tw('bg-white rounded-2xl border-[#F3F4F8]')}>
              <TH style={tw('')}>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Intervention réalisée
                </TD>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Pièces remplacées
                </TD>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Heure de début
                </TD>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Heure de fin
                </TD>
              </TH>

              <TR style={tw('')}>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-12 pl-3'
                  )}
                >
                  Unité 1243 Maarif, Casasablanca
                </TD>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-12 pl-3'
                  )}
                >
                  Robinet,Fillasse, Joint
                </TD>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-12 pl-3'
                  )}
                >
                  11h00 AM
                </TD>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-12 pl-3'
                  )}
                >
                  03h00 PM
                </TD>
              </TR>
            </Table>
            <Table style={tw('bg-white rounded-2xl border-[#F3F4F8] mt-2')}>
              <TH style={tw('')}>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Commentaire technicien
                </TD>
              </TH>
              <TR style={tw('')}>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-3 pl-3'
                  )}
                >
                  j’ai acheté La pièce NH98 en espèce, le bon serait envoyé avec
                  la fiche d’intervention
                </TD>
              </TR>
            </Table>
            <Table style={tw('bg-white rounded-2xl border-[#F3F4F8] mt-2')}>
              <TH style={tw('')}>
                <TD
                  style={tw('text-[8.7px] text-[#6B7280] font-bold py-3 pl-3')}
                >
                  Commentaire Client
                </TD>
              </TH>
              <TR style={tw('')}>
                <TD
                  style={tw(
                    'text-[8.7px] text-[#6B7280] font-normal py-3 pl-3'
                  )}
                >
                  SeJe tiens à remercier chaleureusement le technicien qui est
                  intervenu chez moi pour un problème de plomberie. il a fait
                  preuve d'un grand professionnalisme et d'une réelle expertise.
                </TD>
              </TR>
            </Table>
          </View>
        </View>
        <View style={tw('grid grid-cols-4')}>
          <View style={tw('mr-20')}>
            <Text
              style={tw('text-[11.68px] font-normal text-black text-center ')}
            >
              Signature technicien
            </Text>
            <Text
              style={tw('text-[11.68px] font-normal text-black text-center ')}
            >
              Nabil Netman
            </Text>
          </View>
          <View style={tw('')}>
            <Text
              style={tw('text-[11.68px] font-normal text-black text-center ')}
            >
              Signature technicien
            </Text>
            <Text
              style={tw('text-[11.68px] font-normal text-black text-center ')}
            >
              Nabil Netman
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Pdf

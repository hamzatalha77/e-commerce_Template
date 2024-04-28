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
        <Page size="A4" style={tw('bg-[#FFFFFF]')}>
          <View style={tw('bg-[#2056FF] w-full py-6')}>
            <Text
              style={tw('text-[22px] font-bold text-white text-center mb-8')}
            >
              Fiche d'Intervention de Maintenance
            </Text>
          </View>
          <View style={tw('bg-[#377DFF] w-full py-6 mt-1')}>
            <Text
              style={tw(
                'text-[11.68px] font-normal text-white text-center justify-center mb-8 '
              )}
            >
              Demandeur
            </Text>
          </View>
          <View style={tw(' w-full px-2 my-1')}>
            <View
              style={tw(' bg-[#F3F4F8] w-full rounded-2xl pt-2 pb-6 px-1 my-1')}
            >
              <View style={tw('mb-2')}>
                <Svg
                  style={{ width: '150', height: '30', margin: 'auto' }}
                  viewBox="0 0 100 18"
                  fill="none"
                >
                  <Path
                    d="M5.6416 0.0717773H16.9538C17.9578 0.0717773 18.7287 0.286907 19.2844 0.735094C19.8402 1.18328 20.1091 1.73903 20.1091 2.4382C20.1091 3.26287 19.7326 3.89033 18.9976 4.30266C19.5175 4.51779 19.9119 4.82256 20.1987 5.23489C20.4676 5.64722 20.611 6.09541 20.611 6.61531C20.611 7.1352 20.4676 7.60132 20.1987 7.99572C19.9298 8.39013 19.5354 8.71282 19.0155 8.94588C18.4956 9.17894 17.8681 9.2865 17.151 9.2865H5.67746L5.6416 0.0717773ZM7.73912 3.65727H16.7208C17.1331 3.65727 17.4379 3.56764 17.653 3.38836C17.8681 3.20909 17.9757 2.97603 17.9757 2.68919C17.9757 2.38442 17.8681 2.15136 17.653 1.97209C17.4379 1.79281 17.1152 1.7211 16.7208 1.7211H7.73912V3.65727ZM7.73912 7.6551H16.918C17.402 7.6551 17.7785 7.54754 18.0295 7.33241C18.2984 7.11728 18.4239 6.83044 18.4239 6.47189C18.4239 6.11334 18.2984 5.84442 18.0295 5.61137C17.7606 5.39624 17.402 5.28867 16.918 5.28867H7.73912V7.6551Z"
                    fill="#377DFF"
                  />
                  <Path
                    d="M22.2245 2.83254C22.4755 2.25886 22.8519 1.77482 23.336 1.34456C23.82 0.914301 24.3758 0.591607 25.0391 0.35855C25.7024 0.125492 26.4374 0 27.2442 0H34.0925C34.8992 0 35.6342 0.125492 36.2976 0.35855C36.9609 0.591607 37.5346 0.932229 38.0007 1.34456C38.4668 1.75689 38.8433 2.25886 39.1122 2.83254C39.3811 3.40622 39.5066 4.01576 39.5066 4.67907C39.5066 5.34239 39.3811 5.95192 39.1122 6.5256C38.8612 7.09928 38.4847 7.58332 38.0007 8.01358C37.5166 8.44384 36.9609 8.76654 36.2976 8.99959C35.6342 9.23265 34.8992 9.35814 34.0925 9.35814H27.2442C26.4374 9.35814 25.7024 9.23265 25.0391 8.99959C24.3758 8.76654 23.8021 8.42591 23.336 8.01358C22.8699 7.60125 22.4934 7.09928 22.2245 6.5256C21.9556 5.95192 21.8301 5.34239 21.8301 4.67907C21.8301 4.01576 21.9556 3.40622 22.2245 2.83254ZM24.3937 6.18498C24.6626 6.63317 25.0391 6.97379 25.5411 7.22477C26.043 7.47576 26.6167 7.60125 27.298 7.60125H34.0208C34.702 7.60125 35.2936 7.47576 35.7777 7.22477C36.2796 6.97379 36.6561 6.63317 36.925 6.18498C37.1939 5.73679 37.3373 5.25275 37.3373 4.67907C37.3373 4.10539 37.1939 3.62135 36.925 3.17316C36.6561 2.72498 36.2617 2.38436 35.7777 2.13337C35.2757 1.88239 34.702 1.75689 34.0208 1.75689H27.298C26.6167 1.75689 26.0251 1.88239 25.5411 2.13337C25.0391 2.38436 24.6626 2.72498 24.3937 3.17316C24.1248 3.62135 23.9814 4.10539 23.9814 4.67907C23.9814 5.25275 24.1248 5.73679 24.3937 6.18498Z"
                    fill="#377DFF"
                  />
                  <Path
                    d="M41.1737 2.83254C41.4247 2.25886 41.8012 1.77482 42.2852 1.34456C42.7692 0.914301 43.325 0.591607 43.9883 0.35855C44.6516 0.125492 45.3867 0 46.1934 0H53.0417C53.8484 0 54.5834 0.125492 55.2468 0.35855C55.9101 0.591607 56.4838 0.932229 56.9499 1.34456C57.416 1.75689 57.7925 2.25886 58.0614 2.83254C58.3303 3.40622 58.4558 4.01576 58.4558 4.67907C58.4558 5.34239 58.3303 5.95192 58.0614 6.5256C57.8104 7.09928 57.4339 7.58332 56.9499 8.01358C56.4658 8.44384 55.9101 8.76654 55.2468 8.99959C54.5834 9.23265 53.8484 9.35814 53.0417 9.35814H46.1934C45.3867 9.35814 44.6516 9.23265 43.9883 8.99959C43.325 8.76654 42.7513 8.42591 42.2852 8.01358C41.8191 7.60125 41.4426 7.09928 41.1737 6.5256C40.9048 5.95192 40.7793 5.34239 40.7793 4.67907C40.7972 4.01576 40.9227 3.40622 41.1737 2.83254ZM43.3608 6.18498C43.6298 6.63317 44.0242 6.97379 44.5082 7.22477C45.0102 7.47576 45.5839 7.60125 46.2651 7.60125H52.9879C53.6692 7.60125 54.2608 7.47576 54.7448 7.22477C55.2468 6.97379 55.6232 6.63317 55.8922 6.18498C56.1611 5.73679 56.3045 5.25275 56.3045 4.67907C56.3045 4.10539 56.1611 3.62135 55.8922 3.17316C55.6232 2.72498 55.2288 2.38436 54.7448 2.13337C54.2428 1.88239 53.6692 1.75689 52.9879 1.75689H46.2651C45.5839 1.75689 44.9923 1.88239 44.5082 2.13337C44.0062 2.38436 43.6298 2.72498 43.3608 3.17316C43.0919 3.62135 42.9485 4.10539 42.9485 4.67907C42.9485 5.25275 43.0919 5.73679 43.3608 6.18498Z"
                    fill="#377DFF"
                  />
                  <Path
                    d="M60.9473 6.49003C61.3955 7.24298 62.1843 7.61946 63.2958 7.61946H71.6142C72.0803 7.61946 72.4388 7.51189 72.6898 7.29676C72.9408 7.08163 73.0484 6.81272 73.0484 6.49003C73.0484 5.755 72.5464 5.37852 71.5604 5.37852H63.1524C62.507 5.37852 61.9333 5.27096 61.4493 5.05583C60.9652 4.8407 60.5888 4.518 60.3199 4.1236C60.0509 3.72919 59.9255 3.24515 59.9255 2.70733C59.9255 2.18743 60.0509 1.72132 60.3199 1.32691C60.5888 0.914581 60.9652 0.609814 61.4851 0.376757C62.005 0.143699 62.6146 0.0361328 63.3496 0.0361328H71.5783C72.3133 0.0361328 72.9587 0.143698 73.4966 0.358828C74.0344 0.573958 74.5184 0.91458 74.9487 1.39862L73.5862 2.67147C73.389 2.36671 73.138 2.13365 72.7974 1.9723C72.4568 1.81095 72.0086 1.72132 71.4528 1.72132H63.3317C62.8835 1.72132 62.5608 1.81095 62.3457 1.99023C62.1305 2.1695 62.005 2.42049 62.005 2.70733C62.005 3.37065 62.4711 3.69334 63.4034 3.69334H71.8472C72.5105 3.69334 73.1021 3.81883 73.6041 4.05189C74.1061 4.28495 74.4826 4.62557 74.7515 5.0379C75.0204 5.46816 75.1638 5.9522 75.1638 6.54381C75.1638 7.09956 75.0204 7.5836 74.7515 8.01386C74.4826 8.44412 74.0702 8.78474 73.5324 9.0178C72.9946 9.26879 72.3492 9.37635 71.5783 9.37635H63.2958C62.4174 9.37635 61.6644 9.25086 61.0549 9.0178C60.4453 8.78474 59.9075 8.39034 59.4414 7.85251L60.9473 6.49003Z"
                    fill="#377DFF"
                  />
                  <Path
                    d="M84.9707 9.2865H82.8731V1.81074H75.9531V0.0717773H91.8727V1.81074H84.9707V9.2865Z"
                    fill="#377DFF"
                  />
                  <Path
                    d="M46.6957 11.0972H48.3809L51.8767 15.7045H50.568L49.8151 14.6827H45.2257L44.4727 15.7045H43.2178L46.6957 11.0972ZM49.2056 13.8759L47.8072 11.9577H47.2335L45.8173 13.8759H49.2056Z"
                    fill="black"
                  />
                  <Path
                    d="M58.7792 15.2924C58.7792 15.7226 58.6896 16.0812 58.5103 16.368C58.331 16.6549 58.0801 16.87 57.7574 16.9955C57.4347 17.1389 57.0761 17.2106 56.6638 17.2106H54.1719C53.7416 17.2106 53.3831 17.1568 53.0962 17.0493C52.8094 16.9417 52.5584 16.7624 52.3612 16.5294L53.0783 15.884C53.2038 16.0632 53.3472 16.1887 53.5265 16.2784C53.7058 16.368 53.9209 16.4039 54.2077 16.4039H56.61C56.9865 16.4039 57.2733 16.3142 57.4705 16.135C57.6677 15.9557 57.7753 15.7226 57.7753 15.4179V15.2386C57.6319 15.382 57.4705 15.5075 57.2733 15.5971C57.0761 15.6868 56.861 15.7226 56.5921 15.7226H54.2615C53.8492 15.7226 53.4906 15.6509 53.1859 15.4896C52.8811 15.3462 52.648 15.131 52.4688 14.88C52.2895 14.6291 52.2178 14.3243 52.2178 14.0195C52.2178 13.6968 52.3074 13.4279 52.4688 13.159C52.6301 12.908 52.8811 12.7108 53.1859 12.5495C53.4906 12.3881 53.8492 12.3164 54.2615 12.3164H56.5921C56.8431 12.3164 57.0761 12.3523 57.2733 12.4419C57.4705 12.5315 57.6319 12.6391 57.7753 12.8005V12.3523H58.7792V15.2924ZM53.2576 14.0016C53.2576 14.2526 53.3472 14.4677 53.5265 14.6291C53.7058 14.8083 53.9567 14.88 54.2974 14.88H56.7355C57.0582 14.88 57.3271 14.7904 57.4884 14.6291C57.6677 14.4677 57.7574 14.2526 57.7574 14.0016C57.7574 13.7506 57.6677 13.5355 57.4884 13.3741C57.3092 13.2128 57.0582 13.1231 56.7355 13.1231H54.2974C53.9747 13.1231 53.7058 13.2128 53.5265 13.3741C53.3472 13.5534 53.2576 13.7506 53.2576 14.0016Z"
                    fill="black"
                  />
                  <Path
                    d="M59.6748 14.898C59.5135 14.6291 59.4238 14.3422 59.4238 14.0374C59.4238 13.7148 59.5135 13.4279 59.6748 13.159C59.8362 12.908 60.0871 12.6929 60.3919 12.5495C60.6967 12.406 61.0552 12.3164 61.4676 12.3164H63.9236C64.318 12.3164 64.6766 12.3881 64.9634 12.5315C65.2503 12.675 65.4833 12.8901 65.6267 13.1411C65.7881 13.3921 65.8598 13.6789 65.8598 14.0016V14.2346H60.4098C60.4457 14.4498 60.5712 14.647 60.7505 14.7725C60.9297 14.9159 61.1807 14.9697 61.5034 14.9697H64.085C64.3718 14.9697 64.5869 14.9338 64.7483 14.8621C64.9096 14.7904 65.0351 14.6828 65.1248 14.5215L65.7522 15.0772C65.555 15.3103 65.322 15.4716 65.0531 15.5792C64.7841 15.6868 64.4256 15.7406 63.9953 15.7406H61.4496C61.0373 15.7406 60.6787 15.6688 60.374 15.5075C60.0871 15.3641 59.8362 15.1669 59.6748 14.898ZM60.4636 13.5893H64.8738C64.8021 13.41 64.6945 13.2845 64.5152 13.1769C64.336 13.0694 64.085 13.0156 63.7802 13.0156H61.5751C61.2704 13.0156 61.0373 13.0694 60.858 13.1769C60.6608 13.2845 60.5353 13.41 60.4636 13.5893Z"
                    fill="black"
                  />
                  <Path
                    d="M66.4701 12.3523H67.4561V12.7825C67.5816 12.6391 67.7429 12.5136 67.9401 12.4419C68.1373 12.3702 68.3704 12.3164 68.6393 12.3164H70.8802C71.3464 12.3164 71.687 12.424 71.92 12.657C72.1531 12.8901 72.2786 13.1949 72.2786 13.6072V15.7047H71.2926V13.7865C71.2926 13.5713 71.2388 13.41 71.1133 13.2845C70.9878 13.159 70.7906 13.1052 70.5038 13.1052H68.3345C68.0477 13.1052 67.8326 13.1769 67.6712 13.3024C67.5099 13.4279 67.4382 13.6251 67.4382 13.8582V15.6868H66.4521L66.4701 12.3523Z"
                    fill="black"
                  />
                  <Path
                    d="M73.1387 13.159C73.3 12.908 73.551 12.6929 73.8558 12.5495C74.1606 12.406 74.5191 12.3164 74.9314 12.3164H77.2979C77.6923 12.3164 78.0329 12.3702 78.2839 12.4778C78.5528 12.5853 78.7679 12.7467 78.9472 12.9797L78.2659 13.5893C78.1763 13.4279 78.0508 13.3203 77.8895 13.2486C77.7281 13.1769 77.5309 13.1411 77.262 13.1411H74.9314C74.6087 13.1411 74.3398 13.2307 74.1605 13.3921C73.9813 13.5713 73.8916 13.7865 73.8916 14.0374C73.8916 14.2884 73.9813 14.5036 74.1605 14.6828C74.3398 14.8621 74.5908 14.9517 74.9314 14.9517H77.262C77.5309 14.9517 77.7281 14.9159 77.8895 14.8442C78.0508 14.7725 78.1763 14.647 78.2659 14.5036L78.9472 15.1131C78.7679 15.3462 78.5528 15.5075 78.2839 15.6151C78.015 15.7226 77.6923 15.7764 77.2979 15.7764H74.9314C74.5191 15.7764 74.1606 15.7047 73.8558 15.5434C73.551 15.382 73.318 15.1848 73.1387 14.9338C72.9594 14.6828 72.8877 14.3781 72.8877 14.0554C72.8877 13.7148 72.9773 13.4279 73.1387 13.159Z"
                    fill="black"
                  />
                  <Path
                    d="M82.3534 17.1208H81.224L82.3175 15.7045H81.7259L79.252 12.3521H80.4531L82.2996 14.9336H82.8554L84.684 12.3521H85.8672L82.3534 17.1208Z"
                    fill="black"
                  />
                  <Path
                    d="M4.02832 7.66986L1.12403 8.85362L1.12145 8.42574L3.57811 7.45024L3.57905 7.60545L1.11075 6.65126L1.1082 6.22757L4.0266 7.38461L4.02832 7.66986ZM2.74816 5.47734L2.41676 5.47934L2.41201 4.69068C2.41098 4.52009 2.36684 4.3889 2.27958 4.29714C2.19233 4.20537 2.07459 4.15993 1.92637 4.16083C1.78654 4.16167 1.67076 4.20852 1.57902 4.30136C1.48727 4.39141 1.44191 4.52173 1.44294 4.69233L1.44772 5.48518L1.10373 5.48725L1.09888 4.68182C1.09776 4.49724 1.13315 4.33621 1.20504 4.19874C1.27413 4.06128 1.36998 3.95583 1.49259 3.88237C1.61519 3.80612 1.75619 3.76751 1.9156 3.76655C2.08061 3.76556 2.22486 3.80244 2.34837 3.87721C2.47186 3.94918 2.56898 4.05347 2.63972 4.19009C2.70767 4.32672 2.74219 4.48732 2.74331 4.6719L2.74816 5.47734ZM4.01664 5.73398L1.10533 5.75154L1.10295 5.35721L4.01426 5.33965L4.01664 5.73398ZM4.00652 4.05599L2.70826 5.12099L2.57596 4.74842L4.00351 3.55679L4.00652 4.05599Z"
                    fill="#377DFF"
                  />
                </Svg>
              </View>

              <Table style={tw('bg-white rounded-2xl border-[#F3F4F8]')}>
                <TH style={tw('border-[#F3F4F8]')}>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-bold py-9 pl-3 border-b-[#FFFFFF] border-r-[#FFFFFF]'
                    )}
                  >
                    Propriété
                  </TD>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-bold py-9 pl-3 border-b-[#FFFFFF] border-l-[#FFFFFF]'
                    )}
                  >
                    Date d’intervention (Souhaitée )
                  </TD>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-bold py-9 pl-3 border-b-[#FFFFFF] border-l-[#FFFFFF] border-r-[#FFFFFF]'
                    )}
                  >
                    Demandé par
                  </TD>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-bold py-9 pl-3 border-b-[#FFFFFF] border-l-[#FFFFFF]'
                    )}
                  >
                    Type de contrat
                  </TD>
                </TH>

                <TR style={tw('')}>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-normal py-9 pl-3  border-r-[#FFFFFF]'
                    )}
                  >
                    Unité 1243 Maarif, Casasablanca
                  </TD>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-normal py-9 pl-3 border-l-[#FFFFFF]'
                    )}
                  >
                    29/04/204
                  </TD>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-normal py-9 pl-3 border-l-[#FFFFFF] border-r-[#FFFFFF]'
                    )}
                  >
                    Hamid Folan
                  </TD>
                  <TD
                    style={tw(
                      'text-[8.7px] text-[#6B7280] font-normal py-9 pl-3 border-r-[#FFFFFF] border-l-[#FFFFFF]'
                    )}
                  >
                    Commercial
                  </TD>
                </TR>
              </Table>
            </View>
          </View>
          <View style={tw(' w-full my-1 px-2')}>
            <View
              style={tw(' bg-[#F3F4F8] w-full rounded-2xl py-4 px-2 mr-4 mt-1')}
            >
              <Text
                style={tw(
                  'text-[13px] font-bold text-[#6B7280] text-center  mb-3'
                )}
              >
                Description du problème
              </Text>
              <View
                style={tw(
                  'bg-white w-full h-full rounded-lg border border-[#DFE4EA] mt-1'
                )}
              >
                <Text style={tw('text-[10.26px] font-normal text-[#9CA3AF]')}>
                  Tapez le text ici
                </Text>
              </View>
            </View>
          </View>

          <View style={tw('flex flex-row  gap-4 justify-around')}>
            <View style={tw('my-2 mb-6')}>
              <Text
                style={tw(
                  'text-[8.95px] font-bold text-[#6B7280] text-center mb-1'
                )}
              >
                Signature technicien
              </Text>
              <Text
                style={tw(
                  'text-[8.95px] font-bold text-black text-center mt-3'
                )}
              >
                Nabil Netman
              </Text>
            </View>
            <View style={tw('my-2 mb-6')}>
              <Text
                style={tw(
                  'text-[8.95px] font-bold text-[#6B7280] text-center mb-1'
                )}
              >
                Signature Client
              </Text>
              <Text
                style={tw(
                  'text-[8.95px] font-bold text-black text-center mt-3'
                )}
              >
                Farid koman
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default Pdf

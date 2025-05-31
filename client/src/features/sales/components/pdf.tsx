import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { styles } from "../data/pdf-styles";

const logoSrc = "https://i.imgur.com/h33j35t.png";

const invoiceData = {
  invoiceNumber: "015771",
  companyName: "Booklidio",
  address: "39 Johnson Street, Deneysville, 1932",
  date: "19/01/2025",
  to: "Nombela",
  items: [
    {
      quantity: 1,
      title: "Oxford English Grammar: The Advanced Guide",
      isbn: "9780190402426",
      price: 205.0,
    },
    {
      quantity: 1,
      title: "No Fear Shakespeare...",
      isbn: "9781411479692",
      price: 195.0,
    },
    {
      quantity: 1,
      title: "Goed, beter Afrikaans...",
      isbn: "9781920708030",
      price: 240.0,
    },
    {
      quantity: 1,
      title: "Via Afrika Social Sciences...",
      isbn: "9781415422083",
      price: 165.0,
    },
    {
      quantity: 1,
      title: "Doc Scientia Natural Sciences...",
      isbn: "9780639500089",
      price: 190.0,
    },
  ],
  shipping: 0.0,
  totalDue: 995.0,
  totalSavings: 249.0,
  tel: "+27 76 477 8343",
  email: "info@booklidio.com",
  web: "www.booklidio.com",
  bank: "Capitec",
  account: "2053 2333 77",
  branchCode: "470 010",
};

const InvoiceDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Image style={styles.image} src={logoSrc} />
        <View style={styles.invoiceContainer}>
          <Text style={styles.invoiceTitle}>Invoice </Text>
          <Text style={styles.invoiceNumber}>015771</Text>
        </View>
        <Text style={styles.booklidioTitle}>{invoiceData.companyName}</Text>
        <Text style={styles.text}>{invoiceData.address}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableCell}>
            <View style={styles.tableRow}>
              <View style={styles.tableColDate}>
                <Text>Date</Text>
              </View>
              <View style={styles.tableColCust}>
                <Text>Customer</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColDateInfo}>
                <Text>{invoiceData.date}</Text>
              </View>
              <View style={styles.tableColCustInfo}>
                <Text>{invoiceData.to}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Order Summary</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.headerRow]}>
            <View style={[styles.tableCol, styles.headerCellQuant]}>
              <Text style={styles.tableCell}>Quantity</Text>
            </View>
            <View style={[styles.tableCol, styles.headerCellDesc]}>
              <Text style={styles.tableCell}>Title</Text>
            </View>
            <View style={[styles.tableCol, styles.headerCellIsbn]}>
              <Text style={styles.tableCell}>ISBN</Text>
            </View>
            <View style={[styles.tableCol, styles.headerCellPrice]}>
              <Text style={styles.tableCell}>Price</Text>
            </View>
          </View>

          {invoiceData.items.map(
            (
              item,
              index, // Iterate through the items
            ) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableColQuant}>
                  <Text style={styles.tableCell}>{item.quantity}</Text>
                </View>
                <View style={styles.tableColDesc}>
                  <Text style={styles.tableCell}>{item.title}</Text>
                </View>
                <View style={styles.tableColIsbn}>
                  <Text style={styles.tableCell}>{item.isbn}</Text>
                </View>
                <View style={styles.tableColPrice}>
                  <Text style={styles.tableCell}>R{item.price.toFixed(2)}</Text>{" "}
                  {/* Format to 2 decimal places */}
                </View>
              </View>
            ),
          )}

          <View style={styles.tableRow}>
            <View style={styles.tableColQuant}></View>
            <View style={styles.tableColDesc}></View>
            <View style={styles.tableColIsbn}></View>
            <View style={styles.tableColPrice}></View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColQuant}></View>
            <View style={styles.tableColDesc}></View>
            <View style={styles.tableColIsbn}>
              <Text style={styles.tableCell}>Shipping</Text>
            </View>
            <View style={styles.tableColPrice}>
              <Text style={styles.tableCell}>
                R{invoiceData.shipping.toFixed(2)}
              </Text>{" "}
              {/* Format to 2 decimal places */}
            </View>
          </View>

          <View style={styles.tableRowShip}>
            <View style={styles.tableColQuant}></View>
            <View style={styles.tableColDesc}></View>
            <View style={styles.tableColIsbn}>
              <Text style={styles.tableCell}>Savings</Text>
            </View>
            <View style={styles.tableColPrice}>
              <Text style={styles.tableCell}>
                R{invoiceData.totalSavings.toFixed(2)}
              </Text>{" "}
              {/* Format to 2 decimal places */}
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableColQuant}></View>
            <View style={styles.tableColDesc}></View>
            <View style={styles.tableColIsbn}>
              <Text style={styles.tableCell}>Total Due</Text>
            </View>
            <View style={styles.tableColPrice}>
              <Text style={styles.tableCell}>
                R{invoiceData.totalDue.toFixed(2)}
              </Text>{" "}
              {/* Format to 2 decimal places */}
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.heading}>Payment Details</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColPayTop}>
              <Text style={styles.tableCell}>Tel: +27 76 477 8343</Text>
            </View>
            <View style={styles.tableColPayTop}>
              <Text style={styles.tableCell}>Email: info@booklidio.com</Text>
            </View>
            <View style={styles.tableColPayRightTop}>
              <Text style={styles.tableCell}>Web: www.booklidio.com</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColPayBot}>
              <Text style={styles.tableCell}>Bank: Capitec</Text>
            </View>
            <View style={styles.tableColPayBot}>
              <Text style={styles.tableCell}>Account: 2053 2333 77</Text>
            </View>
            <View style={styles.tableColPayRight}>
              <Text style={styles.tableCell}>Branch Code: 470 010</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default InvoiceDocument;

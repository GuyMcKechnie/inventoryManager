import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 10,
    color: "#757575",
  },
  invoiceTitle: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#555555",
  },
  invoiceNumber: {
    fontSize: 24,
    fontWeight: "normal",
    color: "#F16D6D",
  },
  invoiceContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  booklidioTitle: {
    fontSize: 18,
    marginBottom: 5,
    color: "#F16D6D",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: "#757575",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableRowShip: {
    flexDirection: "row",
    borderBottom: "2px solid #bf1717",
  },
  tableCol: {
    width: "20%",
    borderBottom: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColDate: {
    width: "20%",
    borderTop: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColCust: {
    width: "20%",
    borderTop: "1px solid #bf1717",
    borderRight: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColDateInfo: {
    width: "20%",
    borderTop: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    borderBottom: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColCustInfo: {
    width: "20%",
    borderTop: "1px solid #bf1717",
    borderRight: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    borderBottom: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColPayTop: {
    width: "100%",
    borderTop: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColPayBot: {
    width: "100%",
    borderBottom: "1px solid #bf1717",
    borderTop: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColPayRightTop: {
    width: "100%",
    borderTop: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    borderRight: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColPayRight: {
    width: "100%",
    borderBottom: "1px solid #bf1717",
    borderTop: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    borderRight: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColPrice: {
    width: "20%",
    borderBottom: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    borderRight: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColIsbn: {
    width: "30%",
    borderBottom: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColQuant: {
    width: "20%",
    borderLeft: "1px solid #bf1717",
    borderBottom: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableColDesc: {
    width: "100%",
    borderBottom: "1px solid #bf1717",
    borderLeft: "1px solid #bf1717",
    padding: 5,
    color: "#757575",
    fontWeight: "thin",
  },
  tableCell: {
    fontSize: 10,
  },
  image: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 0,
    right: 0,
  },
  headerRow: {
    backgroundColor: "#F16D6D",
  },
  headerCell: {
    color: "#FFF",
    fontWeight: "bold",
    borderColor: "#bf1717",
  },
  headerCellDesc: {
    color: "#FFF",
    width: "100%",
    fontWeight: "bold",
    borderLeft: "1px solid #bf1717",
    borderTop: "1px solid #bf1717",
  },
  headerCellPrice: {
    color: "#FFF",
    fontWeight: "bold",
    borderLeft: "1px solid #bf1717",
    borderRight: "1px solid #bf1717",
    borderTop: "1px solid #bf1717",
  },
  headerCellIsbn: {
    color: "#FFF",
    width: "30%",
    fontWeight: "bold",
    borderLeft: "1px solid #bf1717",
    borderTop: "1px solid #bf1717",
  },
  headerCellQuant: {
    color: "#FFF",
    fontWeight: "bold",
    borderLeft: "1px solid #bf1717",
    borderTop: "1px solid #bf1717",
    width: "20%",
  },
  paymentDetailsRow: {
    flexDirection: "row",
  },
  paymentDetailsCol: {
    width: "33%",
  },
  totalRow: {
    flexDirection: "row",
  },
  totalCol: {
    width: "50%",
    textAlign: "right",
    padding: 5,
    fontSize: 10,
  },
});

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

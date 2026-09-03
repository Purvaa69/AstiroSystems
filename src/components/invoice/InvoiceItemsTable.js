import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

/* =========================
   INVOICE ITEMS
========================= */

const invoiceItems = [
  {
    srNo: 1,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "05-05-2026",
    pageNo: 1,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 2,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "06-05-2026",
    pageNo: 2,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 3,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "07-05-2026",
    pageNo: 3,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 4,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "08-05-2026",
    pageNo: 4,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 5,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "09-05-2026",
    pageNo: 5,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 6,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "10-05-2026",
    pageNo: 6,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 7,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "11-05-2026",
    pageNo: 7,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 8,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "12-05-2026",
    pageNo: 8,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 9,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "13-05-2026",
    pageNo: 9,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 10,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "14-05-2026",
    pageNo: 10,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 11,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "15-05-2026",
    pageNo: 11,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 12,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "16-05-2026",
    pageNo: 12,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 13,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "17-05-2026",
    pageNo: 13,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 14,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "18-05-2026",
    pageNo: 14,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 15,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "19-05-2026",
    pageNo: 15,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 16,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "20-05-2026",
    pageNo: 16,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 17,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "21-05-2026",
    pageNo: 17,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 18,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "22-05-2026",
    pageNo: 18,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 19,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "23-05-2026",
    pageNo: 19,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
  {
    srNo: 20,
    roNo: "190120",
    roDate: "01-05-2026",
    edition: "Pune City",
    publicationDate: "24-05-2026",
    pageNo: 20,
    color: "BW",
    width: "12.00",
    height: "52.00",
    totalSpace: "624.00",
    rate: "552.89",
    amount: "345,000.00",
  },
];


/* =========================
   HEADER STYLE
========================= */

const headerStyle = {
  backgroundColor: "#073b91",
  color: "#fff",
  fontWeight: 700,
  fontSize: "12px",
  textAlign: "center",
  border: "1px solid #fff",
  padding: "6px 4px",
  lineHeight: 1.4,
};


/* =========================
   BODY CELL STYLE
========================= */

const cellStyle = {
  fontSize: "12px",
  textAlign: "center",
  padding: "6px 4px",
  border: "1px solid #b7c4dd",
  whiteSpace: "nowrap",
};


/* =========================
   INVOICE ITEMS TABLE
========================= */

function InvoiceItemsTable() {
  return (
    <Box
      sx={{
        marginTop: "12px",
        width: "100%",
      }}
    >
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
        }}
      >
        <Table
          size="small"
          sx={{
            borderCollapse: "collapse",
            width: "100%",
            tableLayout: "fixed",
          }}
        >
          <TableHead>

            {/* =========================
                FIRST HEADER ROW
            ========================= */}

            <TableRow>

              <TableCell
                rowSpan={2}
                sx={{
                  ...headerStyle,
                  width: "5%",
                }}
              >
                Sr.
                <br />
                No.
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  ...headerStyle,
                  width: "8%",
                }}
              >
                RO No.
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  ...headerStyle,
                  width: "10%",
                }}
              >
                RO Date
              </TableCell>

              <TableCell
                colSpan={3}
                sx={headerStyle}
              >
                Publication
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  ...headerStyle,
                  width: "7%",
                }}
              >
                CLR/BW
              </TableCell>

              <TableCell
                colSpan={2}
                sx={headerStyle}
              >
                Size in
                <br />
                Sq. Cms.
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  ...headerStyle,
                  width: "9%",
                }}
              >
                Total
                <br />
                Space
                <br />
                Sq. Cms.
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  ...headerStyle,
                  width: "7%",
                }}
              >
                Rate
              </TableCell>

              <TableCell
                rowSpan={2}
                sx={{
                  ...headerStyle,
                  width: "12%",
                }}
              >
                Amount (INR)
              </TableCell>

            </TableRow>


            {/* =========================
                SECOND HEADER ROW
            ========================= */}

            <TableRow>

              <TableCell sx={headerStyle}>
                Edition
              </TableCell>

              <TableCell sx={headerStyle}>
                Date
              </TableCell>

              <TableCell sx={headerStyle}>
                Pg No
              </TableCell>

              <TableCell sx={headerStyle}>
                Width
              </TableCell>

              <TableCell sx={headerStyle}>
                Height
              </TableCell>

            </TableRow>

          </TableHead>


          {/* =========================
              TABLE BODY
          ========================= */}

          <TableBody>

            {invoiceItems.map((item) => (
              <TableRow key={item.srNo}>

                <TableCell sx={cellStyle}>
                  {item.srNo}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.roNo}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.roDate}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.edition}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.publicationDate}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.pageNo}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.color}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.width}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.height}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.totalSpace}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.rate}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {item.amount}
                </TableCell>

              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>


      {/* =========================
          NOTE BELOW TABLE
      ========================= */}

      <Box
        sx={{
          fontSize: "11px",
          marginTop: "5px",
          marginLeft: "4px",
        }}
      >
        (Above rates are inclusive of agency commission)
      </Box>

    </Box>
  );
}

export default InvoiceItemsTable;
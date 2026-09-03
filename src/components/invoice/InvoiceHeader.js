import { Box, Typography } from "@mui/material";

function InvoiceHeader() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) 135px 220px",
        columnGap: "18px",
        alignItems: "start",
        padding: "8px 0 16px",
        borderBottom: "1px solid #1e3a8a",
        backgroundColor: "#fff",
      }}
    >
      {/* ================= LEFT - COMPANY ================= */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "14px",
          minWidth: 0,
        }}
      >
        {/* SAP Logo */}
        <Box
          sx={{
            width: "105px",
            height: "63px",
            flexShrink: 0,
            backgroundColor: "#0879c9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-2px",
            }}
          >
            SAP
          </Typography>
        </Box>

        {/* Company Information */}
        <Box
          sx={{
            minWidth: 0,
            flex: 1,
          }}
        >
          <Typography
            sx={{
              color: "#12358f",
              fontSize: "23px",
              fontWeight: 700,
              lineHeight: 1.1,
              mb: "4px",
              whiteSpace: "nowrap",
            }}
          >
            ABC PRIVATE LIMITED
          </Typography>

          <Typography
            sx={{
              fontSize: "11px",
              lineHeight: 1.45,
            }}
          >
            123, Business Park, New Town,
            <br />
            Pune – 411057, Maharashtra, India
          </Typography>

          <Box sx={{ mt: "5px" }}>
            <CompanyDetail
              label="CIN"
              value="U72900PN2018PTC123456"
            />

            <CompanyDetail
              label="GSTIN"
              value="27AAAAA1234A1Z5"
            />

            <CompanyDetail
              label="PAN"
              value="AAAAA1234A"
            />

            <CompanyDetail
              label="TAN"
              value="PNEA12345B"
            />

            <CompanyDetail
              label="MSME Reg. No."
              value="UDYAM-MH-26-0001234"
            />

            <CompanyDetail
              label="Email ID"
              value="accounts@abcprivatelimited.com"
            />
          </Box>
        </Box>
      </Box>

      {/* ================= CENTER - QR ================= */}
      <Box
        sx={{
          width: "135px",
          height: "150px",
          flexShrink: 0,
          border: "1px solid #6b83bd",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px",
        }}
      >
        {/* QR Placeholder */}
        <Box
          sx={{
            width: "80px",
            height: "80px",
            border: "4px solid #111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            QR
            <br />
            CODE
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "10px",
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          Scan QR Code
          <br />
          to Verify Invoice
        </Typography>
      </Box>

      {/* ================= RIGHT - INVOICE DETAILS ================= */}
      <Box
        sx={{
          width: "220px",
          position: "relative",
          paddingTop: "45px",
        }}
      >
        {/* TAX INVOICE */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#123b87",
            color: "#fff",
            padding: "7px 15px",
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            TAX INVOICE
          </Typography>
        </Box>

        <InvoiceDetail
          label="Invoice No."
          value="INV-4040000015"
        />

        <InvoiceDetail
          label="Invoice Date"
          value="01-05-2026"
        />

        <InvoiceDetail
          label="Booking ID"
          value="2700000023"
        />

        <InvoiceDetail
          label="RO / Ref. Date"
          value="01-05-2026"
        />

        <InvoiceDetail
          label="Mail Date"
          value="01-05-2026"
        />
      </Box>
    </Box>
  );
}


/* =========================================================
   COMPANY DETAIL ROW
========================================================= */

function CompanyDetail({ label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "19px",
      }}
    >
      <Typography
        component="span"
        sx={{
          width: "95px",
          flexShrink: 0,
          fontSize: "10px",
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>

      <Typography
        component="span"
        sx={{
          width: "12px",
          flexShrink: 0,
          fontSize: "10px",
        }}
      >
        :
      </Typography>

      <Typography
        component="span"
        sx={{
          fontSize: "10px",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}


/* =========================================================
   INVOICE DETAIL ROW
========================================================= */

function InvoiceDetail({ label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "28px",
      }}
    >
      <Typography
        sx={{
          width: "105px",
          flexShrink: 0,
          color: "#092f91",
          fontWeight: 700,
          fontSize: "10px",
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          width: "14px",
          flexShrink: 0,
          fontSize: "10px",
        }}
      >
        :
      </Typography>

      <Typography
        sx={{
          fontSize: "10px",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default InvoiceHeader;
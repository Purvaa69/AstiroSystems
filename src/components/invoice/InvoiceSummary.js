import { Box, Typography } from "@mui/material";

function InvoiceSummary() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        marginTop: "8px",
        alignItems: "stretch",
      }}
    >
      {/* LEFT - Product & Campaign */}
      <Box
        sx={{
          flex: 1,
          padding: "25px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <InfoLine
          label="Product"
          value="Brand Campaign - Summer Offer"
        />

        <InfoLine
          label="Campaign"
          value="Bright Summer BONANZA 2026"
        />
      </Box>

      {/* RIGHT - Amount Summary */}
      <Box
        sx={{
          width: "55%",
          border: "1px solid #b7c4dd",
        }}
      >
        <SummaryRow
          label="Gross Amount (Before Discount)"
          value="3,450,000.00"
        />

        <SummaryRow
          label="Trade Discount"
          value="20,700.00"
        />

        <SummaryRow
          label="Additional Discount"
          value="10,350.00"
        />

        <SummaryRow
          label="Taxable Amount"
          value="3,418,950.00"
          highlight
        />

        <SummaryRow
          label="Total Tax Amount"
          value="91,711.50"
        />

        <SummaryRow
          label="Grand Total (INR)"
          value="3,510,661.50"
          highlight
          grandTotal
        />
      </Box>
    </Box>
  );
}


/* Product / Campaign row */
function InfoLine({ label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          width: "95px",
          color: "#123b87",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          marginRight: "12px",
          fontSize: "14px",
        }}
      >
        :
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          borderBottom: "1px solid #333",
          minWidth: "260px",
          paddingBottom: "3px",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}


/* Reusable summary row */
function SummaryRow({
  label,
  value,
  highlight = false,
  grandTotal = false,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "35px",
        borderBottom: "1px solid #b7c4dd",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "5px 12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: highlight ? 700 : 400,
            color: highlight ? "#123b87" : "#111",
          }}
        >
          {label}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "160px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "5px 12px",
          borderLeft: "1px solid #b7c4dd",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: highlight ? 700 : 400,
            color: highlight ? "#123b87" : "#111",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export default InvoiceSummary;
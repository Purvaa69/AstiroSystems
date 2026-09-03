import { Box, Typography } from "@mui/material";

function BillingDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid #6b83bd",
        marginTop: "12px",
        backgroundColor: "#fff",
      }}
    >
      {/* BILL TO */}
      <Box
        sx={{
          width: "50%",
          padding: "12px 20px",
          borderRight: "1px solid #6b83bd",
        }}
      >
        <Typography
          sx={{
            color: "#123b87",
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          BILL TO
        </Typography>

        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Bright Communications Pvt. Ltd.
        </Typography>

        <Typography sx={{ fontSize: "14px", lineHeight: 1.8 }}>
          201, Sunrise Plaza, 5th Floor,
        </Typography>

        <Typography sx={{ fontSize: "14px", lineHeight: 1.8 }}>
          Senapati Bapat Road,
        </Typography>

        <Typography sx={{ fontSize: "14px", lineHeight: 1.8 }}>
          Pune - 411016, Maharashtra, India
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          <strong>PAN</strong> : BRTPC1234D
          <span style={{ margin: "0 12px" }}>|</span>
          <strong>GSTIN</strong> : 27BRTPC1234D1Z8
        </Typography>
      </Box>

      {/* ADVERTISER DETAILS */}
      <Box
        sx={{
          width: "50%",
          padding: "12px 20px",
        }}
      >
        <DetailRow
          label="Advertiser"
          value="Bright Communications Pvt. Ltd."
        />

        <DetailRow
          label="AG. Code"
          value="AG1001"
        />

        <DetailRow
          label="Agency Type"
          value="Advertising Agency"
        />

        <DetailRow
          label="Place of Supply"
          value="Maharashtra (27)"
        />

        <DetailRow
          label="R.O. No. & Date"
          value="Mail date - 01-05-2026"
        />
      </Box>
    </Box>
  );
}

function DetailRow({ label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <Typography
        sx={{
          width: "125px",
          color: "#123b87",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          marginRight: "18px",
          fontSize: "14px",
        }}
      >
        :
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default BillingDetails;
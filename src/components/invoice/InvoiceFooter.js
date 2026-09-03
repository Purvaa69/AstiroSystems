import { Box, Typography } from "@mui/material";

function InvoiceFooter() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "65px",
        paddingTop: "12px",
      }}
    >
      {/* Thank you message */}
      <Typography
        sx={{
          textAlign: "center",
          color: "#123b87",
          fontSize: "15px",
          fontWeight: 700,
        }}
      >
        Thank you for your business!
      </Typography>

      {/* Signature */}
      <Box
        sx={{
          position: "absolute",
          right: "0",
          bottom: "0",
          width: "230px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            borderTop: "1px solid #333",
            marginBottom: "5px",
          }}
        />

        <Typography sx={{ fontSize: "12px" }}>
          Authorised Signatory
        </Typography>
      </Box>
    </Box>
  );
}

export default InvoiceFooter;
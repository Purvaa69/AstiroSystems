import { Box, Typography } from "@mui/material";

function PaymentDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "8px",
        border: "1px solid #6b83bd",
        backgroundColor: "#fff",
      }}
    >
      {/* LEFT SECTION */}
      <Box
        sx={{
          width: "50%",
          borderRight: "1px solid #6b83bd",
        }}
      >
        {/* Amount in Words */}
        <Box
          sx={{
            padding: "8px 14px",
            borderBottom: "1px solid #6b83bd",
          }}
        >
          <Typography
            sx={{
              color: "#123b87",
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "4px",
            }}
          >
            Amount in Words:
          </Typography>

          <Typography sx={{ fontSize: "12px" }}>
            INR Thirty Five Lakh Ten Thousand Six Hundred Sixty One and
            Fifty Paisa Only.
          </Typography>
        </Box>

        {/* Bank Details */}
        <Box sx={{ padding: "8px 14px" }}>
          <Typography
            sx={{
              color: "#123b87",
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "5px",
            }}
          >
            Bank Details:
          </Typography>

          <BankRow
            label="Bank Name"
            value="HDFC Bank Limited"
          />

          <BankRow
            label="Account No."
            value="50200012345678"
          />

          <BankRow
            label="IFSC Code"
            value="HDFC0001234"
          />

          <BankRow
            label="Branch"
            value="Pune - Business Park"
          />
        </Box>
      </Box>

      {/* RIGHT SECTION */}
      <Box sx={{ width: "50%" }}>
        {/* Payment Terms */}
        <Box
          sx={{
            padding: "8px 14px",
            borderBottom: "1px solid #6b83bd",
          }}
        >
          <Typography
            sx={{
              color: "#123b87",
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "4px",
            }}
          >
            Payment Terms:
          </Typography>

          <Typography sx={{ fontSize: "12px" }}>
            Payment due within 30 days from invoice date.
          </Typography>
        </Box>

        {/* Terms & Conditions */}
        <Box sx={{ padding: "8px 14px" }}>
          <Typography
            sx={{
              color: "#123b87",
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "4px",
            }}
          >
            Terms & Conditions:
          </Typography>

          <Box
            component="ul"
            sx={{
              margin: 0,
              paddingLeft: "18px",
            }}
          >
            <Typography
              component="li"
              sx={{
                fontSize: "12px",
                marginBottom: "5px",
              }}
            >
              Interest @ 18% p.a. will be charged on delayed payments.
            </Typography>

            <Typography
              component="li"
              sx={{
                fontSize: "12px",
              }}
            >
              Subject to Pune Jurisdiction only.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


/* Reusable bank detail row */
function BankRow({ label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        lineHeight: 1.7,
      }}
    >
      <Typography
        sx={{
          width: "95px",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          width: "20px",
          fontSize: "12px",
        }}
      >
        :
      </Typography>

      <Typography sx={{ fontSize: "12px" }}>
        {value}
      </Typography>
    </Box>
  );
}

export default PaymentDetails;
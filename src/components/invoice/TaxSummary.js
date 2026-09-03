import { Box, Typography } from "@mui/material";

const taxRows = [
  {
    label: "CGST (9%)",
    rate: "9%",
    amount: "15,415.55",
  },
  {
    label: "SGST / UTGST (9%)",
    rate: "9%",
    amount: "15,415.55",
  },
  {
    label: "IGST (18%)",
    rate: "18%",
    amount: "60,880.40",
  },
];

function TaxSummary() {
  return (
    <Box
      sx={{
        marginTop: "8px",
        border: "1px solid #b7c4dd",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#073b91",
          color: "#fff",
          minHeight: "30px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid #fff",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Taxable Value
          </Typography>
        </Box>

        <Box
          sx={{
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRight: "1px solid #fff",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Rate
          </Typography>
        </Box>

        <Box
          sx={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Amount (INR)
          </Typography>
        </Box>
      </Box>

      {/* Tax rows */}
      {taxRows.map((tax) => (
        <TaxRow
          key={tax.label}
          label={tax.label}
          rate={tax.rate}
          amount={tax.amount}
        />
      ))}

      {/* Total Tax */}
      <Box
        sx={{
          display: "flex",
          minHeight: "32px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "20px",
          }}
        >
          <Typography
            sx={{
              color: "#123b87",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Total Tax
          </Typography>
        </Box>

        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "15px",
            borderLeft: "1px solid #b7c4dd",
          }}
        >
          <Typography
            sx={{
              color: "#123b87",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            91,711.50
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}


/* Reusable tax row */
function TaxRow({ label, rate, amount }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "28px",
        borderTop: "1px solid #b7c4dd",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid #b7c4dd",
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>
          {label}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid #b7c4dd",
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>
          {rate}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "15px",
        }}
      >
        <Typography sx={{ fontSize: "13px" }}>
          {amount}
        </Typography>
      </Box>
    </Box>
  );
}

export default TaxSummary;
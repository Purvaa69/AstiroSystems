import InvoiceHeader from "./components/invoice/InvoiceHeader";
import BillingDetails from "./components/invoice/BillingDetails";
import InvoiceItemsTable from "./components/invoice/InvoiceItemsTable";
import InvoiceSummary from "./components/invoice/InvoiceSummary";
import TaxSummary from "./components/invoice/TaxSummary";
import PaymentDetails from "./components/invoice/PaymentDetails";
import InvoiceFooter from "./components/invoice/InvoiceFooter";
import "./App.css";

function App() {
  return (
    <div className="invoice-page">
      <InvoiceHeader />

      <BillingDetails />

      <InvoiceItemsTable />

      <InvoiceSummary />

      <TaxSummary />

      <PaymentDetails />

      <InvoiceFooter />
    </div>
  );
}

export default App;
import { Box, Card } from "@mui/material";
import CustomerForm from "./components/customerForm";
import { Label } from "@mui/icons-material";

export default function App() {
  return (
    <div className="p-8 bg-white rounded shadow">
      <h2 className="text-center mb-8 text-3xl text-primary">Add a customer</h2>
      <CustomerForm />
    </div>
  );
}

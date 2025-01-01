import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { ItemContext } from "../store/ItemProvider.tsx";
import { Customer } from "../models/Customer.ts";
import { Item } from "../models/Item.ts";

export function Add() {
    const navigate = useNavigate();

    // Access contexts
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);

    // Customer states
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Item states
    const [itemName, setItemName] = useState("");
    const [unitPrice, setUnitPrice] = useState<number | "">("");
    const [qty, setQty] = useState<number | "">("");

    // Handle customer submission
    function handleCustomerSubmit() {
        const newCustomer = new Customer(customerName, address, email, phone);
        customerDispatch({ type: "ADD_CUSTOMER", payload: newCustomer });
        clearCustomerFields();
        navigate("/");
    }

    // Handle item submission
    function handleItemSubmit() {
        const total = unitPrice * qty;
        const newItem = new Item(itemName, unitPrice, qty, total);
        itemDispatch({ type: "ADD_ITEM", payload: newItem });
        clearItemFields();
        navigate("/");
    }

    // Clear input fields for customer
    function clearCustomerFields() {
        setCustomerName("");
        setAddress("");
        setEmail("");
        setPhone("");
    }

    // Clear input fields for item
    function clearItemFields() {
        setItemName("");
        setUnitPrice("");
        setQty("");
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Add Customer Section */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h2>
                </header>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCustomerSubmit();
                    }}
                >
                    <input type="text" placeholder="Name" value={customerName}
                           onChange={(e) => setCustomerName(e.target.value)}/>
                    <input type="text" placeholder="Address" value={address}
                           onChange={(e) => setAddress(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <button type="submit">Add Customer</button>
                </form>
            </div>
                {/* Add Item Section */}
                <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                    <header>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Item</h2>
                    </header>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleItemSubmit();
                        }}
                    >
                        <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
                        <input type="number" placeholder="Unit Price" value={unitPrice} onChange={(e) => setUnitPrice(Number(e.target.value))}/>
                        <input type="number" placeholder="Quantity" value={qty} onChange={(e) => setQty(Number(e.target.value))}/>
                        <button type="submit">Add Item</button>
                    </form>
                </div>
            </div>

    );
}

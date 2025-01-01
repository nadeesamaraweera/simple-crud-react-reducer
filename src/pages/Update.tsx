import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CustomerContext } from "../store/CustomerProvider";
import {ItemContext} from "../store/ItemProvider.tsx";
import { Customer } from "../models/Customer";
import { Item } from "../models/Item";

export function Update() {
    const navigate = useNavigate();
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [itemName, setItemName] = useState("");
    const [unitPrice, setUnitPrice] = useState<number | "">("");
    const [qty, setQty] = useState<number | "">("");

    function handleCustomerSubmit() {
        const updatedCustomer = new Customer(name, address, email, phone);
        customerDispatch({ type: "UPDATE_CUSTOMER", payload: updatedCustomer });
        navigate("/");
    }

    function handleItemSubmit() {
        const totalPrice = unitPrice * qty;
        const updatedItem = new Item(itemName, unitPrice, qty, totalPrice);
        itemDispatch({ type: "UPDATE_ITEM", payload: updatedItem });
        navigate("/");
        // Implement item update logic here
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Update Customer Section */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Update Customer</h2>
                </header>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCustomerSubmit();
                    }}
                >
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <button type="submit">Update Customer</button>
                </form>
            </div>
            {/* Add Item Section */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Update Item</h2>
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
                    <button type="submit">Update Item</button>
                </form>
            </div>
        </div>

    );
}

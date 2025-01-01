import { useContext } from "react";
import { Customer } from "../models/Customer.ts";
import { Item } from "../models/Item.ts";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { ItemContext } from "../store/ItemProvider.tsx";
import "./Dashboard.css";

export function Dashboard() {
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h1>

            {/* Main section */}
            <div className="grid grid-cols-2 gap-4">
                {/* Customers Section */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1 text-custom-color">
                        Customers
                    </h1>
                    <table className="table-auto border border-gray-200 w-full">
                        <thead>
                        <tr>
                            <th className="custom-table-td">Name</th>
                            <th className="custom-table-td">Address</th>
                            <th className="custom-table-td">Email</th>
                            <th className="custom-table-td">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.length > 0 ? (
                            customers.map((customer: Customer) => (
                                <tr key={customer.name}>
                                    <td className="custom-table-td">{customer.name}</td>
                                    <td className="custom-table-td">{customer.address}</td>
                                    <td className="custom-table-td text-gray-600">{customer.email}</td>
                                    <td className="custom-table-td">{customer.phone}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center text-gray-500">
                                    No customers found
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                {/* Items Section */}
                <div className="p-5">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Items</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.length > 0 ? (
                            items.map((item: Item) => (
                                <div
                                    key={item.name}
                                    className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                                >
                                    <div className="text-gray-600 mb-1">
                                        <span className="font-semibold">Name: </span>
                                        {item.name}
                                    </div>
                                    <div className="text-gray-600 mb-1">
                                        <span className="font-semibold">Unit Price: </span>
                                        {item.unitPrice}
                                    </div>
                                    <div className="text-gray-600 mb-1">
                                        <span className="font-semibold">Quantity: </span>
                                        {item.qty}
                                    </div>
                                    <div className="text-gray-600">
                                        <span className="font-semibold">Total Price: </span>
                                        {item.totalPrice}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No items available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

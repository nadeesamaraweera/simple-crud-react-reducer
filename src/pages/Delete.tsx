import { useNavigate } from "react-router";
import { useContext } from "react";
import { CustomerContext } from "../store/CustomerProvider";
import { ItemContext } from "../store/ItemProvider.tsx";

export function Delete() {
    const navigate = useNavigate();
    const [customers, customerDispatch] = useContext(CustomerContext);
    const [items, itemDispatch] = useContext(ItemContext);

    // Handle customer delete
    function handleCustomerSubmit(index: number) {
        customerDispatch({ type: 'DELETE_CUSTOMER', payload: index });
    }

    // Handle item delete
    function handleItemSubmit(index: number) {
        itemDispatch({ type: 'DELETE_ITEM', payload: index });
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Left Side: Customer Table */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Customer</h2>
                </header>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Address</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Phone</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{customer.name}</td>
                            <td className="border border-gray-300 p-2">{customer.address}</td>
                            <td className="border border-gray-300 p-2">{customer.email}</td>
                            <td className="border border-gray-300 p-2">{customer.phone}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleCustomerSubmit(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Right Side: Item Table */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                <header>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Item</h2>
                </header>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Unit Price</th>
                        <th className="border border-gray-300 p-2">Quantity</th>
                        <th className="border border-gray-300 p-2">Total Price</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{item.name}</td>
                            <td className="border border-gray-300 p-2">{item.unitPrice}</td>
                            <td className="border border-gray-300 p-2">{item.qty}</td>
                            <td className="border border-gray-300 p-2">{item.unitPrice * item.qty}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleItemSubmit(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

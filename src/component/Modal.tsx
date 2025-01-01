export function Modal({ fields, handleSubmit, children }) {
    return (
        <div className="modal-container p-4 border rounded shadow-md bg-white">
            {fields.map((field, index) => (
                <div key={index} className="input-group mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                    </label>
                    <input
                        type={field.type || "text"}
                        placeholder={field.placeholder || field.label}
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        className="border rounded p-2 w-full"
                    />
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                {children}
            </button>
        </div>
    );
}

import { useReducer } from "react";
import useCartStore from "../store/zustand-store/useCartStore";

const initialState = {
    name: "",
    address: "",
    shippingMethod: "standard",
    discountCode: "",
    errors: {},
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                [action.field]: action.value,
                errors: {
                    ...state.errors,
                    [action.field]: "",
                },
            };

        case "SET_ERRORS":
            return {
                ...state,
                errors: action.errors,
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

export default function CheckoutForm() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    const cart = useCartStore((state) => state.cart);

    const handleChange = (event) => {
        dispatch({
            type: "SET_FIELD",
            field: event.target.name,
            value: event.target.value,
        });
    };

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const discount =
        state.discountCode.trim().toUpperCase() === "DISCOUNT10"
            ? subtotal * 0.10
            : 0;

    const totalPrice = subtotal - discount;

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = {};

        if (!state.name.trim()) {
            errors.name = "Name is required";
        }

        if (!state.address.trim()) {
            errors.address = "Address is required";
        }

        if (Object.keys(errors).length > 0) {
            dispatch({
                type: "SET_ERRORS",
                errors,
            });
            return;
        }

        console.log("Order submitted:", {
            ...state,
            subtotal,
            discount,
            totalPrice,
        });

        dispatch({
            type: "RESET",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto mt-8 p-6 border rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">
                Checkout
            </h2>

            {/* Name */}
            <div className="mb-4">
                <label className="block mb-1">
                    Name
                </label>

                <input
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                />

                {state.errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                        {state.errors.name}
                    </p>
                )}
            </div>

            {/* Address */}
            <div className="mb-4">
                <label className="block mb-1">
                    Address
                </label>

                <textarea
                    name="address"
                    value={state.address}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                />

                {state.errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                        {state.errors.address}
                    </p>
                )}
            </div>

            {/* Shipping Method */}
            <div className="mb-4">
                <label className="block mb-1">
                    Shipping Method
                </label>

                <select
                    name="shippingMethod"
                    value={state.shippingMethod}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="standard">
                        Standard Shipping
                    </option>

                    <option value="express">
                        Express Shipping
                    </option>
                </select>
            </div>

            {/* Discount Code */}
            <div className="mb-6">
                <label className="block mb-1">
                    Discount Code
                </label>

                <input
                    name="discountCode"
                    value={state.discountCode}
                    onChange={handleChange}
                    placeholder="DISCOUNT10"
                    className="w-full border px-3 py-2 rounded"
                />
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4 mb-6 space-y-2">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>
                        {subtotal.toLocaleString()}$
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Discount:</span>
                    <span>
                        -{discount.toLocaleString()}$
                    </span>
                </div>

                <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>
                        {totalPrice.toLocaleString()}$
                    </span>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
            >
                Place Order
            </button>
        </form>
    );
}
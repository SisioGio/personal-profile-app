import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";

import apiService from "../services/apiService";

function Grocery() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toSave, setToSave] = useState(false);
  const getInventory = async () => {
    try {
      const response = await apiService.getInventory();
      setItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const { user } = useContext(UserContext);

  const addNewEntry = () => {
    setEditItem({
      name: null,
      unit_of_measure: null,
      exp_date: null,
      quantity: null,
    });
  };

  const submitNewEntry = () => {
    setItems([...editItem]);
  };
  const handleEdit = (item) => {
    setEditItem({ ...item });
    setIsCreating(false);
  };
  const handleDelete = (item_to_delete) => {
    const new_items = items.filter((item) => item.name !== item_to_delete.name);
    setItems(new_items);
    setIsCreating(false);
    setToSave(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (isCreating) {
      // Add new item
      setItems((prev) => [...prev, editItem]);
      setToSave(true);
    } else {
      // Save edited item
      setItems((prev) =>
        prev.map((item) => (item.name == editItem.name ? editItem : item))
      );
      setToSave(true);
    }
    setEditItem(null);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setEditItem(null);
    setIsCreating(false);
  };

  const SubmitInventory = async () => {
    try {
      await apiService.updateInventory(items);
      await getInventory();
      setIsSuccess(true);
      setToSave(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddNewItem = () => {
    setEditItem({ name: "", unit_of_measure: "", exp_date: "", quantity: 0 });
    setIsCreating(true);
  };

  useEffect(() => {
    getInventory();
  }, []);
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <p className="text-lg">Utilize this table to inform the model about your available products! When you ask a recipe those products will be considered.</p>
    
      <table className="min-w-full divide-y divide-gray-200 mt-5">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-start text-md font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
              Unit
            </th>
            <th className="px-6 py-3 bg-gray-50 text-start text-md font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
              Expiration Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr>
              <td className="p-1 m-1 whitespace-nowrap text-md font-medium text-gray-900">
                {item.name}
              </td>
              <td className="p-1 m-1 whitespace-nowrap text-md text-gray-500">
                {item.unit_of_measure}
              </td>
              <td className="p-1 m-1 whitespace-nowrap text-md text-gray-500">
                {item.quantity}
              </td>
              <td className="p-1 m-1 whitespace-nowrap text-md text-gray-500">
                {item.exp_date}
              </td>
              <td className=" whitespace-nowrap text-md font-medium flex justify-start items-center">
                <button
                  onClick={() => handleEdit(item)}
                  className=" hover:bg-indigo-100 w-full border border-indigo-800 border-opacity-40  text-black font-light p-1 m-1 rounded-xl">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item)}
                  className=" hover:bg-red-100 w-full border border-red-900  text-black font-light border-opacity-40 p-1 m-1 rounded-xl">
                  Delete
                </button>

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isSuccess && (
        <span className="text-white bg-green w-1/4 mx-auto p-1 text-center bg-green-600 block rounded-2xl">
          Saved!
        </span>
      )}

      {editItem && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xl px-2 font-medium text-gray-700 ">
                Name
              </label>
              <input
                disabled={!isCreating}
                type="text"
                name="name"
                value={editItem.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-xl px-2"
              />
            </div>
            <div>
              <label className="block text-xl px-2 font-medium text-gray-700 ">
                Unit
              </label>
              <input
                disabled={!isCreating}
                type="text"
                name="unit_of_measure"
                value={editItem.unit_of_measure}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  text-xl px-2"
              />
            </div>
            <div>
              <label className="block text-xl px-2 font-medium text-gray-700 ">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={editItem.quantity}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  text-xl px-2"
              />
            </div>
            <div>
              <label className="block text-xl px-2 font-medium text-gray-700 ">
                Expiration Date
              </label>
              <input
                type="date"
                name="exp_date"
                value={editItem.exp_date}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  text-xl px-2"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


<div className="flex justify-end items-end my-5 w-full ">
        
      
          <a
            className="bg-green-800 mx-2 text-white p-3 rounded-md cursor-pointer"
            onClick={handleAddNewItem}>
            New
          </a>
          {toSave && (
            <a
              className="bg-indigo-800 text-white p-3 rounded-md cursor-pointer"
              onClick={SubmitInventory}>
              Save
            </a>
          )}
        </div>

    </div>
  );
}

export default Grocery;

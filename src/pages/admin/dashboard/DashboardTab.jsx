


import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function DashboardTab() {
  const context = useContext(myContext);
  const { mode, product, edithandle, deleteProduct, order, user } = context;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const addProduct = () => {
    window.location.href = '/addproduct';
  };

  const renderProductTable = () => {
    return product.map((item, index) => {
      const { title, price, imageUrl, category, date } = item;
      return (
        <tr
          key={index}
          className="bg-gray-50 border-b dark:border-gray-700"
          style={{
            backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
            color: mode === 'dark' ? 'white' : '',
          }}
        >
          <td className="px-6 py-4">{index + 1}</td>
          <td className="px-6 py-4">
            <img className="w-16" src={imageUrl} alt="product" />
          </td>
          <td className="px-6 py-4">{title}</td>
          <td className="px-6 py-4">₹{price}</td>
          <td className="px-6 py-4">{category}</td>
          <td className="px-6 py-4">{date}</td>
          <td className="px-6 py-4">
            <div className="flex gap-2">
              <div className="cursor-pointer text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <div onClick={() => deleteProduct(item)}>
                  <AiFillDelete size={20} />
                </div>
              </div>
              <Link to="/updateproduct">
                <div onClick={() => edithandle(item)}>
                  <AiFillPlusCircle size={20} />
                </div>
              </Link>
            </div>
          </td>
        </tr>
      );
    });
  };

  const renderOrderTable = () => {
    return order.map((allorder, index) => {
      return (
        <table key={index} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            className="text-xs text-black uppercase bg-gray-200"
            style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
          >
            <tr>
              {['Payment Id', 'Image', 'Title', 'Price', 'Category', 'Name', 'Address', 'Pincode', 'Phone Number', 'Email', 'Date'].map((header) => (
                <th key={header} scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {allorder.cartItems.map((item, index) => {
            const { title, description, category, imageUrl, price } = item;
            return (
              <tbody key={index}>
                <tr
                  className="bg-gray-50 border-b dark:border-gray-700"
                  style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                >
                  <td className="px-6 py-4">{allorder.paymentId}</td>
                  <td className="px-6 py-4">
                    <img className="w-16" src={imageUrl} alt="product" />
                  </td>
                  <td className="px-6 py-4">{title}</td>
                  <td className="px-6 py-4">₹{price}</td>
                  <td className="px-6 py-4">{category}</td>
                  <td className="px-6 py-4">{allorder.userName}</td>
                  <td className="px-6 py-4">{allorder.address}</td>
                  <td className="px-6 py-4">{allorder.pincode}</td>
                  <td className="px-6 py-4">{allorder.phone}</td>
                  <td className="px-6 py-4">{allorder.email}</td>
                  <td className="px-6 py-4">{allorder.date}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      );
    });
  };

  return (
    <div className="container mx-auto">
      <Tabs defaultIndex={0} className="mb-10">
        <TabList className="md:flex md:space-x-8 bg- grid grid-cols-2 text-center gap-4 md:justify-center">
          <Tab>
            <button
              type="button"
              className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5"
            >
              <div className="flex gap-2 items-center">
                <MdOutlineProductionQuantityLimits /> Products
              </div>
            </button>
          </Tab>
          <Tab>
            <button
              type="button"
              className="font-medium border-b-2 border-pink-500 text-pink-500 hover:shadow-pink-700 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5"
            >
              <div className="flex gap-2 items-center">
                <AiFillShopping /> Order
              </div>
            </button>
          </Tab>
          <Tab>
            <button
              type="button"
              className="font-medium border-b-2 border-green-500 text-green-500 rounded-lg text-xl hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5"
            >
              <div className="flex gap-2 items-center">
                <FaUser /> Users
              </div>
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="px-4 md:px-0 mb-16">
            <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>
              Product Details
            </h1>
            <div className="flex justify-end">
              <button
                onClick={addProduct}
                type="button"
                className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <div className="flex gap-2 items-center">
                  Add Product <FaCartPlus size={20} />
                </div>
              </button>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                  className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
                  style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                >
                  <tr>
                    <th scope="col" className="px-6 py-3">S.No</th>
                    <th scope="col" className="px-6 py-3">Image</th>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Price</th>
                    <th scope="col" className="px-6 py-3">Category</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>{renderProductTable()}</tbody>
              </table>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="px-4 md:px-0">
            <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>
              Orders
            </h1>
            {renderOrderTable()}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="px-4 md:px-0">
            <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>
              Users
            </h1>
            {/* Implement user-related content here */}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default DashboardTab;



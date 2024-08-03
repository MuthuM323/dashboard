import React from 'react';

interface DataTableProps {
  data: TableData[];
}
// types.ts
export interface TableData {
    customer: string;
    orderNo: string;
    amount: string;
    img:any,
    status: 'Delivered' | 'Pending' | 'Cancelled';
  }
  
  

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg shadow-md ">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="py-3 px-4 text-left">Customer</th>
            <th className="py-3 px-4 text-left">Order No</th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-800">
              <td className="py-3 px-4">
                <div className="flex items-center">
                  <img src={row.img} alt="profile" className="rounded-full h-6 w-6 mx-2" />
                  {row.customer}
                </div>
              </td>
              <td className="py-3 px-4">{row.orderNo}</td>
              <td className="py-3 px-4">{row.amount}</td>
              <td className="py-3 px-4">
                <span
                  className={`text-sm m-auto font-bold rounded-3xl px-3 py-1 ${
                    row.status === 'Delivered'
                      ? 'bg-green-300 text-green-800'
                      : row.status === 'Pending'
                      ? 'bg-yellow-300 text-yellow-800'
                      : 'bg-red-300 text-red-800'
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

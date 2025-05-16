import React from 'react';
const tableHeading = [
  {
    colName:"Name",
    icon:"🔤",
  },
  {
    colName:"Status",
    icon:"✅",
  },
];

const tableData = [
  {

    name:"Alice",
    status:"Active"
  },
  {
    name:"Bob",
    status:"InActive"
  },
];
const TableSection = () => {
  return (
    <div className="container mx-auto p-6">
        <h2 className='text-2xl font-bold mb-4'>📊 User Data</h2>
        <table className="min-w-fit border border-collapse">
          <thead>
            <tr>
              {tableHeading.map((heading) => (
                <th key={heading.colName} className="border border-gray-600 px-4 py-2">{heading.icon} {heading.colName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className={`border border-gray-300 px-4 py-2' ${ user.status == "Active" ? `text-green-600` : `text-red-600`}`}>{user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default TableSection;
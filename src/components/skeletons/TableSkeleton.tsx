const TableSkeleton = () => {
  return (
    <div className="w-full p-4 border border-gray-300 rounded-md">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">Column 1</th>
            <th className="p-2 border border-gray-300">Column 2</th>
            <th className="p-2 border border-gray-300">Column 3</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((row) => (
            <tr key={row}>
              {[1, 2, 3].map((col) => (
                <td key={col} className="p-4 border border-gray-300">
                  <div className="w-full h-6 bg-gray-200 animate-pulse rounded-md"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;

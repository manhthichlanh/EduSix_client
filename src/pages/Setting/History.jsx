import { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { CSVLink } from 'react-csv';
import PurchaseAPI from '../../utils/PurchaseAPI';

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const formatRelativeTime = (timestamp) => {
  const secondsAgo = Math.floor((Date.now() - timestamp) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} giây trước`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo} phút trước`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo} giờ trước`;
  } else {
    const date = new Date(timestamp);
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
  }
};

const AccountPurchaseHistory = () => {
  const { purchaseData, courseDataList } = PurchaseAPI();
  const [enhancedPurchaseData, setEnhancedPurchaseData] = useState([]);
  const [pageSize] = useState(10);

  const columns = useMemo(
    () => [
      { Header: 'Id', accessor: 'order_id' },
      { Header: 'Tên khóa học', accessor: 'course_name' },
      { Header: 'Giá', accessor: 'price', Cell: ({ value }) => `${formatNumberWithCommas(value)} VND` },
      { Header: 'Nội dung giao dịch', accessor: 'order_info' },
      {
        Header: 'Trạng thái',
        accessor: 'transaction_status',
        Cell: ({ value }) => (
          <span
            className={`py-1 px-2 rounded font-semibold ${
              value === 'Giao dịch thành công'
                ? 'bg-green-50 text-green-600'
                : value === 'Giao dịch thất bại'
                ? 'bg-red-50 text-red-600'
                : ''
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: 'Thời gian',
        accessor: 'created_at',
        Cell: ({ value }) => formatRelativeTime(new Date(value).getTime()),
      },
    ],
    []
  );

  useEffect(() => {
    const enhancedData = purchaseData.map((purchase) => {
      const course = courseDataList.find((course) => course.course_id === purchase.course_id);
      return {
        ...purchase,
        course_name: course ? course.name : 'Unknown Course',
      };
    });

    setEnhancedPurchaseData(enhancedData);
  }, [purchaseData, courseDataList]);

  const {
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: enhancedPurchaseData || [],
      initialState: { pageSize },
    },
    useSortBy,
    usePagination
  );

  const csvHeaders = columns.map((column) => ({
    label: column.Header,
    key: column.accessor,
  }));

  const paginatedData = useMemo(() => enhancedPurchaseData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize), [
    enhancedPurchaseData,
    pageIndex,
    pageSize,
  ]);

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {enhancedPurchaseData && enhancedPurchaseData.length > 0 ? (
        <div>
          <div className="flex justify-end mb-4">
            {/* <div className="mr-4">
              Số dòng trên mỗi trang:{' '}
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[1, 2, 3, 4, 5].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div> */}
            <CSVLink
              data={paginatedData}
              headers={csvHeaders}
              filename="purchase_history.csv"
              className="px-4 py-2 bg-orange-500 text-white rounded"
            >
              Xuất CSV
            </CSVLink>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[1000px] bg-white border border-gray-200 shadow-md rounded-md overflow-hidden">
              <thead className="bg-orange-500">
                {headerGroups.map((headerGroup) => (
                  <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        key={column.id}
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className="py-2 px-4 text-left font-semibold text-white text-center"
                      >
                        {column.render('Header')}
                        <span className="ml-1">
                          {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      key={row.id}
                      {...row.getRowProps()}
                      className="hover:bg-gray-50 transition duration-300"
                    >
                      {row.cells.map((cell) => (
                        <td
                          key={cell.getCellProps().key}
                          {...cell.getCellProps()}
                          className="py-3 px-4 border-b text-sm text-center"
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className="px-2 py-1 rounded bg-orange-500 text-white font-semibold disabled:opacity-50"
              >
                Trước
              </button>
              <button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                className="ml-2 px-2 py-1 rounded bg-orange-500 text-white font-semibold disabled:opacity-50"
              >
                Sau
              </button>
            </div>
            <div>
              Trang{' '}
              <strong>
                {pageIndex + 1} / {pageOptions.length}
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <p>Không có dữ liệu</p>
      )}
    </div>
  );
};

export default AccountPurchaseHistory;

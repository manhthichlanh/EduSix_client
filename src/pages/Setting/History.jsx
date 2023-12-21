
import PurchaseAPI from '../../utils/PurchaseAPI';

function AccountPurchaseHistory() {
  const { purchaseData } = PurchaseAPI();

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Lịch sử mua hàng</h2>
      {purchaseData && purchaseData.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">User ID</th>
              <th className="py-2 px-4 border-b">Course ID</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Order Info</th>
              <th className="py-2 px-4 border-b">Transaction Status</th>
              <th className="py-2 px-4 border-b">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {purchaseData.map((purchaseDetail) => (
              <tr key={purchaseDetail.order_id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{purchaseDetail.order_id}</td>
                <td className="py-2 px-4 border-b">{purchaseDetail.user_id}</td>
                <td className="py-2 px-4 border-b">{purchaseDetail.course_id}</td>
                <td className="py-2 px-4 border-b">{purchaseDetail.price}</td>
                <td className="py-2 px-4 border-b">{purchaseDetail.order_info}</td>
                <td className="py-2 px-4 border-b">{purchaseDetail.transaction_status}</td>
                <td className="py-2 px-4 border-b">{purchaseDetail.order_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-4 text-gray-500">Không có dữ liệu</p>
      )}
    </div>
  );
}

export default AccountPurchaseHistory;

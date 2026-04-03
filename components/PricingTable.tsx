"use client";

const pricingData = [
  {
    model: "CALYA 1.2 G MT",
    lowDp: { dp: 6.5, installment: 3.82 },
    normal: { dp: 10, installment: 3.56 },
    approval: { dp: 22, installment: 3.27 },
  },
  {
    model: "CALYA 1.2 G AT",
    lowDp: { dp: 9.5, installment: 4.1 },
    normal: { dp: 13, installment: 3.83 },
    approval: { dp: 25, installment: 3.38 },
  },
  {
    model: "AGYA 1.2 G MT",
    lowDp: { dp: 7, installment: 3.95 },
    normal: { dp: 11, installment: 3.66 },
    approval: { dp: 21, installment: 3.39 },
  },
  {
    model: "AGYA 1.2 G CVT",
    lowDp: { dp: 10, installment: 4.98 },
    normal: { dp: 14, installment: 3.61 },
    approval: { dp: 21, installment: 3.67 },
  },
  {
    model: "AVANZA 1.5 E MT",
    lowDp: { dp: 12, installment: 4.98 },
    normal: { dp: 16, installment: 4.62 },
    approval: { dp: 29, installment: 4.66 },
  },
  {
    model: "AVANZA 1.5 E CVT",
    lowDp: { dp: 15, installment: 5.2 },
    normal: { dp: 16, installment: 4.88 },
    approval: { dp: 29, installment: 4.8 },
  },
];

export default function PricingTable() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Paket Harga & Cicilan
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold">
                  Type Unit / Kendaran
                </th>
                <th colSpan={2} className="border border-gray-300 px-4 py-3 text-center font-bold bg-blue-600">
                  Paket Low DP
                </th>
                <th colSpan={2} className="border border-gray-300 px-4 py-3 text-center font-bold bg-green-600">
                  Paket Normal
                </th>
                <th colSpan={2} className="border border-gray-300 px-4 py-3 text-center font-bold bg-purple-600">
                  Paket Approval
                </th>
              </tr>
              <tr className="bg-gray-200 text-gray-800 font-bold">
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2">DP (JT)</th>
                <th className="border border-gray-300 px-4 py-2">Cicilan</th>
                <th className="border border-gray-300 px-4 py-2">DP (JT)</th>
                <th className="border border-gray-300 px-4 py-2">Cicilan</th>
                <th className="border border-gray-300 px-4 py-2">DP (JT)</th>
                <th className="border border-gray-300 px-4 py-2">Cicilan</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`text-gray-800 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="border border-gray-300 px-4 py-3 font-semibold">
                    {item.model}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                    {item.lowDp.dp}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-blue-50">
                    {item.lowDp.installment}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                    {item.normal.dp}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-green-50">
                    {item.normal.installment}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50">
                    {item.approval.dp}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50">
                    {item.approval.installment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
          <p className="text-yellow-800 font-semibold">
            ℹ️ Tenor 5 Tahun, Data Dibantu Sampai Clear
          </p>
        </div>
      </div>
    </div>
  );
}

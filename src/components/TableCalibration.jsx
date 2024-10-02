function TableCalibration() {
  return (
    <div className="flex-1 w-full bg-yellow-50 px-3 py-10 rounded-2xl border-2 border-solid border-white shadow-2xl">
      <h1 className="flex items-center justify-center text-2xl font-OpenSansExtraBold text-yellow-400">
        Calibration
      </h1>
      <table className="w-full text-center e">
        <thead>
          <tr className="border-b-2 border-b-solid border-b-white">
            <th className="py-3">caliber</th>
            <th className="py-3 border-x-2 border-solid border-x-white">
              diameter
            </th>
            <th className="py-3">count</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>1</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              88 - 92
            </td>
            <td>40</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>2</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              84 - 88
            </td>
            <td>48</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>3</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              81 - 84
            </td>
            <td>56</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>4</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              77 - 81
            </td>
            <td>64</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>5</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              73 - 77
            </td>
            <td>72</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>6</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              69 - 73
            </td>
            <td>80</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>7</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              65 - 69
            </td>
            <td>88</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>8</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              61 - 65
            </td>
            <td>100</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>9</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              57 - 61
            </td>
            <td>113</td>
          </tr>
          <tr className="border-b-2 border-b-solid border-b-white">
            <td>10</td>
            <td className="py-2 border-x-2 border-solid border-x-white">
              53 - 57
            </td>
            <td>125</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCalibration;

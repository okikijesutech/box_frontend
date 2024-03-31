import { useEffect, useState } from "react";
import MerchantLayout from "../../layouts/MerchantLayout";
import axios from "axios";
// import { useAuth } from "../../contexts/AuthContext";
import Chart from "chart.js/auto";

const Merchant = () => {
  const [users, setUsers] = useState([]);
  const [productsSoldOverTime, setProductsSoldOverTime] = useState([]);
  // const { accessToken } = useAuth();

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/user", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUsers();
  // }, [accessToken]);

  // useEffect(() => {
  //   const fetchProductsSoldOverTime = async () => {
  //     try {
  //       const response = await axios.get("/api/products-sold-over-time");
  //       setProductsSoldOverTime(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchProductsSoldOverTime();
  // }, []);

  // useEffect(() => {
  //   renderChart();
  // }, [users]);

  // const renderChart = () => {
  //   const ctx = document.getElementById("myChart") as HTMLCanvasElement;
  //   // const ctx = document.getElementById("productsSoldChart");
  //   if (ctx) {
  //     new Chart(ctx, {
  //       type: "bar",
  //       data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         // labels: productsSoldOverTime.map((item) => item.date.month),
  //         datasets: [
  //           {
  //             label: "# of Votes",
  //             data: [12, 19, 3, 5, 2, 3],
  //             // data: productsSoldOverTime.map((item) => item.count._count),
  //             backgroundColor: [
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(75, 192, 192, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(255, 159, 64, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(54, 162, 235, 1)",
  //               "rgba(255, 206, 86, 1)",
  //               "rgba(75, 192, 192, 1)",
  //               "rgba(153, 102, 255, 1)",
  //               "rgba(255, 159, 64, 1)",
  //             ],
  //             borderWidth: 1,
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       },
  //     });
  //   }
  // };

  return (
    <MerchantLayout>
      <h1 className='text-4xl mb-5'>Overview</h1>
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 max-h-screen'>
        <div className='bg-slate-400 rounded-md px-5 py-2 col-span-1 row-span-1'>
          <h4 className='font-semibold text-2xl'>Highest paying customer</h4>
          <p className='font-semibold text-xl'>{users.length || 0}</p>
        </div>
        <div className='bg-slate-400 rounded-md px-5 py-2 col-span-1 row-span-1'>
          <h4 className='font-semibold text-2xl'>Total Transaction</h4>
          <p className='font-semibold text-xl'>100M</p>
          <canvas id='myChart' width='400' height='400'></canvas>
        </div>
        <div className='bg-slate-400 rounded-md px-5 py-2 col-span-2 row-span-1'>
          <h4 className='font-semibold text-2xl'>Revenue</h4>
          <p className='font-semibold text-xl'>560M</p>
        </div>
        <div className='bg-slate-400 rounded-md px-5 py-2 col-span-3 row-span-1'>
          <h4 className='font-semibold text-2xl'>Total Order</h4>
          <p className='font-semibold text-xl'>560M</p>
        </div>
        <div className='bg-slate-400 rounded-md px-5 py-2 col-span-1 row-span-1'>
          <h4 className='font-semibold text-2xl'>Best selling product</h4>
          <p className='font-semibold text-xl'>560M</p>
        </div>
      </div>
    </MerchantLayout>
  );
};

export default Merchant;

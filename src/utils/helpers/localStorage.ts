export const getCityToken = () => localStorage.getItem("city-token");

export const removeCityToken = () => localStorage.removeItem("city-token");

// const handleLogout = () => {
//     removeCityToken();
//     showNotify("success", "Logged out successfully");
//     router.push("/");
//   };

//   useEffect(() => {
//     if (!IsAuth()) {
//       router.push("/login");
//     }
//   }, []);

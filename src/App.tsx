import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation } from "react-router-dom";
import { lazy } from "react";
import HeadFoodPage from "./components/HeadFoodPage"
import Basket from "./components/Basket";
const MainPage = lazy(()=>import("./components/MainPage"))
const Favorite = lazy(()=>import("./components/Favirote"))
const Profile = lazy(()=>import("./components/Profile"))
const CreateItems = lazy(()=>import("./components/CreateItems"))


function App() {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/"element={<HeadFoodPage/>}>
      <Route index element={<MainPage/>}/>
      <Route path='/favorite'element={<Favorite/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/createItems"element={<CreateItems/>}/>
      <Route path="/page/:page" element={<MainPage />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

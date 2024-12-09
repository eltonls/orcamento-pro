import { BrowserRouter, Routes, Route } from "react-router";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=Home />
      </Routes>
    </BrowserRouter>
  )
}

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./component/Hero"
import Layout from "./component/Layout"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Hero />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

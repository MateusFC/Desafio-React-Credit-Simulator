import BoxCustom from "../components/BoxCustom"
import AmountStep from '../pages/AmountStep';
import MonthsStep from '../pages/MonthsStep';
import ResumeStep from '../pages/ResumeStep';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const AppRoutes = () => {
    return (
        <Router>
            <BoxCustom>
                <Routes>
                    <Route path="/" element={<AmountStep />} />
                    <Route path="/months" element={<MonthsStep />} />
                    <Route path="/resume" element={<ResumeStep />} />
                </Routes>
            </BoxCustom>
        </Router>
    )
}
export default AppRoutes
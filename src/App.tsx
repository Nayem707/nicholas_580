import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PlatformOverview from './pages/PlatformOverview';
import CISODashboard from './pages/CISODashboard';
import ExecutiveView from './pages/ExecutiveView';
import SupplyChainRisk from './pages/SupplyChainRisk';
import ComplianceCenter from './pages/ComplianceCenter';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformOverview />} />
          <Route path="/ciso" element={<CISODashboard />} />
          <Route path="/executive" element={<ExecutiveView />} />
          <Route path="/supply-chain" element={<SupplyChainRisk />} />
          <Route path="/compliance" element={<ComplianceCenter />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

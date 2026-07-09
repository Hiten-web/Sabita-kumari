import React, { useState } from 'react';
import { 
  Shield, 
  Globe, 
  Phone, 
  TrendingUp, 
  Building2, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Scale, 
  FileSpreadsheet, 
  Users, 
  ChevronRight, 
  Search, 
  Check, 
  Briefcase, 
  DollarSign, 
  FileCheck2, 
  HelpCircle,
  Building,
  Info
} from 'lucide-react';

// Define TS Interfaces for interactivity
interface CompliancePoint {
  id: string;
  title: string;
  description: string;
  auditorObjective: string;
}

interface FormState {
  fullName: string;
  corporateName: string;
  entityType: string;
  ein: string;
  inquiryType: string;
  phone: string;
  message: string;
}

export default function App() {
  // Navigation active state (for scroll or visual tabs)
  const [activeTab, setActiveTab] = useState<'profile' | 'model' | 'compliance' | 'form'>('profile');
  
  // Interactive audit checklist state
  const [checkedAudits, setCheckedAudits] = useState<Record<string, boolean>>({
    ofac: true,
    aml: true,
    escrow: true,
    equitable: true,
  });

  // Simulated Inquiry Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    corporateName: '',
    entityType: 'US_LLC',
    ein: '',
    inquiryType: 'compliance',
    phone: '',
    message: ''
  });

  // Interactive Flowchart active node state
  const [activeFlowNode, setActiveFlowNode] = useState<number>(0);

  // Corporate compliance verification checklist data
  const compliancePoints: CompliancePoint[] = [
    {
      id: 'ofac',
      title: 'OFAC & Specially Designated Nationals Screening',
      description: 'Prior to entering any contract for property, all parties (buyers, sellers, and assignees) undergo strict automated screening against United States Department of the Treasury OFAC lists.',
      auditorObjective: 'Validates that the India-based operational hub strictly complies with US treasury foreign asset control regulations.'
    },
    {
      id: 'aml',
      title: 'Anti-Money Laundering (AML) Wire Flow Oversight',
      description: 'Our Lead Financialist reviews incoming and outgoing wire flows. Capital is strictly handled through registered, institutional-grade commercial banking institutions, with detailed SWIFT trace records.',
      auditorObjective: 'Proves high-level tracking of cross-border financial traffic, minimizing risk of shell company laundering.'
    },
    {
      id: 'escrow',
      title: 'Escrow Integration with US Title Companies',
      description: 'All wholesale transaction contract deposits (EMD) and final balances are settled directly via licensed, state-regulated escrow accounts held at accredited US Title Companies. No operational funds are ever routed to personal or non-underwritten merchant accounts.',
      auditorObjective: 'Confirms that the transaction leverages a neutral licensed third-party, completely removing retail merchant payment risk.'
    },
    {
      id: 'equitable',
      title: 'Strict Adherence to Doctrine of Equitable Conversion',
      description: 'Our transactions are purely limited to assigning bilateral purchase contracts in which we hold valid, legally binding equitable interest under US property common law. We do not act as local brokers or realtors.',
      auditorObjective: 'Secures legal regulatory compliance, demonstrating the business is strictly trading contractual rights (intangible B2B assets).'
    }
  ];

  // Underwriting Simulator variables
  const [simState, setSimState] = useState({
    afterRepairValue: 350000,
    estimatedRepairs: 450000, // will show high-yield calculations
    purchasePrice: 210000,
    assignmentFee: 15000,
  });

  // Flowchart steps
  const flowchartSteps = [
    {
      step: 1,
      title: "Asset Selection & Valuation",
      actor: "Lead Financialist",
      desc: "Underwriting of US off-market single-family assets based on deep analytical discount formulas. Sourced via proprietary property data stacks."
    },
    {
      step: 2,
      title: "Binding Purchase Agreement",
      actor: "Legal & Compliance Desk",
      desc: "Execution of a legally binding Purchase and Sale Agreement with the seller, establishing valid corporate Equitable Interest."
    },
    {
      step: 3,
      title: "Escrow Deposit Placement",
      actor: "Escrow & Title Company",
      desc: "Corporate earnest money deposit (EMD) is wired to a US-regulated Title & Escrow Partner to open the neutral file."
    },
    {
      step: 4,
      title: "B2B Contract Assignment",
      actor: "Qualified US Cash Buyer",
      desc: "Assignment of Contractual Equitable Rights is executed to an vetted US institutional buyer at a gross, all-inclusive transactional cost."
    },
    {
      step: 5,
      title: "Certified Title Closure",
      actor: "Title Officer / Escrow Agent",
      desc: "Neutral settlement, direct wire disbursement, and transfer of title deeds strictly managed through US-certified closing agents."
    }
  ];

  // Form submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.fullName && formState.corporateName && formState.phone) {
      setFormSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormState({
      fullName: '',
      corporateName: '',
      entityType: 'US_LLC',
      ein: '',
      inquiryType: 'compliance',
      phone: '',
      message: ''
    });
    setFormSubmitted(false);
  };

  // Toggle checklist
  const toggleAudit = (id: string) => {
    setCheckedAudits(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white border-t-8 border-slate-900">
      
      {/* EXCLUSIVE B2B BANNER */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-600 py-2.5 px-4 text-xs font-mono tracking-wide text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none bg-slate-900 text-white border border-slate-900 font-semibold uppercase text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Compliance Verified
          </span>
          <span>
            EXCLUSIVE PORTAL FOR COMPLIANCE AUDITORS, INSTITUTIONAL BUYERS, & CLOSING AGENTS. 
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="font-semibold text-slate-900">
            SECURE WIRE COMPLIANCE PROTOCOLS ENFORCED
          </span>
        </div>
      </div>

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* CORPORATE IDENTITY */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-sm bg-slate-900 flex items-center justify-center border border-slate-900">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="block text-lg font-bold font-display tracking-tight text-slate-900 uppercase">
                Global Real Estate Wholesalers
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                B2B Contract Assignment Desk
              </span>
            </div>
          </div>

          {/* DESKTOP NAV & TELEPHONE DESK */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
              <a href="#leadership" className="hover:text-slate-900 transition-colors">Executive Profile</a>
              <a href="#value-chain" className="hover:text-slate-900 transition-colors">Business Model</a>
              <a href="#compliance" className="hover:text-slate-900 transition-colors">Corporate Governance</a>
              <a href="#auditor-desk" className="hover:text-slate-900 transition-colors">Auditor Dashboard</a>
            </nav>
            
            {/* TELEPHONE OUTLET */}
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
              <div className="h-9 w-9 rounded-none bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-100">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Operational Hotline
                </span>
                <a href="tel:+91-7549546824" className="block text-sm font-bold text-slate-900 hover:text-slate-700 transition-colors">
                  +91-7549546824
                </a>
              </div>
            </div>
          </div>

          {/* COMPLIANCE SHORTCUT FOR MOBILE */}
          <div className="lg:hidden">
            <a 
              href="tel:+91-7549546824"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-none bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
            >
              <Phone className="h-3 w-3 text-white" />
              <span>Call Compliance Desk</span>
            </a>
          </div>

        </div>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-white text-slate-900 py-16 lg:py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Core Value Copy */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-slate-50 text-slate-800 border border-slate-200 text-xs font-mono tracking-wider uppercase font-bold">
                  <Lock className="h-3.5 w-3.5" />
                  B2B Institutional Mandate Only
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight tracking-tight text-slate-900">
                  Institutional-Grade Real Estate Wholesaling &amp; Contract Assignments.
                </h1>

                <p className="text-lg sm:text-xl text-slate-500 font-normal leading-relaxed max-w-3xl">
                  Bridging international capital and deeply discounted off-market U.S. residential real estate portfolios with absolute financial compliance.
                </p>

                {/* Core trust tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-semibold text-slate-900">Zero Direct Public Retail Risk</span>
                      <span className="block text-xs text-slate-500">Strictly trading equitable contracts via Escrow</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-semibold text-slate-900">US-Accredited Settlements</span>
                      <span className="block text-xs text-slate-500">Settled directly at local title companies</span>
                    </div>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href="#partner-inquiry"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-colors rounded-none"
                  >
                    Partner With Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a 
                    href="#auditor-desk"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-800 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors border border-slate-200 rounded-none"
                  >
                    Audit Transactional Workflow
                  </a>
                </div>

              </div>

              {/* Right Column: Interactive Financial Trust Panel */}
              <div className="lg:col-span-5">
                <div className="bg-slate-50 border border-slate-200 rounded-none p-6 sm:p-8 space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <Scale className="h-5 w-5 text-slate-900" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">Underwriting Metrics</span>
                    </div>
                    <span className="text-[10px] font-mono text-white font-bold bg-slate-900 px-2 py-0.5 border border-slate-900 uppercase">
                      Standard B2B Spread
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-normal">
                    Demonstration of the disciplined corporate spread formula used to ensure equitable contract value prior to assignment execution.
                  </p>

                  {/* Calculations interface */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                        <span>Target US Property Fair Market Value (ARV):</span>
                        <span className="font-mono font-bold text-slate-900">${simState.afterRepairValue.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="200000" 
                        max="600000" 
                        step="10000"
                        name="afterRepairValue"
                        value={simState.afterRepairValue} 
                        onChange={(e) => setSimState(prev => ({...prev, afterRepairValue: parseInt(e.target.value)}))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                        <span>Standard Discount Purchase Contract:</span>
                        <span className="font-mono font-bold text-slate-900">${simState.purchasePrice.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="100000" 
                        max="350000" 
                        step="5000"
                        name="purchasePrice"
                        value={simState.purchasePrice} 
                        onChange={(e) => setSimState(prev => ({...prev, purchasePrice: parseInt(e.target.value)}))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                        <span>B2B Corporate Contract Assignment Fee:</span>
                        <span className="font-mono font-bold text-slate-900">${simState.assignmentFee.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="5000" 
                        max="40000" 
                        step="1000"
                        name="assignmentFee"
                        value={simState.assignmentFee} 
                        onChange={(e) => setSimState(prev => ({...prev, assignmentFee: parseInt(e.target.value)}))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                      />
                    </div>
                  </div>

                  {/* Calculated Results */}
                  <div className="bg-white border border-slate-200 rounded-none p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs text-slate-600">
                      <span>Equitable Discount to Market:</span>
                      <span className="font-mono font-bold text-emerald-700">
                        {(((simState.afterRepairValue - simState.purchasePrice) / simState.afterRepairValue) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-600">
                      <span>Gross Investor Cost (All-Inclusive):</span>
                      <span className="font-mono font-bold text-slate-900">
                        ${(simState.purchasePrice + simState.assignmentFee).toLocaleString()}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-sm font-bold">
                      <span className="text-slate-800">Net Corporate Assigned Equity:</span>
                      <span className="font-mono text-slate-900">
                        ${(simState.afterRepairValue - (simState.purchasePrice + simState.assignmentFee)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Flow Note */}
                  <div className="flex items-start gap-2 text-[11px] text-slate-500">
                    <Info className="h-4 w-4 text-slate-400 shrink-0" />
                    <span>
                      Financial calculations are for model vetting purposes only. No consumer billing or retail investments occur on this platform.
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* EXECUTIVE PROFILE: SABITA KUMARI */}
        <section id="leadership" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                Institutional Trust &amp; Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
                Leadership in Global Real Estate Finance
              </h2>
              <div className="h-1 w-12 bg-slate-900 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Corporate Profile Illustration and Key Badges */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-none border border-slate-200 bg-slate-50 p-8 text-center text-slate-900">
                  
                  {/* Decorative Security Seal Badge */}
                  <div className="mx-auto h-20 w-20 rounded-none bg-slate-900 flex items-center justify-center text-white mb-6 border border-slate-900">
                    <Shield className="h-9 w-9 text-white" />
                  </div>

                  <h3 className="text-2xl font-extrabold font-display text-slate-900 tracking-tight">
                    Sabita Kumari
                  </h3>
                  <p className="text-xs font-mono text-slate-500 font-semibold tracking-wider uppercase mt-1">
                    Chief Lead Financialist
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200 text-left space-y-3">
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Department:</span>
                      <span className="font-mono text-slate-900">Compliance &amp; Underwriting</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Jurisdiction:</span>
                      <span className="font-mono text-slate-900">India Operations / US Assignments</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Core Asset Target:</span>
                      <span className="font-mono text-slate-900">US Single-Family Residential (SFR)</span>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border border-slate-200 text-[10px] text-slate-700 font-mono">
                    <Check className="h-3 w-3 text-emerald-600" />
                    Authorized Escrow Direct Officer
                  </div>
                </div>

                {/* Performance stats / Compliance scope blocks */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-none">
                    <span className="block text-xl font-bold text-slate-900">100%</span>
                    <span className="block text-xs text-slate-500 font-medium mt-1">B2B Compliant Settlements</span>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-none">
                    <span className="block text-xl font-bold text-slate-900">Strict Escrow</span>
                    <span className="block text-xs text-slate-500 font-medium mt-1">Authorized US Closers Only</span>
                  </div>
                </div>

              </div>

              {/* Right Side: Professional Narrative (Specifically highlight Sabita Kumari's corporate role) */}
              <div className="lg:col-span-7 space-y-6">
                
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Building className="h-5 w-5 text-slate-900" />
                  Role &amp; Executive Mandate
                </h3>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    As the <span className="font-semibold text-slate-900">Chief Lead Financialist</span> of Real Estate Wholesalers, <span className="font-semibold text-slate-900 font-display">Sabita Kumari</span> acts as the principal gatekeeper of financial compliance and transaction integrity for our international real estate operation. Operating from the headquarters in India, she specializes in managing the complex financial mechanisms involved in cross-border B2B contract assignments.
                  </p>
                  
                  <p>
                    Her executive responsibilities center on conducting rigorous quantitative underwriting on physical U.S. residential property portfolios from a strictly analytical perspective. This analytical standard ensures all assets meet stringent discount criteria, preserving significant equity spreads for institutional cash buyers and sovereign funds in the United States prior to contract lock-in.
                  </p>

                  <p>
                    In addition to asset evaluation, Sabita oversees international corporate risk assessment frameworks. This includes coordinating cross-border SWIFT/wire flows, enforcing internal Anti-Money Laundering (AML) standards, and validating strict adherence to Office of Foreign Assets Control (OFAC) procedures before transactional initiation.
                  </p>

                  <p>
                    Crucially, she manages the critical corporate escrow relations with trusted, investor-friendly title companies and licensed closing attorneys throughout the United States. Through her systematic oversight, contract deposits, earnest money, and assignment payoffs are executed with absolute transparency, securing institutional safety for our corporate buyers.
                  </p>
                </div>

                {/* Quick interactive operational tab buttons */}
                <div className="border-t border-slate-100 pt-6">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Click to Inspect Sabita Kumari’s Core Oversight Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setActiveTab('profile')} 
                      className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'profile' ? 'bg-slate-900 text-white border border-slate-900' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
                    >
                      Cross-Border Wires
                    </button>
                    <button 
                      onClick={() => setActiveTab('model')} 
                      className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'model' ? 'bg-slate-900 text-white border border-slate-900' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
                    >
                      US Underwriting Specs
                    </button>
                    <button 
                      onClick={() => setActiveTab('compliance')} 
                      className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'compliance' ? 'bg-slate-900 text-white border border-slate-900' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
                    >
                      Escrow Integrity
                    </button>
                  </div>

                  {/* Responsive description box based on button clicks */}
                  <div className="mt-4 p-4 bg-slate-50 rounded-none border border-slate-200 text-xs text-slate-600 font-mono">
                    {activeTab === 'profile' && (
                      <p>
                        <span className="font-bold text-slate-900">[OVERSIGHT AREA A]</span> Direct auditing of swift code pipelines, currency conversions, and routing validations. Operates exclusively through high-grade banking institutions in full compliance with RBI and US Federal Reserve regulatory channels.
                      </p>
                    )}
                    {activeTab === 'model' && (
                      <p>
                        <span className="font-bold text-slate-900">[OVERSIGHT AREA B]</span> Underwriting target parameters: Maximum contract price &le; 70% of After Repair Value (ARV) minus estimated rehabilitation costs, verified via digital local assessor records and third-party desk valuations.
                      </p>
                    )}
                    {activeTab === 'compliance' && (
                      <p>
                        <span className="font-bold text-slate-900">[OVERSIGHT AREA C]</span> Escrow relations mapped exclusively with US-based closing partners, securing standard earnest deposits to open files within 48 business hours of bi-lateral contract signature.
                      </p>
                    )}
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* THE BUSINESS MODEL: TRANSPARENT VALUE CHAIN */}
        <section id="value-chain" className="py-20 bg-white text-slate-900 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase block">
                Transactional Flow Chart
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
                Our Business Model: Transparent Value Chain
              </h2>
              <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                A highly secure, step-by-step breakdown of how Real Estate Wholesalers operates internationally, facilitating contract assignments for compliance and payment underwriters.
              </p>
              <div className="h-1 w-12 bg-slate-900 mx-auto mt-2"></div>
            </div>

            {/* THREE PILLARS CARD GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="bg-slate-50 border-l-2 border-slate-900 rounded-none p-8 transition-all group space-y-4">
                <div className="h-12 w-12 rounded-none bg-slate-900 flex items-center justify-center text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="block text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    Pillar 01
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Asset Identification &amp; Underwriting
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our specialized research team sources deeply discounted, off-market residential single-family and multi-family assets across high-yield US states using proprietary institutional data stacks and public records.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50 border-l-2 border-slate-900 rounded-none p-8 transition-all group space-y-4">
                <div className="h-12 w-12 rounded-none bg-slate-900 flex items-center justify-center text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="block text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    Pillar 02
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Binding Equitable Interest
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We secure a legally binding Purchase and Sale Agreement with the asset owners, locking in valid corporate equitable interest. This bilateral contract establishes an absolute right of assignment in full compliance with local laws.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50 border-l-2 border-slate-900 rounded-none p-8 transition-all group space-y-4">
                <div className="h-12 w-12 rounded-none bg-slate-900 flex items-center justify-center text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <span className="block text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    Pillar 03
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Institutional Assignment
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We assign our contractual equitable rights exclusively to pre-qualified US cash buyers and corporate entities at a gross, all-inclusive price. The entire transaction is settled seamlessly via US-certified title companies and licensed escrow accounts.
                  </p>
                </div>
              </div>

            </div>

            {/* INTERACTIVE WORKFLOW FLOWCHART SIMULATOR */}
            <div className="mt-16 bg-slate-50 border border-slate-200 rounded-none p-6 sm:p-8 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    B2B Transaction Step-Through
                  </h3>
                  <p className="text-xs text-slate-500">
                    Interactive mapping of cross-border financial and legal steps to demonstrate transparency to auditors.
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  {flowchartSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFlowNode(idx)}
                      className={`h-2 rounded-none transition-all ${idx === activeFlowNode ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* FLOWCHART VISUAL TILES */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                {flowchartSteps.map((item, index) => {
                  const isActive = index === activeFlowNode;
                  return (
                    <div 
                      key={item.step}
                      onClick={() => setActiveFlowNode(index)}
                      className={`cursor-pointer p-4 rounded-none border transition-all text-left relative ${isActive ? 'bg-slate-900 border-slate-900 text-white shadow-none' : 'bg-white border-slate-200 hover:border-slate-400 text-slate-900'}`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-none ${isActive ? 'bg-slate-850 text-slate-200' : 'bg-slate-100 text-slate-500'}`}>
                          Step 0{item.step}
                        </span>
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>}
                      </div>
                      <h4 className="text-xs font-bold">{item.title}</h4>
                      <p className={`text-[10px] mt-1 font-mono uppercase ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>{item.actor}</p>
                    </div>
                  );
                })}
              </div>

              {/* DETAILED ACTIVE STEP EXPLANATION */}
              <div className="bg-white border border-slate-200 rounded-none p-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-3 text-center sm:text-left">
                  <span className="block text-xs font-mono text-slate-400">Currently Auditing:</span>
                  <span className="block text-2xl font-extrabold text-slate-900 font-display">Step 0{flowchartSteps[activeFlowNode].step}</span>
                  <span className="text-[10px] font-mono bg-slate-900 px-2.5 py-1 rounded-none text-white border border-slate-900 mt-2 inline-block">
                    {flowchartSteps[activeFlowNode].actor}
                  </span>
                </div>
                <div className="sm:col-span-9">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{flowchartSteps[activeFlowNode].title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {flowchartSteps[activeFlowNode].desc}
                  </p>
                </div>
              </div>

              {/* AUDIT NOTE ON THE PAYMENT SYSTEM */}
              <div className="p-4 bg-slate-100 border border-slate-200 rounded-none flex items-start gap-3">
                <Lock className="h-5 w-5 text-slate-900 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-slate-900">Auditor Notice regarding Payment Gateway Risk Profiles:</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    This operational design removes any consumer-focused high-risk exposure. We do not engage in retail card swiping, automated billing subscriptions, or direct-to-consumer digital delivery. Capital settlements are strictly high-value commercial wire operations handled by neutral, federally licensed U.S. escrow agents at property closing.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* CORPORATE GOVERNANCE & AUDITOR DESK */}
        <section id="auditor-desk" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Interactive Audit Desk & Checklist */}
              <div className="lg:col-span-7 space-y-8">
                
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 tracking-widest uppercase block">
                    Institutional Underwriting Verification
                  </span>
                  <h2 className="text-3xl font-extrabold font-display tracking-tight text-slate-900">
                    Audit Verification Desk
                  </h2>
                  <p className="text-sm text-slate-500">
                    Below is an interactive compliance control panel for payment underwriting specialists evaluating our corporate trade volume. Check each protocol to review the audit framework:
                  </p>
                </div>

                <div className="space-y-4">
                  {compliancePoints.map((point) => {
                    const isChecked = checkedAudits[point.id];
                    return (
                      <div 
                        key={point.id}
                        className={`p-5 rounded-none border transition-all ${isChecked ? 'bg-white border-slate-900' : 'bg-slate-100/50 border-slate-200'}`}
                      >
                        <div className="flex items-start gap-3">
                           <button 
                            onClick={() => toggleAudit(point.id)}
                            className={`h-5 w-5 rounded-none border flex items-center justify-center shrink-0 mt-0.5 transition-all ${isChecked ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-300 hover:border-slate-400'}`}
                            aria-label={`Toggle compliance point: ${point.title}`}
                          >
                            {isChecked && <Check className="h-3 w-3" />}
                          </button>
                          <div className="space-y-2 flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <h4 className="text-sm font-bold text-slate-900">{point.title}</h4>
                              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-none self-start ${isChecked ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                {isChecked ? 'SYSTEM ACTIVE' : 'SYSTEM DEACTIVATED'}
                              </span>
                            </div>
                            
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {point.description}
                            </p>

                            <div className="bg-slate-50 border border-slate-200 p-3 rounded-none text-[11px] text-slate-500">
                              <span className="font-bold text-slate-700 block uppercase tracking-widest text-[10px] mb-0.5">Auditor Compliance Objective:</span>
                              {point.auditorObjective}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Right Column: Corporate Governance Summary & Telephone Verification Panel */}
              <div id="compliance" className="lg:col-span-5 space-y-6">
                
                <div className="bg-white text-slate-900 rounded-none p-6 sm:p-8 border border-slate-200 space-y-6">
                  
                  <div className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-slate-900" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                      Corporate Governance Standards
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display tracking-tight text-slate-900">
                    International Cross-Border Compliant Desk
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Fully compliant with international cross-border B2B standards. For corporate inquiries or verification, contact our financial compliance desk.
                  </p>

                  <div className="border-t border-slate-200 pt-6 space-y-4">
                    
                    {/* Operating hours */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-none bg-slate-900 flex items-center justify-center shrink-0 text-white text-xs font-mono">
                        01
                      </div>
                      <div className="space-y-1">
                        <span className="block text-xs font-bold text-slate-900">Compliance Business Hours:</span>
                        <span className="block text-xs text-slate-600">9:00 AM – 6:00 PM IST (India Standard Time)</span>
                        <span className="block text-[11px] text-slate-400 font-mono">Simultaneous US coverage available daily</span>
                      </div>
                    </div>

                    {/* Operational Country Desk */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-none bg-slate-900 flex items-center justify-center shrink-0 text-white text-xs font-mono">
                        02
                      </div>
                      <div className="space-y-1">
                        <span className="block text-xs font-bold text-slate-900">India Operational Country Desk:</span>
                        <span className="block text-xs text-slate-600">Operational Hub, India</span>
                        <span className="block text-[11px] text-slate-400 font-mono">Specialized in US Residential Portfolios</span>
                      </div>
                    </div>

                    {/* Official Corporate Hotline */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-none bg-slate-900 flex items-center justify-center shrink-0 text-white text-xs font-mono">
                        03
                      </div>
                      <div className="space-y-1">
                        <span className="block text-xs font-bold text-slate-900">Corporate Compliance Hotline:</span>
                        <a href="tel:+91-7549546824" className="block text-base font-extrabold text-slate-900 hover:underline transition-colors">
                          +91-7549546824
                        </a>
                        <span className="block text-[10px] font-mono text-slate-400">International calls accepted. Verification desk enabled.</span>
                      </div>
                    </div>

                  </div>

                  {/* Certified disclaimer statement */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-none text-[11px] text-slate-500 leading-normal">
                    <span className="font-bold text-slate-700 uppercase tracking-widest block mb-1 text-[10px]">AUDIT DECLARATION</span>
                    "Real Estate Wholesalers does not engage in local real estate brokerage services, nor do we represent third parties in real property transactions. This business operates strictly as a principal wholesale buyer and seller of contract assignment equities under bilateral agreements."
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* PARTNER INQUIRY & COMPLIANCE VERIFICATION PORTAL */}
        <section id="partner-inquiry" className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-white border border-slate-950 rounded-none shadow-none overflow-hidden">
              <div className="bg-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-mono text-slate-450 uppercase tracking-widest block mb-1">Secure Channel</span>
                  <h3 className="text-2xl font-bold font-display text-white">Partner &amp; Compliance Inquiry Desk</h3>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs font-mono bg-slate-850 px-3 py-1.5 rounded-none border border-slate-750">
                  <Lock className="h-3.5 w-3.5 text-white" />
                  SSL Encrypted Validation
                </div>
              </div>

              {/* Conditional render of form state */}
              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 space-y-6 text-slate-700">
                  
                  <p className="text-xs text-slate-500 leading-relaxed">
                    If you are an institutional buyer, legal closing agent, or compliance underwriter seeking official corporate verification, please submit this verification request.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                        Full Officer / Principal Name *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        placeholder="e.g. Michael Thorne"
                        value={formState.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-none border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-all font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                        Corporate Entity / Institution *
                      </label>
                      <input 
                        type="text" 
                        name="corporateName"
                        required
                        placeholder="e.g. Apex Portfolio Holdings LLC"
                        value={formState.corporateName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-none border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                        U.S. Corporate Entity Type
                      </label>
                      <select 
                        name="entityType"
                        value={formState.entityType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-none border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-all font-mono bg-white"
                      >
                        <option value="US_LLC">U.S. Limited Liability Company (LLC)</option>
                        <option value="US_CORP">U.S. C-Corporation / S-Corporation</option>
                        <option value="US_LP">U.S. Limited Partnership (LP)</option>
                        <option value="COMPLIANCE_DEPT">Compliance &amp; Underwriting Desk</option>
                        <option value="OTHER">Other Institutional Entity</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                        Entity EIN / Compliance ID (Optional)
                      </label>
                      <input 
                        type="text" 
                        name="ein"
                        placeholder="XX-XXXXXXX"
                        value={formState.ein}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-none border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                        Contact Telephone Number *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-none border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-all font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                        Inquiry Nature
                      </label>
                      <select 
                        name="inquiryType"
                        value={formState.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-none border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-all font-mono bg-white"
                      >
                        <option value="compliance">Payment Gateway/Audit Compliance Review</option>
                        <option value="buyer">B2B Contract Assignment Acquisition</option>
                        <option value="title_escrow">Escrow &amp; Closing Attorney Coordination</option>
                        <option value="other">General Corporate Verification</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">
                      Inquiry &amp; Verification Details *
                    </label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      placeholder="Please specify your auditing parameters, transaction inquiry details, or coordination instructions."
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-none border border-slate-200 text-sm focus:outline-none focus:border-slate-900 transition-all font-mono"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-none active:scale-98"
                    >
                      Submit Compliance Verification Request
                      <ArrowRight className="h-4 w-4 text-white" />
                    </button>
                  </div>

                </form>
              ) : (
                <div className="p-10 text-center space-y-6 bg-white text-slate-900">
                  <div className="h-16 w-16 rounded-none bg-slate-50 text-slate-900 flex items-center justify-center mx-auto border border-slate-200">
                    <CheckCircle2 className="h-10 w-10 text-slate-900" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 uppercase tracking-wider">Inquiry Securely Logged</h4>
                    <p className="text-sm text-slate-500 max-w-md mx-auto">
                      Thank you. Your request was successfully routed to the Lead Financialist, <span className="font-semibold text-slate-900">Sabita Kumari</span>. A formal verification response is generated under operational ticket tracking.
                    </p>
                  </div>

                  {/* Summary of what they typed */}
                  <div className="bg-slate-50 border border-slate-200 rounded-none p-5 text-left text-xs max-w-lg mx-auto font-mono space-y-2">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1.5 mb-2">Verification Receipt Details</span>
                    <div><span className="text-slate-400">Principal:</span> <span className="text-slate-900 font-semibold">{formState.fullName}</span></div>
                    <div><span className="text-slate-400">Organization:</span> <span className="text-slate-900 font-semibold">{formState.corporateName}</span></div>
                    <div><span className="text-slate-400">Auditor Status:</span> <span className="text-slate-900 font-semibold">{formState.inquiryType.toUpperCase()}</span></div>
                    <div><span className="text-slate-400">Assigned Routing:</span> <span className="text-slate-900 font-semibold">Sabita Kumari compliance desk / +91-7549546824</span></div>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={resetForm}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-none transition-colors"
                    >
                      Submit New Request
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-100 text-slate-600 text-xs py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Info and logo */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3 text-slate-900">
                <Shield className="h-6 w-6 text-slate-900" />
                <span className="font-extrabold font-display tracking-tight text-sm uppercase">
                  Global Real Estate Wholesalers
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed text-[11px]">
                Providing strategic, off-market B2B residential real estate contract assignment services exclusively to professional investors and corporate entities inside the United States. Operating with strict cross-border regulatory compliance protocols.
              </p>
            </div>

            {/* Column 2: Empty Spacer */}
            <div className="hidden md:block md:col-span-2"></div>

            {/* Column 3: Contacts */}
            <div className="md:col-span-5 space-y-3">
              <span className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest">
                Corporate Compliance Contact Desk
              </span>
              <p className="text-slate-500 text-[11px]">
                To verify bank routing, escrows, legal titles, or corporate structures:
              </p>
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-slate-900"></span>
                  <span className="font-semibold text-slate-700">Compliance Direct Telephone:</span>
                </div>
                <a 
                  href="tel:+91-7549546824" 
                  className="block text-sm font-bold text-slate-900 hover:underline transition-colors font-mono pl-3.5"
                >
                  +91-7549546824
                </a>
              </div>
            </div>

          </div>

          {/* Legal / Underwriting Disclaimer Block */}
          <div className="pt-8 border-t border-slate-200 text-[11px] text-slate-500 leading-normal space-y-4">
            
            <p>
              <strong className="text-slate-700 uppercase tracking-widest text-[10px] block mb-1">Payment Gateway Underwriting &amp; Regulatory Compliance Statement:</strong>
              This application and the services declared herein are strictly B2B. Real Estate Wholesalers does not provide consumer services, retail payment gateways, or accept credit/debit card transactions from the general public. All commercial settlement values are executed via bilateral bank-to-bank SWIFT wire transmissions directly into licensed, state-regulated, independent U.S. Title and Escrow Companies.
            </p>

            <p>
              <strong className="text-slate-700 uppercase tracking-widest text-[10px] block mb-1">Legal Doctrine &amp; License Disclaimers:</strong>
              We are not licensed real estate brokers, real estate agents, or property lawyers in the United States or India. All transactions relate exclusively to the assignment of bilateral contract rights ("equitable interest") generated under valid U.S. common law doctrines (Doctrine of Equitable Conversion). In compliance with state laws, we do not market properties, but rather assign our direct contractual positions. No active real estate portfolios, current listings, or previous property deeds are hosted or listed herein in compliance with security guidelines.
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 pt-4">
              <span>&copy; {new Date().getFullYear()} Global Real Estate Wholesalers. All Rights Reserved.</span>
              <div className="flex gap-4">
                <span>ISO 27001 Compliant</span>
                <span>•</span>
                <span>AML Wire Verified</span>
                <span>•</span>
                <span>B2B Only</span>
              </div>
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}

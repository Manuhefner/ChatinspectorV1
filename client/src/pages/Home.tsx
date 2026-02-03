/**
 * Design Philosophy: NextGen AI Technology Brand
 * - Pure black (#0a0a0a) background with red (#EF4444) accents
 * - Inter font for all typography
 * - Bold, confident messaging
 * - Red "Gen" in "NextGen" branding
 * - Clean, professional, modern aesthetic
 */

import { Button } from "@/components/ui/button";
import { NextGenCard } from "../components/NextGenCard";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Search, 
  Filter, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Lock,
  Zap,
  FileCheck,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeAgent, setActiveAgent] = useState<number | null>(null);

  const agents = [
    {
      id: 1,
      name: "Data Validation",
      icon: Shield,
      description: "Validates data quality and completeness before analysis",
      metrics: ["18 tests", "100% coverage", "Quality scoring"],
      stage: "Stage 1"
    },
    {
      id: 2,
      name: "Pattern Detection",
      icon: Search,
      description: "Identifies measurable interaction patterns objectively",
      metrics: ["11 tests", "4 pattern types", "Confidence scores"],
      stage: "Stage 2"
    },
    {
      id: 3,
      name: "Anomaly Review",
      icon: Filter,
      description: "Filters false positives and validates genuine anomalies",
      metrics: ["22 tests", "Multi-criteria", "Persistence check"],
      stage: "Stage 3"
    },
    {
      id: 4,
      name: "Explanation",
      icon: Lightbulb,
      description: "Generates neutral, user-facing explanations",
      metrics: ["14 tests", "Observational only", "Visual refs"],
      stage: "Stage 4"
    },
    {
      id: 5,
      name: "Ethics & Safety",
      icon: CheckCircle2,
      description: "Reviews for ethical, legal, and emotional risk",
      metrics: ["19 tests", "8 risk types", "Auto-rejection"],
      stage: "Stage 5"
    }
  ];

  const features = [
    {
      icon: Lock,
      title: "100% Local Processing",
      description: "Zero external API calls, complete privacy"
    },
    {
      icon: FileCheck,
      title: "Forensic-Grade Quality",
      description: "Complete traceability, audit-ready reports"
    },
    {
      icon: Zap,
      title: "8-12ms Processing",
      description: "Per 100 messages, optimized performance"
    },
    {
      icon: Database,
      title: "Zero Dependencies",
      description: "Fully self-contained system"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0a0a0a] sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EF4444] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">
                  Next<span className="text-[#EF4444]">Gen</span> AI Technology
                </h1>
                <p className="text-xs text-gray-400">Chat Inspector Pipeline</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#architecture" className="text-gray-300 hover:text-white transition-colors">Architecture</a>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#specs" className="text-gray-300 hover:text-white transition-colors">Specs</a>
              </nav>
              <Badge className="bg-[#EF4444] text-white border-0 font-semibold">
                v3.0.0 FINAL
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EF4444]/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30 font-semibold px-4 py-1">
              Privacy-First • Forensic-Grade • Ethics-Approved
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Next<span className="text-[#EF4444]">Gen</span> AI Analysis Pipeline
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete five-agent system for privacy-first conversation analysis with comprehensive 
              ethical and safety safeguards. From data validation to ethics-approved insights.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold px-8">
                View Documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8">
                Download Package
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section id="architecture" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">Five-Agent Architecture</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Each agent performs a specialized role in the analysis pipeline, ensuring quality, 
              accuracy, and ethical compliance at every stage.
            </p>
          </div>

          {/* Pipeline Flow */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {agents.map((agent, index) => {
                const Icon = agent.icon;
                const isActive = activeAgent === agent.id;
                
                return (
                  <div key={agent.id} className="relative">
                    <Card 
                      className={`p-6 border-2 transition-all duration-300 cursor-pointer bg-[#0a0a0a] ${
                        isActive 
                          ? 'border-[#EF4444] shadow-lg shadow-[#EF4444]/20' 
                          : 'border-white/10 hover:border-[#EF4444]/50'
                      }`}
                      onMouseEnter={() => setActiveAgent(agent.id)}
                      onMouseLeave={() => setActiveAgent(null)}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all ${
                          isActive ? 'bg-[#EF4444]' : 'bg-[#EF4444]/20'
                        }`}>
                          <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-[#EF4444]'}`} />
                        </div>
                        <Badge variant="outline" className="mb-2 text-xs font-semibold border-[#EF4444]/30 text-[#EF4444]">
                          {agent.stage}
                        </Badge>
                        <h4 className="font-bold text-sm mb-2 text-white">{agent.name}</h4>
                        <p className="text-xs text-gray-400 mb-3">{agent.description}</p>
                        <div className="space-y-1">
                          {agent.metrics.map((metric, i) => (
                            <div key={i} className="text-xs text-gray-500">
                              • {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                    
                    {/* Connection Arrow */}
                    {index < agents.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-[#EF4444]/50" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pipeline Visualization Image */}
            <div className="rounded-lg overflow-hidden border-2 border-[#EF4444]/20 shadow-2xl">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/zQozChkFQmD7n6ftFtnGOB/sandbox/ip7o5vUz3zr54upWydvQ1p-img-2_1770150963000_na1fn_YWktcGlwZWxpbmUtdmlzdWFsaXphdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvelFvekNoa0ZRbUQ3bjZmdEZ0bkdPQi9zYW5kYm94L2lwN281dlV6M3pyNTR1cFd5ZHZRMXAtaW1nLTJfMTc3MDE1MDk2MzAwMF9uYTFmbl9ZV2t0Y0dsd1pXeHBibVV0ZG1semRXRnNhWHBoZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZMpTIQF4YApQplB1VasQ48jb-G6H4YoQ8IOVM0FhVewXgK8xmxtnTfMduOMIKVilftDoORfdywkDtTgg-U4awZdp4xJkIGF12FihRBBsK6MgX~V5f2roYdeG3rjeKcME2mjRz1S1A7I9R~7akO0OXsT0dovqNSZg7Hi4izoAikB9qKHr9~9d83rtcTEjsU-OWNb7H1-vQ33Fdm5MiJd2xHGDT7Abj3NPbKprYaIzljaM2pf~XTbD3psC0JfIIsKCQjqy~6GVLjAFkQVJhC0yPGC~Bgg9OZh2wN0fRsJhzpLjQco9cv6Cp6HL5eQsHV3lTGBmixAST3dyjwwxZDC4-w__"
                alt="NextGen AI Pipeline Visualization"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">Production-Ready System</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Built for legal, research, compliance, and personal data analysis with complete 
              privacy and ethical safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 border border-white/10 hover:border-[#EF4444]/50 transition-all bg-[#1a1a1a]">
                  <div className="w-12 h-12 rounded-lg bg-[#EF4444]/20 border border-[#EF4444]/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#EF4444]" />
                  </div>
                  <h4 className="font-bold mb-2 text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section id="specs" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 text-white">Technical Specifications</h3>
              <p className="text-gray-300 text-lg">
                Production-ready performance with comprehensive testing and zero dependencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-[#0a0a0a] border border-white/10">
                <h4 className="text-2xl font-bold mb-6 text-white">Performance Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Test Coverage</span>
                    <span className="font-bold text-[#EF4444]">84/84 (100%)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="font-bold text-[#EF4444]">8-12ms/100 msgs</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Package Size</span>
                    <span className="font-bold text-[#EF4444]">39 KB compressed</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Dependencies</span>
                    <span className="font-bold text-[#EF4444]">Zero</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Browser Support</span>
                    <span className="font-bold text-[#EF4444]">ES6+</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-[#0a0a0a] border border-white/10">
                <h4 className="text-2xl font-bold mb-6 text-white">Ethics & Safety</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Risk Categories</span>
                    <span className="font-bold text-[#EF4444]">8 types</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Critical Risks</span>
                    <span className="font-bold text-[#EF4444]">Auto-reject</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Language Check</span>
                    <span className="font-bold text-[#EF4444]">Neutral only</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Disclaimers</span>
                    <span className="font-bold text-[#EF4444]">Required</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Privacy</span>
                    <span className="font-bold text-[#EF4444]">100% local</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-4 text-white">
              Ready to Explore?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Discover the complete portfolio of projects and see how AI can transform your business.
            </p>
            <Button size="lg" className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold px-8 text-lg">
              Browse All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EF4444] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">
                  Next<span className="text-[#EF4444]">Gen</span> AI Technology
                </p>
                <p className="text-xs text-gray-400">Chat Inspector Pipeline</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="font-semibold">v3.0.0 FINAL</span>
              <span>•</span>
              <span>Production Ready</span>
              <span>•</span>
              <span className="text-[#EF4444]">February 2026</span>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2026 NextGen AI Technology. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

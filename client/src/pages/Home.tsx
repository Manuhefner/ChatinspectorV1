/**
 * Design Philosophy: Technical Blueprint Aesthetic
 * - Deep navy blue background (#0A1628) with cyan accents (#00D9FF)
 * - Space Mono for technical headers, Inter for body text
 * - Blueprint-style grid patterns and technical annotations
 * - Animated data flow visualization
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  FileCheck
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeAgent, setActiveAgent] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated background grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrame: number;
    let offset = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Grid settings
      const gridSize = 40;
      const dotSize = 1.5;
      ctx.fillStyle = "rgba(0, 217, 255, 0.15)";

      // Draw animated dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const opacity = 0.1 + Math.sin((x + y + offset) * 0.01) * 0.05;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      offset += 0.5;
      animationFrame = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const agents = [
    {
      id: 1,
      name: "Data Validation",
      icon: Shield,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      description: "Validates data quality and completeness before analysis",
      metrics: ["18 tests", "100% coverage", "Quality scoring"],
      stage: "Stage 1"
    },
    {
      id: 2,
      name: "Pattern Detection",
      icon: Search,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      description: "Identifies measurable interaction patterns objectively",
      metrics: ["11 tests", "4 pattern types", "Confidence scores"],
      stage: "Stage 2"
    },
    {
      id: 3,
      name: "Anomaly Review",
      icon: Filter,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      description: "Filters false positives and validates genuine anomalies",
      metrics: ["22 tests", "Multi-criteria", "Persistence check"],
      stage: "Stage 3"
    },
    {
      id: 4,
      name: "Explanation",
      icon: Lightbulb,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      description: "Generates neutral, user-facing explanations",
      metrics: ["14 tests", "Observational only", "Visual refs"],
      stage: "Stage 4"
    },
    {
      id: 5,
      name: "Ethics & Safety",
      icon: CheckCircle2,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-cyan-500/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-cyan-400">Chat Inspector</h1>
                  <p className="text-xs text-muted-foreground font-mono">NextGen AI Technology</p>
                </div>
              </div>
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 font-mono">
                v3.0.0 FINAL
              </Badge>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/zQozChkFQmD7n6ftFtnGOB/sandbox/ip7o5vUz3zr54upWydvQ1p-img-1_1770150968000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvelFvekNoa0ZRbUQ3bjZmdEZ0bkdPQi9zYW5kYm94L2lwN281dlV6M3pyNTR1cFd5ZHZRMXAtaW1nLTFfMTc3MDE1MDk2ODAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ElF8CCGvUtzBh4ZAj-2pvbxqR0dVIOrEQ47ByejeSav2w63-NsmiWwpLcM0TMQyay5cEQnPigAp-88fMAYOvp45GHn1ODO32kezK2oxBYqJbcQGzzWTLWyyjjKA~dmO~QMNtSTw-AHC5r1qABk15NHtwHSu7KN4WbAryQRV1r1V6wVio-KEr0dTlaQdjsJ27TnoUs9lY0v4h3sslUpHMcwAeN3DKIduwOb~UK--5nVb~yBjT7MSOSt7ENcPVgL-wzRcefIRt2sE1Dd92patWEpmMykqe74nc7GQPIQ2hhNbfK1dlAFL9WUWO0gI8w2GVybz0bSMHwuUqnWdSeU5Rzw__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 font-mono">
                Privacy-First • Forensic-Grade • Ethics-Approved
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                NextGen AI Analysis Pipeline
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete five-agent system for privacy-first conversation analysis with comprehensive 
                ethical and safety safeguards. From data validation to ethics-approved insights.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-background font-mono">
                  View Documentation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-mono">
                  Download Package
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Visualization */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Five-Agent Architecture</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each agent performs a specialized role in the analysis pipeline, ensuring quality, 
                accuracy, and ethical compliance at every stage.
              </p>
            </div>

            {/* Pipeline Flow */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
                {agents.map((agent, index) => {
                  const Icon = agent.icon;
                  const isActive = activeAgent === agent.id;
                  
                  return (
                    <div key={agent.id} className="relative">
                      <Card 
                        className={`p-6 border-2 transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? `${agent.borderColor} shadow-lg shadow-${agent.color.replace('text-', '')}/20` 
                            : 'border-border hover:border-cyan-500/30'
                        }`}
                        onMouseEnter={() => setActiveAgent(agent.id)}
                        onMouseLeave={() => setActiveAgent(null)}
                      >
                        <div className="text-center">
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${agent.bgColor} border ${agent.borderColor} flex items-center justify-center`}>
                            <Icon className={`w-8 h-8 ${agent.color}`} />
                          </div>
                          <Badge variant="outline" className="mb-2 text-xs font-mono border-cyan-500/30">
                            {agent.stage}
                          </Badge>
                          <h4 className="font-bold text-sm mb-2">{agent.name}</h4>
                          <p className="text-xs text-muted-foreground mb-3">{agent.description}</p>
                          <div className="space-y-1">
                            {agent.metrics.map((metric, i) => (
                              <div key={i} className="text-xs text-cyan-400 font-mono">
                                • {metric}
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                      
                      {/* Connection Arrow */}
                      {index < agents.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-cyan-500/50" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Pipeline Visualization Image */}
              <div className="rounded-lg overflow-hidden border-2 border-cyan-500/20 shadow-2xl">
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Production-Ready System</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for legal, research, compliance, and personal data analysis with complete 
                privacy and ethical safeguards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Test Coverage</span>
                      <span className="font-mono text-cyan-400">84/84 (100%)</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Processing Speed</span>
                      <span className="font-mono text-cyan-400">8-12ms/100 msgs</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Package Size</span>
                      <span className="font-mono text-cyan-400">39 KB compressed</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Dependencies</span>
                      <span className="font-mono text-cyan-400">Zero</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Browser Support</span>
                      <span className="font-mono text-cyan-400">ES6+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Ethics & Safety</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Risk Categories</span>
                      <span className="font-mono text-amber-400">8 types</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Critical Risks</span>
                      <span className="font-mono text-amber-400">Auto-reject</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Language Check</span>
                      <span className="font-mono text-amber-400">Neutral only</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Disclaimers</span>
                      <span className="font-mono text-amber-400">Required</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-muted-foreground">Privacy</span>
                      <span className="font-mono text-amber-400">100% local</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-cyan-500/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="font-bold text-sm">Chat Inspector</p>
                  <p className="text-xs text-muted-foreground font-mono">NextGen AI Technology</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="font-mono">v3.0.0 FINAL</span>
                <span>•</span>
                <span>Production Ready</span>
                <span>•</span>
                <span className="text-cyan-400">February 2026</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

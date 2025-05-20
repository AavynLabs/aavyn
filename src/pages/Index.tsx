
import { motion } from "framer-motion";
import { ArrowRight, Command, Shield, Globe, Banknote, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Next-gen stablecoin neo-bank
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="The Future of Dollars —" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="Compliant, Yield-Optimised, Yours." />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Onboard in 60 seconds, earn <span className="text-white font-bold">6-12% APY</span> from tokenised T-Bills & SynthUSD, and spend worldwide with a single smart wallet.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient">
              Start Earning
            </Button>
            <Button size="lg" variant="link" className="text-white">
              View Dashboard <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            <span className="flex flex-wrap gap-x-6 gap-y-2 items-center">
              <Badge variant="outline" className="bg-white/5">MiCAR-ready</Badge>
              <Badge variant="outline" className="bg-white/5">ZK Proof-of-Reserve</Badge>
              <Badge variant="outline" className="bg-white/5">150% Collateralised</Badge>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="StableBank 2.0 Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Why StableBank 2.0 Section */}
      <section className="container px-4 py-24 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-6">
            Advanced Banking. <span className="text-gradient font-medium">DeFi Performance.</span> Regulated Cover.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass glass-hover p-6 rounded-xl"
          >
            <Shield className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Regulated & Transparent</h3>
            <p className="text-muted-foreground">
              MiCAR CASP licence pathway, dual-entity CeDeFi + DAO, daily proof-of-reserve SNARKs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass glass-hover p-6 rounded-xl"
          >
            <Globe className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Borderless Access</h3>
            <p className="text-muted-foreground">
              Cash-in/out at 15k+ agents, Visa card, passkey login, gasless transactions on Base + zkSync.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass glass-hover p-6 rounded-xl"
          >
            <Banknote className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-medium mb-2">Smarter Yield Engine</h3>
            <p className="text-muted-foreground">
              AI router rebalances USDC, PYUSD, BUIDL and delta-neutral SynthUSD for 6-12% APY.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Built for Real People Section */}
      <section className="container px-4 py-24 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h3 className="text-4xl font-normal mb-2">
            <span className="text-gradient">Three personas</span>, one wallet.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass glass-hover p-6 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🇳🇬</span>
              <h4 className="text-xl font-medium">Remittance Rani</h4>
            </div>
            <p className="text-muted-foreground">
              Send ₦ → USD in seconds, beat 8% bank fees, and cash-out at Paga agents.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass glass-hover p-6 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🇧🇷</span>
              <h4 className="text-xl font-medium">Freelancer Felipe</h4>
            </div>
            <p className="text-muted-foreground">
              Convert USDC pay-checks, auto-stream 20% to ARS, 80% to SynthUSD earn.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass glass-hover p-6 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🇸🇬</span>
              <h4 className="text-xl font-medium">Yield Maxi Mei</h4>
            </div>
            <p className="text-muted-foreground">
              Park idle funds, track live peg & VaR, withdraw anytime — no lock-up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPI Card Section */}
      <section className="container px-4 py-12 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <Card className="glass glass-hover p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-medium mb-6 text-center">KPI Snapshot</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Current Peg</span>
                <span className="font-medium">$0.9993 <span className="text-green-400">(+0.01%)</span></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Collateral Ratio</span>
                <span className="font-medium">152%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Deposits</span>
                <span className="font-medium">$47,362,110</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Proof-of-Reserve</span>
                <span className="font-medium flex items-center">
                  Verified <CheckCircle className="ml-1 w-4 h-4 text-green-400" /> 
                  <span className="text-xs ml-2 text-muted-foreground">(2 min ago)</span>
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Features Grid */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* Roadmap Section */}
      <section className="container px-4 py-24 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-medium mb-10 text-center">Roadmap</h3>
          
          <div className="relative">
            {/* Line through the middle */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-white/20"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="relative pt-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                <p className="font-medium text-center">Q3 25</p>
                <p className="text-sm text-center text-muted-foreground">Closed beta NGN corridor</p>
              </div>
              
              <div className="relative pt-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                <p className="font-medium text-center">Q4 25</p>
                <p className="text-sm text-center text-muted-foreground">Mainnet + ZK Dashboard</p>
              </div>
              
              <div className="relative pt-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                <p className="font-medium text-center">Q1 26</p>
                <p className="text-sm text-center text-muted-foreground">SynthUSD opt-in ($50M cap)</p>
              </div>
              
              <div className="relative pt-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                <p className="font-medium text-center">Q2 26</p>
                <p className="text-sm text-center text-muted-foreground">Global card + Public-Goods DAO</p>
              </div>
              
              <div className="relative pt-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                <p className="font-medium text-center">Q3 26</p>
                <p className="text-sm text-center text-muted-foreground">Cross-chain rollup (Solana SVM)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Own Dollars That Work for You.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50k+ early users turning idle cash into impact-driven yield.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="button-gradient">
              Join Waitlist
            </Button>
            <Button size="lg" variant="ghost" className="text-white">
              Launch Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;

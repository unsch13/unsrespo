"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Shield, Users, Star, FlaskConical, Phone, Mail, MapPin } from "lucide-react"

export default function MediCoreLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const innovationRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)

  useEffect(() => {
    console.log("[v0] MediCore Solutions landing page loaded with enhanced 3D animations")
    console.log("[v0] Every-time scroll animations and 3D effects initialized")

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const elementId = entry.target.id || entry.target.className

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          console.log(`[v0] Section animated in (every time): ${elementId}`)
        } else {
          entry.target.classList.remove("animate-in")
          console.log(`[v0] Section animated out: ${elementId}`)
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = [
      heroRef.current,
      statsRef.current,
      productsRef.current,
      testimonialsRef.current,
      innovationRef.current,
      ctaRef.current,
      faqRef.current,
    ]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    console.log(`[v0] Contact form field updated: ${name}`)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .animate-in {
          animation: slideInUp3D 1.2s ease-out forwards;
        }
        
        .animate-in-delay-1 {
          animation: slideInUp3D 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-in-delay-2 {
          animation: slideInUp3D 1.2s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-in-delay-3 {
          animation: slideInUp3D 1.2s ease-out 0.9s forwards;
          opacity: 0;
        }
        
        @keyframes slideInUp3D {
          from {
            opacity: 0;
            transform: translateY(80px) rotateX(25deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }
        
        .card-hover {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          perspective: 1200px;
        }
        
        .card-hover:hover {
          transform: translateY(-20px) rotateX(8deg) rotateY(-3deg) scale(1.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1);
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card-3d:hover {
          transform: rotateY(8deg) rotateX(8deg) translateZ(30px);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0d9488, #06b6d4, #8b5cf6, #ec4899, #f59e0b);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 50% 100%; }
          75% { background-position: 100% 0%; }
        }
        
        .floating-animation {
          animation: float3D 12s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        
        @keyframes float3D {
          0%, 100% { 
            transform: translateY(0px) rotateY(0deg) rotateX(0deg) rotateZ(0deg); 
          }
          20% { 
            transform: translateY(-20px) rotateY(10deg) rotateX(5deg) rotateZ(2deg); 
          }
          40% { 
            transform: translateY(-35px) rotateY(-5deg) rotateX(-3deg) rotateZ(-1deg); 
          }
          60% { 
            transform: translateY(-25px) rotateY(8deg) rotateX(4deg) rotateZ(3deg); 
          }
          80% { 
            transform: translateY(-15px) rotateY(-10deg) rotateX(-2deg) rotateZ(-2deg); 
          }
        }
        
        .rotating-3d {
          animation: rotate3D 25s linear infinite;
          transform-style: preserve-3d;
        }
        
        @keyframes rotate3D {
          from { transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg); }
          25% { transform: rotateY(90deg) rotateX(10deg) rotateZ(5deg); }
          50% { transform: rotateY(180deg) rotateX(-5deg) rotateZ(-3deg); }
          75% { transform: rotateY(270deg) rotateX(8deg) rotateZ(4deg); }
          to { transform: rotateY(360deg) rotateX(0deg) rotateZ(0deg); }
        }
        
        .pulse-3d {
          animation: pulse3D 4s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        
        @keyframes pulse3D {
          0%, 100% { 
            transform: scale(1) rotateZ(0deg) translateZ(0px);
            box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.4);
          }
          50% { 
            transform: scale(1.08) rotateZ(3deg) translateZ(10px);
            box-shadow: 0 0 0 25px rgba(13, 148, 136, 0);
          }
        }
        
        .tilt-3d {
          transform-style: preserve-3d;
          transition: all 0.6s ease;
        }
        
        .tilt-3d:hover {
          transform: perspective(1200px) rotateX(12deg) rotateY(12deg) translateZ(15px);
        }
        
        .parallax-3d {
          transform-style: preserve-3d;
          animation: parallax3D 18s ease-in-out infinite;
        }
        
        @keyframes parallax3D {
          0%, 100% { transform: translateZ(0px) rotateY(0deg) rotateX(0deg); }
          33% { transform: translateZ(40px) rotateY(8deg) rotateX(3deg); }
          66% { transform: translateZ(20px) rotateY(-5deg) rotateX(-2deg); }
        }
        
        .stats-3d {
          perspective: 1200px;
          transform-style: preserve-3d;
        }
        
        .stats-3d:hover {
          animation: statsFlip 1.5s ease-in-out;
        }
        
        @keyframes statsFlip {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(90deg) rotateX(10deg) scale(1.1); }
          50% { transform: rotateY(180deg) rotateX(0deg) scale(1.15); }
          75% { transform: rotateY(270deg) rotateX(-10deg) scale(1.1); }
          100% { transform: rotateY(360deg) rotateX(0deg); }
        }
        
        .hero-3d-bg {
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.15) 0%,
            rgba(59, 130, 246, 0.15) 20%,
            rgba(16, 185, 129, 0.15) 40%,
            rgba(236, 72, 153, 0.15) 60%,
            rgba(245, 158, 11, 0.15) 80%,
            rgba(139, 92, 246, 0.15) 100%);
          background-size: 400% 400%;
          animation: backgroundShift 15s ease-in-out infinite;
        }
        
        @keyframes backgroundShift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 50% 100%; }
          75% { background-position: 100% 0%; }
        }
        
        /* Enhanced 3D image animations */
        .image-3d-float {
          animation: image3DFloat 15s ease-in-out infinite;
          transform-style: preserve-3d;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
        }
        
        @keyframes image3DFloat {
          0%, 100% { 
            transform: translateY(0px) rotateY(0deg) rotateX(0deg) scale(1);
          }
          25% { 
            transform: translateY(-30px) rotateY(15deg) rotateX(8deg) scale(1.05);
          }
          50% { 
            transform: translateY(-50px) rotateY(0deg) rotateX(-5deg) scale(1.1);
          }
          75% { 
            transform: translateY(-30px) rotateY(-15deg) rotateX(8deg) scale(1.05);
          }
        }
        
        .image-3d-spin {
          animation: image3DSpin 20s linear infinite;
          transform-style: preserve-3d;
          filter: drop-shadow(0 15px 30px rgba(0,0,0,0.25));
        }
        
        @keyframes image3DSpin {
          from { 
            transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1);
          }
          25% { 
            transform: rotateY(90deg) rotateX(10deg) rotateZ(5deg) scale(1.1);
          }
          50% { 
            transform: rotateY(180deg) rotateX(-5deg) rotateZ(-3deg) scale(1.05);
          }
          75% { 
            transform: rotateY(270deg) rotateX(8deg) rotateZ(4deg) scale(1.08);
          }
          to { 
            transform: rotateY(360deg) rotateX(0deg) rotateZ(0deg) scale(1);
          }
        }
        
        .section-3d-entrance {
          animation: section3DEntrance 1.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes section3DEntrance {
          from {
            opacity: 0;
            transform: translateY(100px) rotateX(30deg) scale(0.7);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }
        
        .custom-badge {
          background: linear-gradient(135deg, #0d9488, #06b6d4) !important;
          color: #ffffff !important;
          padding: 0.5rem 1rem !important;
          border-radius: 9999px !important;
          font-size: 0.875rem !important;
          font-weight: 500 !important;
          display: inline-flex !important;
          align-items: center !important;
          transform-style: preserve-3d !important;
          transition: all 0.4s ease !important;
          box-shadow: 0 6px 20px rgba(13, 148, 136, 0.4) !important;
        }
        
        .custom-badge:hover {
          transform: translateY(-5px) rotateX(8deg) scale(1.05) !important;
          box-shadow: 0 12px 35px rgba(13, 148, 136, 0.5) !important;
        }
        
        .custom-button {
          background-color: #0d9488 !important;
          color: #ffffff !important;
          padding: 0.75rem 1.5rem !important;
          border-radius: 0.375rem !important;
          font-size: 1.125rem !important;
          font-weight: 600 !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          transform-style: preserve-3d !important;
          box-shadow: 0 8px 25px rgba(13, 148, 136, 0.4) !important;
        }
        
        .custom-button:hover {
          background-color: #0f766e !important;
          color: #ffffff !important;
          transform: translateY(-8px) rotateX(8deg) scale(1.08) !important;
          box-shadow: 0 20px 45px rgba(13, 148, 136, 0.5) !important;
        }
      `}</style>

      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50 tilt-3d">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MediCore Solutions</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-600 hover:text-teal-600 transition-colors">
              Products
            </a>
            <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">
              Contact
            </a>
            <a href="#login" className="text-gray-600 hover:text-teal-600 transition-colors">
              Login
            </a>
          </nav>
        </div>
      </header>

      <section ref={heroRef} id="hero-section" className="relative py-20 hero-3d-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-teal-400/10 parallax-3d"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 section-3d-entrance">
              <div
                className="mb-4 pulse-3d inline-flex items-center"
                style={{
                  backgroundColor: "#0d9488",
                  color: "#ffffff",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  boxShadow: "0 6px 20px rgba(13, 148, 136, 0.4)",
                }}
              >
                FDA Approved & HIPAA Compliant
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Advanced Healthcare Solutions for Better <span className="gradient-text">Patient Outcomes</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 text-pretty">
                Empowering healthcare providers with cutting-edge pharmaceutical innovations and digital health
                solutions. Trusted by over 10,000 healthcare professionals worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="custom-button">Request Demo</button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 bg-transparent font-semibold tilt-3d"
                >
                  View Products
                </Button>
              </div>
            </div>

            <div className="relative opacity-0 animate-in-delay-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-200 to-teal-200 rounded-3xl opacity-30 rotating-3d"></div>
              <div className="relative p-8 flex items-center justify-center">
                <img
                  src="/3d-medical-dna-helix-with-floating-molecules-and-m.jpg"
                  alt="3D Medical Innovation"
                  className="w-full h-80 object-contain image-3d-float"
                />
              </div>
            </div>
          </div>

          <div ref={statsRef} id="stats-section" className="grid md:grid-cols-3 gap-8 mt-16 opacity-0">
            <div className="text-center p-6 bg-gradient-to-br from-white to-teal-50 rounded-xl shadow-lg card-hover stats-3d border border-teal-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Healthcare Providers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg card-hover stats-3d border border-blue-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50M+
              </div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg card-hover stats-3d border border-purple-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      <section ref={productsRef} id="products" className="py-20 bg-gradient-to-b from-white to-gray-50 opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Comprehensive <span className="gradient-text">Healthcare Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              From pharmaceutical research to patient management systems, we provide end-to-end solutions for modern
              healthcare.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="relative">
              <img
                src="/3d-laboratory-microscope-with-floating-dna-strands.jpg"
                alt="3D Laboratory Equipment"
                className="w-32 h-32 object-contain image-3d-spin"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg card-hover card-3d bg-gradient-to-br from-white to-teal-50 animate-in-delay-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg pulse-3d">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Pharmaceutical Research</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced drug discovery and development platforms with AI-powered molecular analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">FDA-compliant research protocols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Real-time data analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Collaborative research tools</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent tilt-3d"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover card-3d bg-gradient-to-br from-white to-blue-50 animate-in-delay-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg pulse-3d">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Clinical Management</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive clinical trial management with integrated patient monitoring systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">HIPAA-compliant data storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Integrated billing systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Telemedicine capabilities</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent tilt-3d"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover card-3d bg-gradient-to-br from-white to-purple-50 animate-in-delay-3">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg pulse-3d">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Clinical Trials</CardTitle>
                <CardDescription className="text-gray-600">
                  End-to-end clinical trial management with regulatory compliance and patient safety.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">GCP-compliant protocols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Patient recruitment tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Regulatory reporting</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent tilt-3d"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        ref={testimonialsRef}
        id="testimonials"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 opacity-0"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="gradient-text">Healthcare Leaders</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              See what healthcare professionals are saying about our solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-white to-teal-50 border-0 shadow-lg card-hover card-3d animate-in-delay-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-pretty">
                  "The pharmaceutical platform has revolutionized how we conduct clinical trials and improved our
                  research efficiency by 300%."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Sarah Rodriguez</p>
                  <p className="text-sm text-gray-500">Chief Medical Officer, Johns Hopkins</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg card-hover card-3d animate-in-delay-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-pretty">
                  "Outstanding clinical management system that has streamlined our operations and improved patient
                  outcomes significantly."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-500">Director of Operations, Mayo Clinic</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-purple-50 border-0 shadow-lg card-hover card-3d animate-in-delay-3">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-pretty">
                  "Innovative solutions that have transformed our clinical trials and regulatory compliance processes."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Dr. Emily Johnson</p>
                  <p className="text-sm text-gray-500">Research Director, Cleveland Clinic</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section ref={innovationRef} className="py-20 bg-gradient-to-b from-white to-teal-50 opacity-0">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading <span className="text-teal-600">Healthcare Innovation</span> for Over 15 Years
              </h2>
              <p className="text-gray-600 mb-8 text-pretty">
                Founded by a team of medical professionals and technology experts, MediCore Solutions has been at the
                forefront of healthcare innovation, delivering solutions that bridge the gap between cutting-edge
                technology and practical healthcare delivery.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">200+</div>
                  <div className="text-sm text-gray-600">Research Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700 text-white">View Case Studies</Button>
            </div>

            <div className="relative">
              <img
                src="/modern-medical-laboratory-with-scientists-working.jpg"
                alt="Medical laboratory with researchers"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust MediCore Solutions for their critical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Request Demo Card */}
            <Card className="bg-white text-gray-900 border-0 shadow-2xl card-hover card-3d">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">Request a Demo</CardTitle>
                <CardDescription className="text-gray-600">
                  See our solutions in action with a personalized demonstration.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 tilt-3d"
                  >
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Get Started Today Card */}
            <Card className="bg-white text-gray-900 border-0 shadow-2xl card-hover card-3d">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Get Started <span className="text-teal-600">Today</span>
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Contact our team for immediate assistance and consultation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg tilt-3d">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-600">Call us directly</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg tilt-3d">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">contact@medicore.com</p>
                    <p className="text-sm text-gray-600">Email support</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg tilt-3d">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Boston, MA | San Francisco, CA</p>
                    <p className="text-sm text-gray-600">Our locations</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold py-3 tilt-3d">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              Get answers to common questions about our healthcare solutions.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="faq-item bg-gradient-to-r from-white to-teal-50 rounded-lg px-6 border-0 shadow-md card-hover tilt-3d"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  How do you ensure regulatory compliance across different regions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our solutions are built with global regulatory compliance in mind, including FDA, EMA, HIPAA, GDPR,
                  and other regional requirements. We maintain continuous monitoring and updates to ensure ongoing
                  compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="faq-item bg-gradient-to-r from-white to-blue-50 rounded-lg px-6 border-0 shadow-md card-hover tilt-3d"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Can your systems integrate with existing healthcare infrastructure?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, our platforms are designed with interoperability as a core principle. We support integration with
                  major EHR systems, LIMS, and other healthcare infrastructure through standard APIs and HL7 FHIR
                  protocols.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="faq-item bg-gradient-to-r from-white to-purple-50 rounded-lg px-6 border-0 shadow-md card-hover tilt-3d"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  What security measures protect patient data?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We implement enterprise-grade security including end-to-end encryption, multi-factor authentication,
                  role-based access controls, and continuous security monitoring. All systems are HIPAA compliant with
                  regular third-party security audits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="faq-item bg-gradient-to-r from-white to-indigo-50 rounded-lg px-6 border-0 shadow-md card-hover tilt-3d"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  What kind of support and training do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We provide comprehensive onboarding, training programs, dedicated customer success managers, and 24/7
                  technical support. Our team includes healthcare professionals who understand your operational needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="faq-item bg-gradient-to-r from-white to-emerald-50 rounded-lg px-6 border-0 shadow-md card-hover tilt-3d"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  How is pricing structured for healthcare organizations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our pricing is flexible and scales with your organization size and needs. We offer subscription-based
                  models, enterprise licenses, and custom packages for large healthcare systems. Contact us for a
                  personalized quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="faq-item bg-gradient-to-r from-white to-cyan-50 rounded-lg px-6 border-0 shadow-md card-hover tilt-3d"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  How do you handle clinical validation and evidence generation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our clinical validation process follows ICH-GCP guidelines with rigorous testing protocols. We provide
                  comprehensive documentation, clinical evidence packages, and support for regulatory submissions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="faq-item bg-gradient-to-r from-white to-pink-50 rounded-lg px-6 border-0 shadow-md card-hover tilt-3d"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  What are your system uptime and disaster recovery plans?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We guarantee 99.9% uptime with redundant systems, automated failover, and comprehensive disaster
                  recovery plans. Our infrastructure is hosted on enterprise-grade cloud platforms with multiple
                  geographic backups.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-rose-100 to-pink-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-lg font-bold text-gray-900">MediCore Solutions</span>
              </div>
              <p className="text-gray-600 text-sm text-pretty mb-4">
                Leading provider of innovative pharmaceutical research and clinical management solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Clinical Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Clinical Trials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Analytics Suite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Compliance Tools
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal & Compliance</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    HIPAA Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    GDPR Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-rose-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p className="mb-2">
              This website and its contents are for informational purposes only. Always consult with qualified
              healthcare professionals before making any medical decisions. Individual results may vary.
            </p>
            <p>
              © 2024 MediCore Solutions. All rights reserved. | FDA Approved | HIPAA Compliant | ISO 13485 Certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

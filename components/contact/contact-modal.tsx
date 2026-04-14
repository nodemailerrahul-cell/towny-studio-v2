"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Send,
  CheckCircle2,
  Home,
  Building2,
  Palette,
  MessageSquare,
} from "lucide-react";

export type ContactModalProps = {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const serviceOptions = [
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "interior", label: "Interior", icon: Palette },
  { id: "consultation", label: "Consultation", icon: MessageSquare },
];

export function ContactModal({
  children,
  open,
  onOpenChange,
}: ContactModalProps) {
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      service: selectedService,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      form.reset();
      setSelectedService("");
      setTimeout(() => {
        setIsSubmitted(false);
        onOpenChange?.(false);
      }, 2000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[600px] border-white/[0.07] bg-[#09090b] text-white shadow-2xl p-0 overflow-y-auto max-h-[90dvh] rounded-2xl">
        <div className="p-6 sm:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-serif font-bold text-white">
              Start a Conversation
            </DialogTitle>
            <DialogDescription className="text-white/50 text-base">
              Share your vision, and we&apos;ll craft a design that speaks your
              language.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service selection chips */}
            <div>
              <label className="block text-sm font-medium text-white/60 mb-3">
                What are you looking for?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const active = selectedService === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedService(opt.id)}
                      className={`group flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all duration-300 ${
                        active
                          ? "border-primary bg-primary/10 text-white"
                          : "border-white/[0.07] bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white/80"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          active
                            ? "text-primary"
                            : "text-white/40 group-hover:text-white/60"
                        }`}
                      />
                      <span className="text-xs font-medium">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  id="modal-name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="bg-white/[0.03] border-white/[0.07] rounded-xl h-12 text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <div>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="bg-white/[0.03] border-white/[0.07] rounded-xl h-12 text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            {/* Phone + Budget row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white/[0.03] border-white/[0.07] rounded-xl h-12 text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <div>
                <select
                  id="modal-budget"
                  name="budget"
                  className="w-full h-12 px-4 text-sm bg-zinc-950 border border-white/[0.07] rounded-xl text-white/60 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 hover:bg-white/[0.05] transition-all appearance-none"
                >
                  <option value="" className="bg-zinc-900">
                    Budget Range
                  </option>
                  <option value="25-50" className="bg-zinc-900">
                    ₹25L – ₹50L
                  </option>
                  <option value="50-1cr" className="bg-zinc-900">
                    ₹50L – ₹1Cr
                  </option>
                  <option value="1cr-2cr" className="bg-zinc-900">
                    ₹1Cr – ₹2Cr
                  </option>
                  <option value="2cr+" className="bg-zinc-900">
                    ₹2Cr+
                  </option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <Textarea
                id="modal-message"
                name="message"
                placeholder="Tell us about your project..."
                rows={3}
                required
                className="bg-white/[0.03] border-white/[0.07] rounded-xl text-white placeholder:text-white/25 focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            {/* Submit button */}
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-xl h-12 text-base font-semibold gap-2 group"
              disabled={isSubmitted || isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

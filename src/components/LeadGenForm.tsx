import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send, Loader2, RefreshCw, CheckCircle2 } from "lucide-react";

function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const c = Math.floor(Math.random() * 9) + 1;
  return { code: `${a} ${b} ${c}`, answer: `${a}${b}${c}` };
}

const LeadGenForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    needsSeo: "",
    website: "",
  });
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput !== captcha.answer) {
      setError("Captcha code is incorrect. Please try again.");
      refreshCaptcha();
      return;
    }
    setLoading(true);
    setError("");
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      const res = await fetch(`${supabaseUrl}/functions/v1/send-lead-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
        },
        body: JSON.stringify({ ...formData, pageUrl: window.location.href }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Send failed");
      setSubmitted(true);
      setFormData({ name: "", email: "", whatsapp: "", needsSeo: "", website: "" });
      setCaptchaInput("");
      refreshCaptcha();
    } catch (err: any) {
      console.error("Lead form error:", err);
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <h3 className="text-lg font-bold text-heading mb-1">Get a Free SEO Quote</h3>
      <p className="text-sm text-body mb-6">Fill out the form and I'll send you a personalized SEO strategy.</p>

      {submitted && (
        <div className="mb-6 rounded-md border border-primary/30 bg-primary/5 p-4 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-heading">Request Sent Successfully!</p>
            <p className="text-sm text-body mt-1">Thanks! We'll review your details and get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-heading">Full Name</Label>
          <Input id="name" name="name" placeholder="e.g. Ahmad Khan" required maxLength={100} value={formData.name} onChange={handleChange} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-heading">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="you@company.com" required maxLength={255} value={formData.email} onChange={handleChange} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="whatsapp" className="text-sm font-medium text-heading">Active WhatsApp Number</Label>
          <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+92 300 1234567" required maxLength={20} value={formData.whatsapp} onChange={handleChange} className="mt-1" />
        </div>
        <div>
          <Label htmlFor="needsSeo" className="text-sm font-medium text-heading">Do you need SEO services?</Label>
          <select
            id="needsSeo"
            name="needsSeo"
            required
            value={formData.needsSeo}
            onChange={handleChange}
            className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
          >
            <option value="" disabled>Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <Label htmlFor="website" className="text-sm font-medium text-heading">Website URL</Label>
          <Input id="website" name="website" type="text" placeholder="yourwebsite.com" required maxLength={500} value={formData.website} onChange={handleChange} className="mt-1" />
        </div>

        {/* Captcha */}
        <div>
          <Label className="text-sm font-medium text-heading">Are you human? Enter the code:</Label>
          <div className="mt-1 flex items-center gap-3">
            <button type="button" onClick={refreshCaptcha} className="text-destructive hover:text-destructive/80 transition-colors shrink-0" aria-label="Refresh captcha">
              <RefreshCw className="h-5 w-5" />
            </button>
            <div className="flex h-10 items-center justify-center rounded-md bg-muted px-4 font-mono text-lg font-bold tracking-[0.3em] text-heading select-none min-w-[90px]">
              {captcha.code}
            </div>
            <Input
              placeholder="Code"
              required
              maxLength={5}
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value.replace(/\s/g, ""))}
              className="max-w-[120px]"
            />
          </div>
        </div>

        {error && <p className="text-sm text-destructive text-center">{error}</p>}
        <Button type="submit" className="w-full gap-2" disabled={loading}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {loading ? "Sending..." : "Get My SEO Quote"}
        </Button>
        <p className="text-xs text-subtle text-center">No spam. Your details are sent securely.</p>
      </form>
    </div>
  );
};

export default LeadGenForm;

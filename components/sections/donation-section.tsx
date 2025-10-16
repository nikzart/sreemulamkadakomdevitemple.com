import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function DonationSection() {
  const donationOptions = [
    { amount: "$21", label: "Auspicious", description: "Supports daily puja offerings" },
    { amount: "$51", label: "Blessing", description: "Helps maintain temple facilities" },
    { amount: "$101", label: "Prosperity", description: "Sponsors community programs" },
  ]

  const paymentMethods = ["visa", "mastercard", "paypal", "apple-pay"]

  return (
    <section id="donate" className="py-20 bg-gradient-to-r from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-12 bg-[url('/border-pattern.png')] bg-repeat-x opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[url('/border-pattern.png')] bg-repeat-x opacity-30 transform rotate-180"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-4 rounded-full bg-amber-100 mb-6">
            <Heart className="h-10 w-10 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-amber-900 font-serif">Support Our Temple</h2>
          <p className="text-slate-700 mb-10 text-lg">
            Your generous donations help us maintain the temple, conduct religious ceremonies, and serve our community
            through various programs and initiatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {donationOptions.map((option, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-amber-100 h-full">
                  <div className="p-8 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-amber-800">{option.amount}</span>
                    </div>
                    <h3 className="text-xl font-bold text-amber-800 mb-2 font-serif">{option.label}</h3>
                    <p className="text-slate-600 text-center mb-6">{option.description}</p>
                    <Button className="mt-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md hover:shadow-lg transition-all duration-300 w-full">
                      Donate {option.amount}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-amber-100">
            <h3 className="text-2xl font-bold mb-6 text-amber-800 font-serif">Custom Donation</h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="flex h-12 w-full rounded-md border border-amber-200 bg-white pl-8 pr-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button className="h-12 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-md px-8">
                Donate Now
              </Button>
            </div>

            <div className="pt-6 border-t border-amber-100">
              <p className="text-sm text-slate-500 mb-4">Secure payment methods:</p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {paymentMethods.map((method) => (
                  <div key={method} className="grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={`/payment-${method}.png`}
                      alt={method}
                      width={60}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            <p>All donations are tax-deductible. Tax receipts will be provided for donations over $25.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

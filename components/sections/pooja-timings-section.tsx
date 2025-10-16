import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

export function PoojaTimingsSection() {
  const morningSchedule = [
    { time: "രാവിലെ 5:00 മണിക്ക്", ritual: "നടതുറക്കൽ" },
    { time: "രാവിലെ 5.05 മണിക്ക്", ritual: "നിർമ്മാല്യം" },
    { time: "രാവിലെ 6:00 മണിക്ക്", ritual: "ഗണപതി ഹോമം" },
    { time: "രാവിലെ 7:30ന്", ritual: "ഉഷ:പൂജ" },
    { time: "രാവിലെ 11:00 മണിക്ക്", ritual: "ഉച്ച പൂജ" },
    { time: "രാവിലെ 11:30ന്", ritual: "നട അടയ്ക്കൽ" },
  ]

  const eveningSchedule = [
    { time: "വൈകിട്ട് 5:00 മണിക്ക്", ritual: "നട തുറക്കൽ" },
    { time: "വൈകിട്ട് 6:45ന്", ritual: "ദീപാരാധന" },
    { time: "രാത്രീ 7:45ന്", ritual: "അത്താഴപൂജ" },
    { time: "രാത്രീ 8:00 മണിക്ക്", ritual: "നട അടയ്ക്കൽ" },
  ]

  return (
    <section id="events" className="py-20 bg-gradient-to-r from-amber-100 to-orange-100 relative overflow-hidden">
      <div className="absolute top-0 right-0">
        <Image src="/corner-pattern.png" alt="Decorative Corner" width={300} height={300} className="opacity-20" />
      </div>
      <div className="absolute bottom-0 left-0 rotate-180">
        <Image src="/corner-pattern.png" alt="Decorative Corner" width={300} height={300} className="opacity-20" />
      </div>

      <div className="container relative z-10">
        <SectionTitle
          subtitle="Daily Schedule"
          title="Pooja Timings"
          description="Join us for the daily rituals and ceremonies that connect devotees with the divine presence."
        />

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-amber-200 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-6 px-8">
            <h3 className="text-2xl font-bold text-white font-serif text-center">ദൈനംദിന പൂജാ സമയം</h3>
          </div>

          <div className="p-6 md:p-8">
            {/* Morning Session */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                <h4 className="px-4 text-lg font-bold text-amber-700 font-serif">രാവിലെ</h4>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
              </div>
              <div className="space-y-3">
                {morningSchedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-amber-50 rounded-lg border border-amber-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-amber-900 font-bold text-lg">{item.ritual}</p>
                      <p className="text-amber-600 text-sm">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider with Temple Closed Notice */}
            <div className="my-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-amber-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 py-2 text-amber-600 text-sm font-medium rounded-full border-2 border-amber-300 shadow-sm">
                  ക്ഷേത്ര നടയടപ്പ് (11:30 AM - 5:00 PM)
                </span>
              </div>
            </div>

            {/* Evening Session */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
                <h4 className="px-4 text-lg font-bold text-orange-700 font-serif">വൈകുന്നേരം</h4>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
              </div>
              <div className="space-y-3">
                {eveningSchedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-orange-50 rounded-lg border border-orange-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center flex-shrink-0 mr-4 shadow-md">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-orange-900 font-bold text-lg">{item.ritual}</p>
                      <p className="text-orange-600 text-sm">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 border-t border-amber-200">
            <p className="text-center text-amber-700 italic">
              Please arrive at least 15 minutes before the scheduled pooja time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

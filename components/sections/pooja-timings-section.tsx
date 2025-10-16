import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

export function PoojaTimingsSection() {
  const poojaSchedule = [
    { time: "രാവിലെ 5:00 മണിക്ക്", ritual: "നടതുറക്കൽ" },
    { time: "രാവിലെ 5.05 മണിക്ക്", ritual: "നിർമ്മാല്യം" },
    { time: "രാവിലെ 6:00 മണിക്ക്", ritual: "ഗണപതി ഹോമം" },
    { time: "രാവിലെ 7:30ന്", ritual: "ഉഷ:പൂജ" },
    { time: "രാവിലെ 11:00 മണിക്ക്", ritual: "ഉച്ച പൂജ" },
    { time: "രാവിലെ 11:30ന്", ritual: "നട അടയ്ക്കൽ" },
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

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-amber-200 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-6 px-8">
            <h3 className="text-2xl font-bold text-white font-serif text-center">ദൈനംദിന പൂജാ സമയം</h3>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {poojaSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 ${index % 2 === 0 ? "bg-amber-50" : "bg-white"} rounded-lg border border-amber-100`}
                >
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-amber-800 font-medium text-lg">{item.ritual}</p>
                    <p className="text-amber-600">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 p-6 border-t border-amber-200">
            <p className="text-center text-amber-700 italic">
              Please arrive at least 15 minutes before the scheduled pooja time.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 hover:text-amber-800 transition-all duration-300 rounded-full px-8"
          >
            Special Festival Schedule
          </Button>
        </div>
      </div>
    </section>
  )
}

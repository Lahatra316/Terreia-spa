import { Quote, Star, Flower2 } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-space-xl">
      <div className="rounded-3xl bg-secondary-container/30 p-10 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>
        
        {/* Image */}
        <div className="w-full lg:w-5/12 shrink-0">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_36px_-8px_rgba(78,86,75,0.08)]">
            <div className="w-full h-96 bg-cover bg-center" 
                 style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB43qIBk1nOJAWn3Qn89iCMedYJ4ySN7UXJI4mTpW6B2TTd04blXliAP8xBC50l3lm7lvvWUkCoefoJUekcWE34PNRbX6o3LXvakQb6COM7WunVfYoG6uRLzaWKNYCERTQJspRtzxQs2RkV_Q0obrluA87K4nvI-20SLno2qrgB4Yv4Lctewt2VI0hTzW-0BrWvi-ja-k9-WVpbu3hVog0HV6Mdrp9MlNcnxj5zMCOH')" }}></div>
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md rounded-xl p-4 flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-secondary" />
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Atmosphère Intérieure</p>
                <p className="font-body-sm text-body-sm text-tertiary">Silence sacré & senteurs de garrigue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Citation */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <Quote className="w-12 h-12 text-secondary/40 mb-2" />
          <blockquote className="font-headline-lg text-[28px] lg:text-[34px] leading-relaxed text-on-surface italic font-light mb-8">
            « Chez Terreia, le temps cesse d'être une contrainte pour devenir une matière soyeuse. Chaque goutte d'huile tiède, chaque souffle de vapeur invite à une paix originelle. »
          </blockquote>
          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-secondary/20">
            <div>
              <cite className="not-italic font-label-md text-label-md uppercase tracking-widest text-on-surface font-semibold block">Hélène de Saint-Germain</cite>
              <span className="font-body-sm text-body-sm text-tertiary">Critique Art de Vivre • Carnet Sensoriel</span>
            </div>
            <div className="flex items-center gap-1 text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary" />
              ))}
              <span className="font-label-sm text-label-sm font-semibold text-on-surface ml-1.5">5.0 / 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
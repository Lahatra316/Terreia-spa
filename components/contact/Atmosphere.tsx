import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Atmosphere() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 space-y-3">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Atmosphère Immersive</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface">Une transition en douceur</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Dès le franchissement de notre cour d'oliviers centenaires, un thé blanc infusé à la verveine sauvage vous est offert afin d'aligner vos sens avec la cadence du sanctuaire.
          </p>
          <div className="pt-2">
            <Link href="/soins" className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-primary-container font-semibold transition-colors">
              <span>Découvrir les bassins d'argile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-72 shadow-md relative group">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuATOPPrGehZxXcZNe3TtYpuGkyIyN7kuXXSkqXyFdHz3b_yQ3wFv8phIbv2peICZ1U0p6U5CD3lkirC0DTEb7SrzJaP0XYE6omAMkHx7HbYO1TPjmrS7VBZRrb6DABe9qiUs77sxdsA32m93t1l16CRvKlyX20Gm3jjyEd4F9TVl5CMGjuBGlFlEJXQBg2tKXS7msyHsyxEKYc5L0fNmY7NlXyMBejkyaWmuiuP_wVX" 
                 alt="Bassin Thermal" />
            <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Bassin Thermal 38°C</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-72 shadow-md relative group mt-8">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtDKhHFz_TI6ZYcadcsJz3X1LQfO0EIrROS5Lf_o16hC-SEBmluyZMy2LLY7xJ-rHSKU8PEHM0Xuiux-v3HSa_dJOuIubwV9eLf3-X698h0IwHV_h8hBQm1E05jp5QavyBLkeHpVew5A8XPcae4e60Mjf5vgN2L_vrGBAb1LQluQ-Ehrhi3HBSKaukRqHhYYoA_zZ7Q2l6qicIg4NV6lnddE-D3ygXQ9Xw4sYVJgqu" 
                 alt="Tisanerie" />
            <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Tisanerie des Herbes Rares</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
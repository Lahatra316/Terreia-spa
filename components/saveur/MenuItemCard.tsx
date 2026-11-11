import { MenuItem } from "./data";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="group p-5 lg:p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      
      <div className="space-y-2 max-w-xl">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          {item.tags.map((tag, idx) => (
            <span key={idx} className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider ${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </div>
        
        <p className="font-body-md text-body-md text-on-surface-variant">
          {item.description}
        </p>
        
        <p className="font-body-sm text-body-sm text-tertiary italic">
          Vertus : {item.vertus}
        </p>
      </div>

      <div className="flex md:flex-col items-center md:items-end justify-between shrink-0 pt-2 md:pt-0">
        <span className="font-headline-sm text-headline-sm text-secondary font-medium">{item.price}</span>
        <span className="font-label-sm text-label-sm text-tertiary tracking-wider mt-1">{item.unit}</span>
      </div>

    </div>
  );
}
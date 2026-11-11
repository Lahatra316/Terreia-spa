"use client";

import { useState } from "react";
import { categories, menuItems } from "./data";
import MenuItemCard from "./MenuItemCard";
import Sidebar from "./Sidebar";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = menuItems.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <section className="w-full py-16 relative -mt-10 bg-background rounded-t-[40px]">
      <div className="max-w-[1280px] mx-auto px-margin">
        
        {/* Onglets */}
        <div className="w-full flex items-center justify-start lg:justify-center overflow-x-auto pb-6 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-full bg-surface-container shadow-sm gap-1 text-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
          
          {/* Colonne Menu (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
            {filteredItems.length === 0 && (
              <p className="text-center text-tertiary py-12">Aucun plat dans cette catégorie pour le moment.</p>
            )}
          </div>

          {/* Colonne Sidebar (4 cols) */}
          <Sidebar />
          
        </div>
      </div>
    </section>
  );
}
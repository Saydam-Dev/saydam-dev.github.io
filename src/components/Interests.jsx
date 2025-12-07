import { useRef, useState } from "react";

function Interests({ title, items }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleOpen = () => {
        const content = contentRef.current;

        if (!content) return;

        if (open) {
        content.style.height = content.scrollHeight + "px";
        requestAnimationFrame(() => {
            content.style.height = "0px";
        });
        } else {
        content.style.height = content.scrollHeight + "px";
        }

        setOpen(prev => !prev);
    };

  return (
    <div className="w-full">
        <div 
            onClick={toggleOpen}
            className="group relative grid grid-cols-8 items-center p-5 rounded-xl border border-slate-700/40 bg-slate-800/40 backdrop-blur-sm transition-all hover:scale-105 hover:bg-slate-800/60 hover:border-slate-600 cursor-pointer"
            >
            <h3 className="col-span-6 text-slate-200 font-semibold tracking-wide text-sm sm:text-base">
            {title}
            </h3>
            <div className="col-span-2 text-right">
            <span className="inline-block text-xl font-bold text-amber-400 group-hover:text-amber-300 transition-transform">
                {open ? "−" : "+"}
            </span>
            </div>
        </div>

        {/* Mini Kartlar */}
        <div
            ref={contentRef}
            className="overflow-hidden transition-[height] duration-300 text-center"
            style={{ height: "0px" }}
        >
            <div className="mt-2 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-1">
            {items.map((item, i) => (
                <a
                noopener
                noreferrer
                target="_blank"
                href={item.link}
                key={i}
                className="p-4 rounded-lg bg-slate-700/40 text-slate-200 border border-slate-600 transition-transform hover:scale-105"
                >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm mt-1">{item.description}</p>
                </a>
            ))}
            </div>
        </div>
        </div>
  );
}

export default Interests;

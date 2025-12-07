
//Prop list > tecrubeismi, tecrubelinki, tecrubeparagrafi, yildanyila
function Experience(props){
    return(
        <>
            <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"/>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2025 - Simdiye">{props.yildanyila}</header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-amber-400 focus-visible:text-teal-300  group/link text-base" target="_blank" href={props.tecrubelinki} rel="noreferrer noopener" aria-label="Proje Başlığı, yeni sayfada açılıyor.">
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span className="text-lg">{props.tecrubeismi}</span>
                                </a>
                            </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">{props.tecrubeparagrafi}</p>
                    </div>
                </div>
            </li>
        </>
    )
}


export default Experience
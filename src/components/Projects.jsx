
//Prop list > projeismi, projelinki, projeparagrafi, projeyildanyila
function Projects(props){
    return(
        <>
            <div>
                <ol>
                    <li>
                        <div className="group relative grid pb-1 p-4 m-4 mb-10 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-md">
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2025 - Simdiye">{props.yildanyila}</header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-amber-400 focus-visible:text-teal-300  group/link text-base" target="_blank" href={props.projelinki} rel="noreferrer noopener" aria-label="Proje Başlığı, yeni sayfada açılıyor.">
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span className="text-lg">{props.projeismi}</span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">{props.projeparagrafi}</p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </>
    )
}


export default Projects
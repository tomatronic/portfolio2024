export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
<div className="flex w-full items-center justify-center">
        <div className="flex w-full flex-col px-4 md:w-2/3">                       
            <div className="text-xs flex flex-col">                               
                <div className="text-xs my-12 w-full text-center text-slate-950">Designed and built by Tom Spencer - {year}</div>
            </div>
        </div>
    </div>
    )}
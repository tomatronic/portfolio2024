export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
<div className="flex w-full items-center justify-center bg-slate-950">
        <div className="flex w-full flex-col px-4 md:w-2/3">                       
            <div className="flex flex-col">                               
                <p className="my-12 w-full text-center text-gray-100">Designed and built by Tom Spencer - {year}</p>
            </div>
        </div>
    </div>
    )}
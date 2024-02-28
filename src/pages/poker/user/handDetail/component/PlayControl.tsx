
export default function PlayControl({ playSpeed, setPlaySpeed, setIsPlay }: any) {

    return (
        <div className='absolute top-[100px] right-[10px] flex justify-start items-center'>
                <button type="button" className="btn btn-outline-primary w-10 h-10 p-0 rounded-full mr-10" onClick={() => setIsPlay(true)}>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="play-circle" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true">
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path>
                    </svg>
                </button>
                <button type="button" className="btn btn-outline-primary w-10 h-10 p-0 rounded-full mr-10" onClick={() => setIsPlay(false)}>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="pause" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true">
                        <path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                </button>
                <button type="button" className="btn btn-outline-primary w-10 h-10 p-0 rounded-full mr-10" onClick={() => setPlaySpeed((previousSpeed: number) => previousSpeed * 2)}>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="double-left" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true">
                        <path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"></path>
                    </svg>
                </button>
                <button type="button" className="btn btn-outline-primary w-10 h-10 p-0 rounded-full mr-10">
                    {1 / (playSpeed / 1000)} X
                </button>
                <button type="button" className="btn btn-outline-primary w-10 h-10 p-0 rounded-full" onClick={() => setPlaySpeed((previousSpeed: number) => previousSpeed / 2)}>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="double-right" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true">
                        <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
                    </svg>
                </button>
            </div>

    )
}
export default function ColorDiagram({ type }: any) {

    const color1: string = "#3d7cb8";
    const color2: string = "#00cf00";
    const color3: string = "#ff0000";
    const color4: string = "#7d1f1f";

    return (
        <div className="pt-[30px] h-[34em]">
            {
                type === 0 &&
                <div
                    className="w-[15px] h-[31.2em] bg-gradient-to-b from-opacity-1 to-opacity-0 bg-[#3d7cb8]"
                    style={{ background: "linear-gradient(to bottom, rgba(61, 124, 184, 1), rgba(61, 124, 184, 0))" }}
                />
            }
            {
                type === 1 &&
                <div
                    className="w-[15px] h-[31.2em] bg-gradient-to-b from-opacity-1 to-opacity-0 bg-[#00cf00]"
                    style={{ background: "linear-gradient(to bottom, rgba(0, 207, 0, 1), rgba(0, 207, 184, 0))" }}
                />
            }
            {
                type === 2 &&
                <div
                    className="w-[15px] h-[31.2em] bg-gradient-to-b from-opacity-1 to-opacity-0 bg-[#ff0000]"
                    style={{ background: "linear-gradient(to bottom, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0))" }}
                />
            }
            {
                type === 3 &&
                <div
                    className="w-[15px] h-[31.2em] bg-gradient-to-b from-opacity-1 to-opacity-0 bg-[#7d1f1f]"
                    style={{ background: "linear-gradient(to bottom, rgba(125, 31, 31, 1), rgba(125, 31, 31, 0))" }}
                />
            }
            {
                type === -1 &&
                <div
                    className="w-[15px] h-[31.2em] bg-gradient-to-b from-opacity-1 to-opacity-0 bg-[#6e5b36]"
                    style={{ background: "linear-gradient(to bottom, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0))" }}
                />
            }
        </div>
    )
}


// Convert hex color to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const bigint: number = parseInt(hex.slice(1), 16);
    const r: number = (bigint >> 16) & 255;
    const g: number = (bigint >> 8) & 255;
    const b: number = bigint & 255;
    return { r, g, b };
}

// Convert RGB to hex color
function rgbToHex(rgb: { r: number; g: number; b: number }): string {
    const { r, g, b } = rgb;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Add colors
function addColors(colors: string[]): string {
    let sumR: number = 0;
    let sumG: number = 0;
    let sumB: number = 0;

    colors.forEach((color) => {
        const { r, g, b } = hexToRgb(color);
        sumR += r;
        sumG += g;
        sumB += b;
    });

    const avgR: number = Math.round(sumR / colors.length);
    const avgG: number = Math.round(sumG / colors.length);
    const avgB: number = Math.round(sumB / colors.length);

    return rgbToHex({ r: avgR, g: avgG, b: avgB });
}

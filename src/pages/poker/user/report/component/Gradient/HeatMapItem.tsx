import { findNearestColor } from '../../../../../..//utils/actionValidation/reporting/getGlobalFrequency'
import { actionNodeDistinguish } from '../../../../../../utils/system/actionNodeDistinguish'
import clsx from 'clsx'


const HeatMapItem = ({ nextObject, userTab, data, reportingResultItem, handResult, setInterestingPair, bufferSetReportItemActive, reportItemActive }: any) => {

    return (
        <div
            className={clsx("relative h-[36px] z-[1] cursor-pointer transition-all", reportItemActive === data ? "rounded-[4px]" : "rounded-[0px]")}
            style={{
                backgroundColor: findNearestColor(Math.abs((1 - reportingResultItem.played[0]) - nextObject)),
                filter: reportItemActive === data ? `blur(${0}px)` : `blur(${25}px)`
            }}
            onClick={() => {
                bufferSetReportItemActive(data)
                setInterestingPair(actionNodeDistinguish(handResult, userTab) ? actionNodeDistinguish(handResult, userTab) : [])
            }}
        >
            <div className={clsx("absoulte transition-all", reportItemActive === data ? "w-[180px] h-[120px] bg-gray-100 rounded-[4px] p-2 pt-4 border border-gray-900 border-[2px]" : "w-[0px] h-[0px]")}>

                <p className='text-left text-[32px] text-gray-800 font-bold'>{data}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-gray-900 font-bold text-right mt-2'>Category</p>
                    <p className='text-gray-900 font-bold text-right mt-2'>Frequency</p>
                </div>

                <div className='flex justify-between items-center'>
                    <p className='text-gray-900 font-bold'>Total</p>
                    <p className='text-gray-900 font-bold'>{(Math.abs((1 - reportingResultItem.played[0]) - nextObject) * 100).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default HeatMapItem;


// import React from 'react';
// import { IgrGeographicMapModule } from 'igniteui-react-maps';
// import { IgrGeographicMap } from 'igniteui-react-maps';
// import { IgrGeographicTileSeries } from 'igniteui-react-maps';
// import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// import { IgrHeatTileGenerator } from 'igniteui-react-core';
// import { IgrTileGeneratorMapImagery } from 'igniteui-react-maps';
// // background worker
// import Worker from "./heatworker.worker"

// IgrDataChartInteractivityModule.register();
// IgrGeographicMapModule.register();

// export default class MapDisplayImageryHeatTiles extends React.Component {

//     public map!: IgrGeographicMap;
//     public tileImagery: IgrTileGeneratorMapImagery;

//     constructor(props: any) {
//         super(props);

//         this.tileImagery = new IgrTileGeneratorMapImagery();
//         this.onMapRef = this.onMapRef.bind(this);
//         this.onDataLoaded = this.onDataLoaded.bind(this);
//     }

//     public render(): JSX.Element {
//         return (
//             <div className="bg-gray-800 mt-[2px] h-[32.2em]">
//                 <div className="container" >
//                     <IgrGeographicMap
//                         ref={this.onMapRef}
//                         width="100%"
//                         height="100%"
//                         zoomable="true"
//                     />
//                 </div>
//                 <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
//             </div>
//         );
//     }

//     public onMapRef(geoMap: IgrGeographicMap) {
//         if (!geoMap) { return; }

//         this.map = geoMap;
//         this.map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
//     }

//     public componentDidMount() {
//         // fetching JSON data with geographic locations from public folder

//         fetch("https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv")
//             .then((response) => response.text())
//             .then((data) => this.onDataLoaded(data));
//     }

//     public onDataLoaded(csvData: string) {
//         const csvLines = csvData.split("\n");
//         console.log("loaded UsaCitiesPopulation.csv " + csvLines.length);

//         const latitudes: number[] = [];
//         const longitudes: number[] = [];
//         const populations: number[] = [];

//         // parsing CSV data and creating geographic locations
//         for (let i = 1; i < csvLines.length; i++) {
//             const columns = csvLines[i].split(",");
//             latitudes.push(Number(columns[1]));
//             longitudes.push(Number(columns[2]));
//             populations.push(Number(columns[3]));
//         }

//         // generating heat map imagery tiles
//         const gen = new IgrHeatTileGenerator();
//         gen.xValues = longitudes;
//         gen.yValues = latitudes;
//         gen.values = populations;
//         gen.blurRadius = 6;
//         gen.maxBlurRadius = 20;
//         gen.useBlurRadiusAdjustedForZoom = true;
//         gen.minimumColor = "rgba(100, 255, 0, 0.5)";
//         gen.maximumColor = "rgba(255, 255, 0, 0.5)";
//         gen.useGlobalMinMax = true;
//         gen.useGlobalMinMaxAdjustedForZoom = true;
//         gen.useLogarithmicScale = true;
//         gen.useWebWorkers = true;
//         gen.webWorkerInstance = new Worker();
//         gen.scaleColors = [
//             "rgba(0, 0, 255, .251)", "rgba(0, 255, 255, .3765)",
//             "rgba(50,205,50, .2675)", "rgba(255, 255, 0, .7059)",
//             "rgba(255, 0, 0, .7843)"
//         ];
//         this.tileImagery.tileGenerator = gen;

//         // generating heat map series
//         const series = new IgrGeographicTileSeries({ name: "heatMapSeries" });
//         series.tileImagery = this.tileImagery;
//         series.showDefaultTooltip = true;

//         // add heat map series to the map
//         this.map.series.add(series);
//     }
// }
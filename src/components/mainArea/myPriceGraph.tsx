import React, {Component, useEffect, useState} from "react";
import { ResponsiveLine } from '@nivo/line'
import ProductType from "../types/productType";
import { GraphDataType, GraphPriceType } from "../types/graphType";

type GraphData  = {
    data: ProductType
}


function MyPriceGraph(props: GraphData){
    const [graphData, setData] = useState<GraphDataType[]>([])

    useEffect(() => {
        const priceData = props.data.price
        setData(
            [{
                id: props.data.category,
                color: "hsl(300, 70%, 50%)",
                data: priceData.map((datum) => (
                    {x: datum.date, y: datum.price}
                ))
            }]
        )
        return (
            console.log(graphData)
        )
    }, [])

    return(
        <ResponsiveLine
        data={graphData}
        margin={{top: 50, right: 110, bottom: 50, left: 60}}
        xScale={{type: 'point'}}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'date',
            legendOffset: 36,
            legendPosition: 'middle',

        }}

        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '$',
            legendOffset: -40,
            legendPosition: 'middle',
        }}
        pointSize={5}
        pointColor={{theme: 'background'}}
        pointBorderWidth={1}
        pointBorderColor={{from: 'serieColor'}}
        pointLabelYOffset={-12}
        useMesh = {true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
    );
}


export default MyPriceGraph;
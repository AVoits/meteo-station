import * as d3 from 'd3';

import moment from 'moment';

interface IInputData {
  data: {
    rp5Data: IRP5Data[];
  };
}

interface IRP5Data {
  ClCmCloudCover: any;
  airTempAboveGround: number;
  atmPressureSea: number;
  atmPressureStation: number;
  cloudCover: any[];
  cloudsCl: any;
  cloudsCm: any;
  dewPointTemp: number;
  humidity: number;
  id: string;
  localTime: string;
  maxAirTemp: number;
  minAirTemp: any;
  precipitation: number;
  precipitationAccumulationTime: number;
  snowDepth: any;
  windDirection: string;
  windSpeed: number;
}


type CommonData = IDayData[];

interface IDayData {
  day: number;
  hour: number;
  value: number;
}

interface TimeStamp {
  day: number;
  hour: number;
}

const getDayAndTime = (data: string): TimeStamp => {

  const dataStamp = moment(data);
  const day = dataStamp.clone().date();
  const hour = dataStamp.clone().hour();

  return { hour, day };
};


const rangeData = (start: number, end: number) => {
  return Array.from(Array(end - start + 1), (_, idx) => start + idx);
};

export const heatMapCommon = (inputData: IInputData) => {

  const { rp5Data } = inputData.data;

  const dataForSvg: CommonData = rp5Data.map(item => {

    const time = getDayAndTime(item.localTime);
    const result: IDayData = {
      day: time.day,
      hour: time.hour,
      value: Number(item.airTempAboveGround),
    };

    return result;
  });



  const margin = { top: 30, right: 30, bottom: 100, left: 30 };

  const width = 1300 - margin.left - margin.right - 42;
  const height = 430 - margin.top - margin.bottom;
  const gridSize = 24;
  const legendElementWidth = gridSize * 2;
  const buckets = 9;
  const colorsArray = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'];
  const days = rangeData(1, 31);
  const times = ['0', '3', '6', '9', '12', '15', '18', '21'];

  const datasets = [dataForSvg];

  const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .attr('style', 'border: 1px solid #ccc')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const dayLabels = svg.selectAll('.dayLabel')
    .data(days)
    .enter().append('g');

  dayLabels.append('rect')
    .attr('width', gridSize)
    .attr('height', gridSize)
    .style('fill', '#ffe193')
    .attr('y', `${gridSize}`)
    .attr('x', (d, i) => i * gridSize);

  dayLabels.append('text')
    .text((d) => d)
    .attr('y', 0)
    .attr('x', (d, i) => i * gridSize)
    .style('text-anchor', 'end')
    // .attr('transform', `translate(${gridSize}, 0)`)
    .attr('class', (d, i) => ((i >= 0 && i <= 4) ? 'dayLabel mono axis axis-workweek' : 'dayLabel mono axis'));

  const timeLabels = svg.selectAll('.timeLabel')
    .data(times)
    .enter().append('text')
    .text((d) => d)
    .attr('x', 0)
    .attr('y', (d, i) => i * gridSize)
    .style('text-anchor', 'middle')
    .attr('transform', `translate(0, ${gridSize})`)
    .attr('class', (d, i) => ((i >= 7 && i <= 16) ? 'timeLabel mono axis axis-worktime' : 'timeLabel mono axis'));


  const drawCards = (data, colors) => {

    const colorScale = d3.scaleQuantile()
      .domain([0, buckets - 1, d3.max(data, (d: IDayData) => d.value)])
      .range(colors);

    const cards = svg.selectAll('.hour')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', gridSize)
      .attr('height', gridSize)
      .style('fill', colorsArray[0])
      .attr('rx', 6)
      .attr('ry', 6)
      .attr('class', 'hour bordered')
      .attr('y', (d: IDayData) => (d.hour + 1) * gridSize)
      .attr('x', (d: IDayData) => (d.day + 1) * gridSize);


    cards.append('title');


    cards.transition().duration(1000)
      .style('fill', (d: IDayData) => colorScale(d.value));

    cards.select('title').text((d: IDayData) => `${d.value} / ${d.day} / ${d.hour}`);

    cards.exit().remove();

    const legend = svg.selectAll('.legend')
      .data([].concat(colorScale.quantiles()), (d) => d);

    legend.enter().append('g')
      .attr('class', 'legend');

    legend.append('rect')
      .attr('x', (d, i) => legendElementWidth * i)
      .attr('y', height)
      .attr('width', legendElementWidth)
      .attr('height', gridSize / 2)
      .style('fill', (d, i) => colors[i]);

    legend.append('text')
      .attr('class', 'mono')
      .text((d) => '≥ ' + Math.round(d))
      .attr('x', (d, i) => legendElementWidth * i)
      .attr('y', height + gridSize);

    legend.exit().remove();

  };

  const heatmapChart = (data) => {

    drawCards(data, colorsArray);


  };



  heatmapChart(datasets[0]);

  const datasetpicker = d3
    .select('#dataset-picker')
    .selectAll('.dataset-button')
    .data(datasets);

  datasetpicker.enter()
    .append('input')
    .attr('value', (d) => 'Dataset ' + d)
    .attr('type', 'button')
    .attr('class', 'dataset-button')
    .on('click', (d) => { heatmapChart(d); });
};


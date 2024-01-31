const fs = require('fs');
const csv = require('csv-parser');
const util = require('util');
const stream = require('stream');

const pipeline = util.promisify(stream.pipeline);

// Largest Triangle Three Buckets Algorithm
const lttb = (data, threshold) => {
    if (data.length <= threshold) {
      return data;
    }
  
    const sampledData = [];
    const every = (data.length - 2) / (threshold - 2);
  
    let a = 0;
    let nextA = 0;
    
    sampledData.push(data[a]);
  
    for (let i = 0; i < threshold - 2; i++) {
      let avgX = 0;
      let avgY = 0;
      let avgRangeStart = Math.floor((i + 1) * every) + 1;
      let avgRangeEnd = Math.floor((i + 2) * every) + 1;
      avgRangeEnd = avgRangeEnd < data.length ? avgRangeEnd : data.length;
  
      let avgRangeLength = avgRangeEnd - avgRangeStart;
      
      for (; avgRangeStart < avgRangeEnd; avgRangeStart++) {
        avgX += data[avgRangeStart].timestamp * 1;
        avgY += data[avgRangeStart].value * 1;
      }
      avgX /= avgRangeLength;
      avgY /= avgRangeLength;
  
      let rangeOffs = Math.floor((i + 0) * every) + 1;
      let rangeTo = Math.floor((i + 1) * every) + 1;
  
      let pointAx = data[a].timestamp * 1;
      let pointAy = data[a].value * 1;
  
      let maxArea = -1;
  
      for (; rangeOffs < rangeTo; rangeOffs++) {
        let area = Math.abs((pointAx - avgX) * (data[rangeOffs].value - pointAy) - 
                            (pointAx - data[rangeOffs].timestamp) * (avgY - pointAy)
                           ) * 0.5;
        if (area > maxArea) {
          maxArea = area;
          nextA = rangeOffs;
        }
      }
  
      sampledData.push(data[nextA]);
      a = nextA;
    }
  
    sampledData.push(data[data.length - 1]);
  
    return sampledData;
  };

const readCsvAndDownsample = async (csvFilePath, threshold) => {
  const data = [];

  await pipeline(
    fs.createReadStream(csvFilePath),
    csv(),
    new stream.Transform({
      objectMode: true,
      transform(row, encoding, callback) {
        this.push({
          timestamp: new Date(row['Timestamp']).getTime(),
          value: parseFloat(row['Profit Percentage'])
        });
        callback();
      }
    })
    .on('data', (dataPoint) => data.push(dataPoint))
  );

  return lttb(data, threshold);
};

module.exports = readCsvAndDownsample;


function formatDateToCustomFormat(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }

const timelinedata = (startTime, month, callback) => {
    let timeLine = [];
                        for(let i = 0; i< month; i++){
                            let nxtd = parseInt(startTime) + 86400;
                            startTime = nxtd;
                            timeLine.push(formatDateToCustomFormat(new Date(nxtd * 1000)))
                            // setTimeline(timeline => [...timeline, new Date(nxtd * 1000)])
                        }

                        callback(timeLine)
}

export default timelinedata;
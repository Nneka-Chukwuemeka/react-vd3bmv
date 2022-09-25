import React from 'react';
const seasonConfig = {
  summer: {
    text: ' if you are in west africa you are in raining season, but abroad you dey summer',
  },
  winter: {
    text: 'If you dey west africa you are in dry season. If you done port nah winter',
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
export default function SeasonDetail(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const { text } = seasonConfig[season];

  return <div> {text} </div>;
}

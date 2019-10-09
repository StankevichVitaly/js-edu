/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const timeForLearn = 800;
      const timeForLearnBasic = 500;
      if(knowsProgramming){
        return  Math.ceil(timeForLearn/config[focus]);
      }else{
        return Math.ceil((timeForLearn + timeForLearnBasic)/config[focus]);
      }
  };

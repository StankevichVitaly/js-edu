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
      const timeToLearn = 800;
      const timeToLearnBasic = 500;
      if(knowsProgramming){
        return  Math.ceil(timeToLearn/config[focus]);
      }else{
        return Math.ceil((timeToLearn + timeToLearnBasic)/config[focus]);
      }
  };

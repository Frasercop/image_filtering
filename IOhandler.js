/*
 * Project: COMP1320 Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 * 
 * Created Date: 
 * Author: 
 * 
 */

const unzipper = require('unzipper'),
  fs = require("fs"),
  PNG = require('pngjs').PNG,
  path = require('path');


/**
 * Description: decompress file from given pathIn, write to given pathOut 
 *  
 * @param {string} pathIn 
 * @param {string} pathOut 
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  fs.createReadStream(pathIn)
  .pipe(unzipper.Extract({path: pathOut}))
  .promise()
  .then(() => console.log(done), e => console.log('error',e));
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path 
 * 
 * @param {string} path 
 * @return {promise}
 */
const readDir = dir => {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      let pngFiles = [];
      files.forEach(file => {
        if (file.endsWith("png")) {
          pngFiles.push(file);
        }
      });
    }
  } )
};

/**
 * Description: Read in png file by given pathIn, 
 * convert to grayscale and write to given pathOut
 * 
 * @param {string} filePath 
 * @param {string} pathProcessed 
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  fs.createReadStream(path)
  .pipe (
    new PNG({
      filterType: 4,
    })
  )
};

module.exports = {
  unzip,
  readDir,
  grayScale
};
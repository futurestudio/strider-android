
module.exports = {
  config: {
    /* no version support yet
    runtime: {
      type: String,
      enum: ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 'whatever']
    },
    */
    test: {
      type: String,
      enum: ['none', 'gradle build'],
      default: 'gradle build'
    },
    prepare: {
      type: String,
      default: 'gradle install'
    }
  }
}

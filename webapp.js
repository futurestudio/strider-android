
module.exports = {
  config: {
    /* no version support yet
    runtime: {
      type: String,
      enum: ['2.6', '2.7', '3.3', 'whatever']
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

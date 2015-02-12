import Ember from 'ember';

export default Ember.Controller.extend({
  currentPug: 1,
  totalPugs: function() {
    return this.get('model').get('length');
  }.property('model'),
  marginLeft: function() {
    return "margin-left: -" + ((this.get('currentPug') - 1) * 250) + "px";
  }.property('currentPug'),
  actions: {
    nextPug: function() {
      var next_pug_index;
      console.log(">>>>>" + this.get('currentPug'), this.get('totalPugs'))
      if( this.get('currentPug') + 1 <= this.get('totalPugs')) {
        alert('next pug');
        next_pug_index = this.get('currentPug') + 1;
      } else {
        alert('not next pug')
        next_pug_index = this.get('currentPug');
      }
      this.set('currentPug', next_pug_index);
    }
  }
});

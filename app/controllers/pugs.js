import Ember from 'ember';

export default Ember.Controller.extend({
  currentPug: 1,
  pugsCart: 0,
  pugsInCart: function() {
    return this.get('pugsCart');
  }.property('pugsCart'),
  totalPugs: function() {
    return this.get('model').get('length');
  }.property('model'),
  marginLeft: function() {
    return "margin-left: -" + ((this.get('currentPug') - 1) * 250) + "px";
  }.property('currentPug'),
  actions: {
    skip: function() {
      this.send('nextPug');
    },
    add: function() {
      this.set('pugsCart', this.get('pugsCart') + 1);
      this.send('nextPug');
    },
    nextPug: function() {
      var next_pug_index;
      console.log(">>>>>" + this.get('currentPug'), this.get('totalPugs'))
      if( this.get('currentPug') + 1 <= this.get('totalPugs')) {
        next_pug_index = this.get('currentPug') + 1;
      } else {
        next_pug_index = this.get('currentPug');
      }
      this.set('currentPug', next_pug_index);
    }
  }
});

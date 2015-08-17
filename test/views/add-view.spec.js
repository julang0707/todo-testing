import jQuery from 'jquery';
import {_} from 'underscore';

import AddView from '../../src/js/views/add-view'
import TodosCollection from '../../src/js/collections/todos'

describe('AddView', function() {
  beforeEach(function() {
    this.collection = new TodosCollection;

    this.view = new AddView({
      collection: this.collection
    });
    this.view.render();
  });

  it('should add a new Todo when enter is pressed', function() {
    let $input = this.view.$('#new-todo');
    $input.val('Will heals');
    let title = $input.val();
    let e = jQuery.Event('keypress', { keyCode: 13 });

    $input.trigger(e);

    expect(this.collection.length).toEqual(1);
    expect(this.collection.at(0).get('title')).toEqual(title);
    expect($input.val()).toEqual('');
  });
});
